import { IntroductionBlock } from '@/payload-types'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedHeadingNode,
  SerializedParagraphNode,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical'

import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<IntroductionBlock>

// * When to use general converters os specific ones? Creating a converter for each component don't seem scalable, and probably the styling on paragraphs, headings and etc could be the same and I can pass options to default functions to add like custom colors and etc
export const introductionJsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  heading: ({ node }) => {
    return <CustomHeadingComponent node={node} />
  },
})

const CustomHeadingComponent: React.FC<{
  node: SerializedHeadingNode
}> = ({ node }) => {
  const { children } = node

  if (node.type === 'heading') {
    if (node.tag === 'h1') {
      return (
        <h1 className="text-4xl font-bold pb-4">
          {children.map((child) => {
            if ('text' in child) {
              return (child as SerializedTextNode).text
            }
          })}
        </h1>
      )
    }
  }

  return null
}

const CustomParagraphComponent: React.FC<{
  node: SerializedParagraphNode
}> = ({ node }) => {
  const { children } = node

  if (node.type === 'paragraph') {
    return (
      <p className="">
        {children.map((child) => {
          if ('text' in child) {
            return (child as SerializedTextNode).text
          }
        })}
      </p>
    )
  }

  return null
}
