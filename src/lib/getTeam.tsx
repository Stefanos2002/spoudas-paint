// // lib/getTeam.ts
// import { unstable_cache } from 'next/cache'
// import type { TeamDoc } from './types'

// interface TeamResponse {
//   docs: TeamDoc[]
// }

// export const getTeam = unstable_cache(
//   async (): Promise<TeamDoc[]> => {
//     const res = await fetch(`${process.env.PAYLOAD_URL}/api/team?depth=1`)
//     const data: TeamResponse = await res.json()

//     if (!data.docs?.length) return []

//     return data.docs.reverse()
//   },
//   ['team'],
//   { revalidate: 60, tags: ['team'] },
// )

import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { TeamDoc } from './types'

const fetchTeam = unstable_cache(
  async (): Promise<TeamDoc[]> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'team', depth: 1 })
    return docs.reverse() as unknown as TeamDoc[]
  },
  ['team'],
  { revalidate: 60, tags: ['team'] },
)

export async function getTeam(): Promise<TeamDoc[]> {
  try {
    return await fetchTeam()
  } catch (err) {
    console.error('[getTeam] failed:', err)
    return []
  }
}
