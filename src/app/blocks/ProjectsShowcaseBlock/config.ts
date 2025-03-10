import type { Block } from 'payload'

export const ProjectsShowcaseBlock: Block = {
  slug: 'projectsShowcase',
  interfaceName: 'ProjectsShowcaseBlock',

  fields: [
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
