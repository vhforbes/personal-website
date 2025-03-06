import type { Block } from 'payload'

export const ProfessionalTimelineBlock: Block = {
  slug: 'professionalTimeline',
  interfaceName: 'ProfessionalTimelineBlock',

  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'timeline-entry',
      type: 'array',
      fields: [
        {
          name: 'Year',
          type: 'text',
          localized: true,
        },
        {
          name: 'Title',
          type: 'text',
          localized: true,
        },
        {
          name: 'Text',
          type: 'richText',
          localized: true,
        },
      ],
    },
  ],
}
