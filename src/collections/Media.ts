// payload/collections/Media.ts
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  upload: {
    disableLocalStorage: true,
    imageSizes: [
      {
        // Used by the gallery masonry grid — 1200px covers full-width on mobile + 2-col on desktop
        name: 'masonry',
        width: 1200,
        height: undefined,
        position: 'centre',
      },
      {
        // Used by the services section — 50vw on desktop up to ~900px on large screens
        name: 'card',
        width: 900,
        height: undefined,
        position: 'centre',
      },
      {
        // Used by team member avatars — 260px display, 780px covers @3x retina
        // No height crop — CSS handles the circle via rounded-full + object-cover
        name: 'avatar',
        width: 780,
        height: undefined,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
