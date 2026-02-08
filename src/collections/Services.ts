// THIS IS THE STRUCTURE YOU WANT
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services', // Keep the slug the same
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 1000,
    },
    {
      name: 'layoutOrder',
      label: 'Layout Order',
      type: 'number',
    },
  ],
}

export default Services
