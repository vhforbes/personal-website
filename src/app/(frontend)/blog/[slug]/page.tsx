import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { introductionJsxConverter } from '@/app/blocks/IntroductionBlock/jsxConverters'

type Args = {
  // searchParams: Promise<SearchParams>
  params: Promise<{
    slug?: string
  }>
}

export default async function BlogPost({ params: paramsPromise }: Args) {
  // todo: Get blog post by slug
  const { slug } = await paramsPromise

  const payload = await getPayload({ config: configPromise })

  console.log(slug)

  const result = await payload.find({
    collection: 'posts',
    depth: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const blogPost = result.docs[0]

  console.log(blogPost)

  return (
    <div className="m-auto flex max-w-3xl flex-col justify-center p-4 md:p-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="mb-2">{blogPost.title}</h1>
        <span>Published at: {new Date(blogPost.createdAt).toLocaleString('pt-BR')}</span>

        <span>
          {blogPost.categories?.map((cat) => {
            if (typeof cat !== 'number') {
              return <span key={cat.id}>{cat.title}</span>
            }
          })}
        </span>
      </div>
      {/* todo: Should prob refactor this  introductionJsxConverter*/}
      <RichText
        // converters={introductionJsxConverter}
        data={blogPost.content}
      />
    </div>
  )
}
