import type { Block } from 'payload'

export const ProjectsShowcaseBlock: Block = {
  slug: 'projectsShowcase',
  interfaceName: 'ProjectsShowcaseBlock',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'project',
          type: 'relationship',
          relationTo: 'project',
          required: true,
        },
      ],
    },
  ],
}
