import type { Block } from 'payload'

export const HighlightedPostsBlockConfig: Block = {
  slug: 'highlightedPosts',
  interfaceName: 'HighlightedPostsBlock',

  fields: [
    {
      name: 'highlightedPosts',
      type: 'relationship',
      required: true,
      relationTo: 'posts',
      hasMany: true,
    },
  ],
}
