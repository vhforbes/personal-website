import { Post } from '@/payload-types'
import Link from 'next/link'
import { LocalizedDate } from '../ui/localizedDate'

// Could I set in the reques step what is the locale and get it here? So i would render the page with already correct toLocaleString ?
export const PostSnippet = ({ post }: { post: Partial<Post> }) => {
  return (
    <Link className="no-underline" href={`blog/${post.slug}`}>
      <div className="group hover:bg-accent/5 rounded-md border-[1px] border-gray-300 bg-transparent p-4 transition-all duration-300 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="group-hover:text-darkblue-100 dark:group-hover:text-accent mb-0 pl-0 transition-all duration-500 group-hover:pl-4">
            {post.title}
          </h3>

          {/* Todo: Localized date */}
          {post.createdAt && <LocalizedDate date={new Date(post.createdAt)} />}
        </div>
        <p className="mt-2 md:max-w-4/5">{post.contentSnippet}</p>
      </div>
    </Link>
  )
}
