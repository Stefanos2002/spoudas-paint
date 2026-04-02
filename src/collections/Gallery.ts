// payload/collections/Gallery.ts
import { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  access: {
    read: () => true, // 👈 anyone can read
  },
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Αλμπουμ',
    plural: 'Συλλογές',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Τίτλος',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Ονομα',
      unique: true,
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Εικόνες',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'height',
          type: 'number',
          defaultValue: 500,
        },
      ],
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Δημιουργήθηκε',
      admin: { readOnly: true, hidden: true },
    },
  ],
}
