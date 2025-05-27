import type { Block } from 'payload'

export const ContactBlockConfig: Block = {
  slug: 'contact',
  interfaceName: 'contactBlock',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'contact',
      type: 'relationship',
      relationTo: 'contact',
    },
  ],
}
