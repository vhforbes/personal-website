import type { Block } from 'payload'

export const ExperienceBlockConfig: Block = {
  slug: 'experience',
  interfaceName: 'experienceBlock',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'experiences',
      type: 'array',
      fields: [
        {
          name: 'experience',
          type: 'relationship',
          relationTo: 'experience',
        },
      ],
    },
  ],
}
