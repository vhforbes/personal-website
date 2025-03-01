import { MediaBlock } from '@/app/blocks/MediaBlock/config'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
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
        {
          /* 
            Custom blocks that I can create
          */
          label: 'Content Blocks',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [MediaBlock],
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
