import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  labels: {
    singular: 'Χρήστη',
    plural: 'Χρήστες',
  },
  auth: true,
  fields: [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Μεταβλήθηκε',
      admin: { readOnly: true, hidden: true },
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Δημιουργήθηκε',
      admin: { readOnly: true, hidden: true },
    },
    {
      name: 'id',
      type: 'number',
      label: 'Κωδικός',
      admin: { readOnly: true, hidden: true },
    },
  ],
}
