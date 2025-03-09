import { IntroductionBlock } from '@/payload-types'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedHeadingNode,
  SerializedLinkNode,
  SerializedParagraphNode,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical'

import { type JSXConvertersFunction, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<IntroductionBlock>

interface RichTextLinkProps {
  node: SerializedLinkNode
  className?: string
}

// * When to use general converters os specific ones? Creating a converter for each component don't seem scalable, and probably the styling on paragraphs, headings and etc could be the same and I can pass options to default functions to add like custom colors and etc
export const introductionJsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter,
  heading: ({ node }) => {
    return <CustomHeadingComponent node={node} />
  },
  paragraph: ({ node }) => {
    return <CustomParagraphComponent node={node} />
  },
})

const CustomHeadingComponent: React.FC<{
  node: SerializedHeadingNode
}> = ({ node }) => {
  const { children } = node

  if (node.type === 'heading') {
    if (node.tag === 'h1') {
      return (
        <h1 className="text-4xl font-bold py-8">
          {children.map((child) => {
            if ('text' in child) {
              return (child as SerializedTextNode).text
            }
          })}
        </h1>
      )
    }

    if (node.tag === 'h3') {
      return (
        <h1 className="text-2xl font-bold py-4">
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
      <p>
        {children.map((child, idx) => {
          if (child.type === 'text') {
            return (child as SerializedTextNode).text
          }

          if (child.type === 'linebreak') {
            return <br key={idx} />
          }

          if (child.type === 'link') {
            return (
              <RichTextLink
                className="underline-animation text-primary"
                node={child as SerializedLinkNode}
                key={idx}
              />
            )
          }
        })}
      </p>
    )
  }

  return null
}

export const RichTextLink: React.FC<RichTextLinkProps> = ({ node, className = '' }) => {
  console.log(node)

  const { children, fields } = node
  const { url, newTab, linkType } = fields

  const linkText = children
    .filter((child): child is SerializedTextNode => child.type === 'text')
    .map((child) => child.text)
    .join('')

  // ? Why url may come undefined?? when internal maybe its different?
  if (linkType === 'internal' && url) {
    return (
      <Link href={url} className={className}>
        {linkText}
      </Link>
    )
  }

  return (
    <a href={url} target={newTab ? '_blank' : ''} className={className}>
      {linkText}
    </a>
  )
}
