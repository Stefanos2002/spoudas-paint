// lib/getGallery.ts
export async function getGallery() {
  const res = await fetch(
    `${process.env.PAYLOAD_URL}/api/gallery?limit=1&depth=1`, // ✅ populate related media
    {
      cache: 'no-store',
    },
  )

  const data = await res.json()

  if (!data.docs || data.docs.length === 0) return []

  return data.docs[0].images || []
}
