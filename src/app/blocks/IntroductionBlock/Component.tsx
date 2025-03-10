import { RichText } from '@payloadcms/richtext-lexical/react'
import { introductionJsxConverter } from './jsxConverters'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { Media } from '@/payload-types'

import Image from 'next/image'
import { ImageMedia } from '@/components/Media/Image'
import { Divider } from '@/components/ui/divider'

type Props = {
  title: string
  bodyText: SerializedEditorState
  picture: Media
}

export const IntroductionBlock: React.FC<Props> = (props) => {
  const { title, bodyText, picture } = props

  return (
    <div className="m-auto w-full">
      <span className="text-4xl text-primary">{title}</span>

      <div className="flex flex-col md:flex-row items-start">
        <RichText className="md:pr-24" converters={introductionJsxConverter} data={bodyText} />

        <ImageMedia
          className="rounded-3xl w-72 border-2 border-gray-800 dark:border-gray-200"
          picture={picture}
        />
      </div>
    </div>
  )
}
