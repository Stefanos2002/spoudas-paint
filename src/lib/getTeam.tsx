// lib/getTeam.ts
import { unstable_cache } from 'next/cache'
import type { TeamDoc } from './types'

interface TeamResponse {
  docs: TeamDoc[]
}

export const getTeam = unstable_cache(
  async (): Promise<TeamDoc[]> => {
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/team?depth=1`)
    const data: TeamResponse = await res.json()

    if (!data.docs?.length) return []

    return data.docs.reverse()
  },
  ['team'],
  { revalidate: 60, tags: ['team'] },
)
