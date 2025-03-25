import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PostSnippet } from '@/components/Blog/PostSnippet'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      createdAt: true,
      contentSnippet: true,
    },
  })

  return (
    <div className="container m-auto mt-4 md:mt-8">
      <h2 className="text-center">Blog Posts</h2>
      <div className="prose dark:prose-invert max-w-none">
        {posts.docs.map((post) => (
          <PostSnippet key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
