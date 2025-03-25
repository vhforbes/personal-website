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
    <div>
      <h1>{blogPost.title}</h1>
      {/* todo: Should prob refactor this  introductionJsxConverter*/}
      <RichText
        className="md:pr-24"
        converters={introductionJsxConverter}
        data={blogPost.content}
      />
    </div>
  )
}
