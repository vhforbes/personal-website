import type { Block } from 'payload'

export const ChooseYourPathBlockConfig: Block = {
  slug: 'chooseYourPath',
  interfaceName: 'ChooseYourPathBlock',

  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'paths',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'saberColor',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
