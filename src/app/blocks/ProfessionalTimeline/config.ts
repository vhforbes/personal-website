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
      localized: true,
      fields: [
        {
          name: 'Year',
          type: 'text',
        },
        {
          name: 'Title',
          type: 'text',
        },
        {
          name: 'Text',
          type: 'richText',
        },
      ],
    },
  ],
}
