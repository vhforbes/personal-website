import { getPayload, RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import { RenderBlocks } from '@/app/blocks/RenderBlocks'

type SearchParams = {
  locale?: Locales
  [key: string]: string | undefined
}

type Args = {
  searchParams: Promise<SearchParams>
  params: Promise<{
    slug?: string
  }>
}

type Locales = 'en' | 'pt'

const validLocales = ['en', 'pt'] as const

// What is a scalable way of typing in seach params ?
export default async function Page({ params: paramsPromise, searchParams }: Args) {
  const { slug = 'home' } = await paramsPromise
  const { locale = 'en' } = await searchParams

  const getLocale = (locale: Locales): Locales => {
    if (!locale) {
      console.log('not finding locale')
      return 'en'
    }

    const isValidLocale = (locale: string): locale is Locales => {
      return validLocales.includes(locale as Locales)
    }

    return isValidLocale(locale) ? locale : 'en'
  }

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
    locale: getLocale(locale),
  })

  if (!page) {
    return <>No page</>
  }

  const { title, layout } = page

  return (
    <div className="m-auto p-4 md:p-8 xl:max-w-[1280px]">
      <RenderBlocks blocks={layout} />
    </div>
  )
}

// What this cache does?
const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: 'en' | 'pt' }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    locale,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
