import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Μέλος',
    plural: 'Ομάδα',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Ονομα',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'role',
      label: 'Ρόλος',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Περιγραφή',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Εικόνα',
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
}

export default Team
