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
    <div className="p-8 m-auto w-full">
      <span className="text-4xl text-primary">{title}</span>

      <div className="flex flex-col md:flex-row justify-between items-start">
        <RichText
          className="md:pr-24 md:w-2/3"
          converters={introductionJsxConverter}
          data={bodyText}
        />
        <div className="relative md:w-1/3">
          {/* Glass effect layer */}
          {/* <div
            className="
              absolute inset-0 
              bg-[rgba(255,255,255,0.1)] 
              rounded-3xl
              shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
              backdrop-blur-[1.5px] 
              z-10
            "
          ></div> */}

          {/* Image layer */}
          <div className="relative z-0">
            <ImageMedia
              className="rounded-3xl border-2 border-gray-800 dark:border-gray-200"
              picture={picture}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
