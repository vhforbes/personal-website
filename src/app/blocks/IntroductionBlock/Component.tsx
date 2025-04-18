import { RichText } from '@payloadcms/richtext-lexical/react'
import { introductionJsxConverter } from './jsxConverters'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { Media } from '@/payload-types'
import { ImageMedia } from '@/components/Media/Image'

type Props = {
  title: string
  bodyText: SerializedEditorState
  picture: Media
}

export const IntroductionBlock: React.FC<Props> = (props) => {
  const { title, bodyText, picture } = props

  return (
    <div className="container m-auto w-full p-4 md:p-8">
      <span className="text-primary text-4xl">{title}</span>

      <div className="flex flex-col items-start md:flex-row">
        <RichText className="md:pr-24" converters={introductionJsxConverter} data={bodyText} />

        <ImageMedia
          className="hover:border-accent m-auto w-72 rounded-3xl border-2 border-gray-200"
          picture={picture}
        />
      </div>
    </div>
  )
}
