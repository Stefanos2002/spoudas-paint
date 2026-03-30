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
    staticDir: 'media',
    imageSizes: [
      {
        name: 'masonry',
        width: 800,
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
