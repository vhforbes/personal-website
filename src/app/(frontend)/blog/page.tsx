import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

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
    },
  })

  console.log(posts.docs)

  return (
    <div>
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
          {posts.docs.map((post) => (
            <div key={post.id}>
              {post.title}
              <h3>{post.title}</h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
