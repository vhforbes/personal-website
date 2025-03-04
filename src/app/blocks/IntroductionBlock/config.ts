import type { Block } from 'payload'

export const IntroductionBlock: Block = {
  slug: 'introduction',
  interfaceName: 'introductionBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'bodyText',
      type: 'richText',
      localized: true,
    },
    {
      name: 'picture',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
}
