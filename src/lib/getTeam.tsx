// lib/getGallery.ts
import type { TeamDoc } from './types'

interface GalleryResponse {
  docs: TeamDoc[]
}

export async function getTeam(): Promise<TeamDoc[]> {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/team?depth=2`, {
    cache: 'no-store',
  })

  const data: GalleryResponse = await res.json()

  if (!data.docs?.length) return []

  // flatmap για να επιστρψει ολα τα galleries
  return data.docs.reverse()
}
