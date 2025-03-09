import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { introductionJsxConverter } from './jsxConverters'

type Props = {
  title: string
  bodyText: any
}

export const IntroductionBlock: React.FC<Props> = (props) => {
  const { title, bodyText } = props

  return (
    <div className="p-8">
      <span className="text-3xl text-primary">{title}</span>

      <div>
        <RichText converters={introductionJsxConverter} data={bodyText} />
      </div>
    </div>
  )
}
