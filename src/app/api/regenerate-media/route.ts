/**
 * One-time migration route — regenerates Payload image sizes for all existing media.
 * Usage: POST /api/regenerate-media  with body { "secret": "<your PAYLOAD_SECRET>" }
 * Delete this file after running it successfully.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))

  if (!body.secret || body.secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = await getPayload({ config: await config })

  const { docs, totalDocs } = await payload.find({
    collection: 'media',
    limit: 200,
    depth: 0,
  })

  const results: { id: number | string; filename: string; status: string }[] = []

  for (const doc of docs) {
    const url = doc.url as string
    const filename = (doc.filename as string) ?? String(doc.id)

    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`)

      const buffer = Buffer.from(await res.arrayBuffer())
      const mimetype = res.headers.get('content-type') ?? 'image/jpeg'

      await payload.update({
        collection: 'media',
        id: doc.id,
        data: {},
        file: { data: buffer, mimetype, name: filename, size: buffer.length },
      })

      results.push({ id: doc.id, filename, status: 'ok' })
    } catch (err) {
      results.push({ id: doc.id, filename, status: `error: ${String(err)}` })
    }
  }

  const failed = results.filter((r) => r.status !== 'ok')
  return NextResponse.json({ total: totalDocs, processed: results.length, failed, results })
}
