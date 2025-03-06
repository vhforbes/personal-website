import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { RenderBlocks } from '@/app/blocks/RenderBlocks'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise

  const url = '/' + slug

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({ slug })

  if (!page) {
    return <>No page</>
  }

  const { title, layout } = page

  return (
    <div>
      <h1>{title}</h1>

      <RenderBlocks blocks={layout} />
    </div>
  )
}

// What this cache does?
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
