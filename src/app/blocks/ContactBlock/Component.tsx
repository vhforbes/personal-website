import { Contact, ContactBlock as ContactBlockTypes } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { introductionJsxConverter } from '../IntroductionBlock/jsxConverters'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import Link from 'next/link'

type Props = {
  title: string
  bodyText: SerializedEditorState
  contact: Contact
}

export const ContactBlock: React.FC<Props> = (props: Props) => {
  console.log(props)

  const { title, contact } = props

  return (
    <section className="w-full p-8">
      <h1>{title}</h1>

      <div className="flex flex-col gap-6">
        <RichText converters={introductionJsxConverter} data={contact.description} />

        <p>Email: {contact.email}</p>

        {contact.socials?.map((social) => (
          <div key={social.id}>
            <Link href={social.url}>{social.name}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
