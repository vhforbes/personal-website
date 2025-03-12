import { ChooseYourPathBlockConfig } from '@/app/blocks/ChooseYourPathBlock/config'
import { IntroductionBlock } from '@/app/blocks/IntroductionBlock/config'
import { ProfessionalTimelineBlock } from '@/app/blocks/ProfessionalTimeline/config'
import { ProjectsShowcaseBlock } from '@/app/blocks/ProjectsShowcaseBlock/config'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    // TITLE
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    // Tabs: HERO | BLOCKS
    {
      type: 'tabs',
      tabs: [
        // Hero
        {
          label: 'Hero',
          /* 
            This can be abstracted to another file hero.ts with type Field
            I Could also add hero variations or custom components
          */
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
        // Blocks
        {
          /* 
            Custom blocks that I can create
          */
          label: 'Content Blocks',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                IntroductionBlock,
                ProfessionalTimelineBlock,
                ProjectsShowcaseBlock,
                ChooseYourPathBlockConfig,
              ],
              required: true,
            },
          ],
        },
      ],
    },
    // SLUG
    {
      name: 'slug',
      type: 'text',
      index: true,
      label: 'Slug',
    },
  ],
}
