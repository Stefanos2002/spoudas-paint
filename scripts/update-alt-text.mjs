// Run (dry run — no changes):  node scripts/update-alt-text.mjs
// Run (apply changes):          node scripts/update-alt-text.mjs --apply

const BASE = process.env.PAYLOAD_URL || 'http://localhost:3000'
const APPLY = process.argv.includes('--apply')

async function get(path) {
  const res = await fetch(`${BASE}/api/${path}`)
  if (!res.ok) throw new Error(`GET /api/${path} → ${res.status}`)
  const data = await res.json()
  return data.docs ?? []
}

async function patch(id, alt) {
  const res = await fetch(`${BASE}/api/media/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ alt }),
  })
  if (!res.ok) throw new Error(`PATCH /api/media/${id} → ${res.status}`)
}

function fromFilename(filename = '') {
  return filename
    .replace(/\.[^.]+$/, '')  // strip extension
    .replace(/[-_]/g, ' ')    // dashes/underscores → spaces
    .trim()
}

async function main() {
  console.log(`\nMode: ${APPLY ? 'APPLY (changes will be saved)' : 'DRY RUN (pass --apply to save)'}\n`)

  // Build mediaId → alt text from each collection that references media
  const altMap = new Map()

  const galleries = await get('gallery?depth=1&limit=200')
  for (const gallery of galleries) {
    for (const item of gallery.images ?? []) {
      const img = item.image
      if (!img?.id) continue
      altMap.set(String(img.id), `Έργο ελαιοχρωματισμού — ${gallery.title}`)
    }
  }

  const services = await get('services?depth=1&limit=200')
  for (const s of services) {
    const img = s.image
    if (!img?.id) continue
    altMap.set(String(img.id), `Υπηρεσία ${s.title} — Σπούδας Χρώμα & Διακόσμηση`)
  }

  const team = await get('team?depth=1&limit=200')
  for (const m of team) {
    const img = m.image
    if (!img?.id) continue
    altMap.set(String(img.id), `${m.name} — ${m.role}`)
  }

  // Fetch all media and update
  const allMedia = await get('media?depth=0&limit=500')

  let willUpdate = 0
  let willSkip = 0

  for (const media of allMedia) {
    const id = String(media.id)
    const newAlt = altMap.get(id) ?? fromFilename(media.filename)
    const currentAlt = media.alt ?? ''

    if (newAlt === currentAlt) {
      willSkip++
      continue
    }

    willUpdate++
    console.log(`${APPLY ? '✓' : '○'} ${media.filename}`)
    console.log(`    was: "${currentAlt}"`)
    console.log(`    now: "${newAlt}"`)

    if (APPLY) await patch(id, newAlt)
  }

  console.log(`\n${APPLY ? 'Updated' : 'Would update'} ${willUpdate} images. ${willSkip} already correct.\n`)
  if (!APPLY && willUpdate > 0) {
    console.log('Run with --apply to save changes.\n')
  }
}

main().catch((err) => {
  console.error('\nError:', err.message)
  process.exit(1)
})
