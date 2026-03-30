import { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',

  labels: {
    singular: 'Member',
    plural: 'Team',
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
      label: 'Name',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'role',
      label: 'Role',
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
      defaultValue: 500,
    },
  ],
}

export default Team
