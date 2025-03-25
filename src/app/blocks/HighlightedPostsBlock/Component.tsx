import { Post } from '@/payload-types'

type Props = {
  title: string
  posts: {
    id: string
    post: Post
  }[]
}

export const HighlightedPostsBlock: React.FC<Props> = (props) => {
  const { posts } = props

  return <section>Highlighted Posts</section>
}
