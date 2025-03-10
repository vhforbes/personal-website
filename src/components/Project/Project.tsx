'use client'

import { Media, Project } from '@/payload-types'
import { ArrowUpRight } from 'lucide-react'
import { ImageMedia } from '../Media/Image'
import { openInNewTab } from '@/lib/openNewTab'
import { useCallback } from 'react'

export const ProjectComponent = ({ project }: { project: Project }) => {
  // Why media come as number | Media here?
  const { name, description, url, media, technologies } = project

  const handleClick = useCallback(() => {
    openInNewTab(url)
  }, [url])

  return (
    <div
      onClick={handleClick}
      className="dark:bg-darkblue-500 dark:border-darkblue-300 dark:hover:border-darkblue-100 dark:hover:bg-darkblue-200 grid-cols-1 rounded-xl border-2 border-gray-200 bg-white p-4 transition-colors duration-300 hover:cursor-pointer hover:border-gray-400 hover:bg-gray-50"
    >
      <a className="clean group mb-2 flex w-fit" target="_blank" href={url}>
        <h3 className="dark:text-neutral dark:group-hover:text-accent mb-0 text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-600">
          {name}
        </h3>
        <ArrowUpRight
          strokeWidth={2}
          className="dark:text-neutral dark:group-hover:text-accent relative w-5 text-gray-600 transition-all duration-300 ease-in-out group-hover:w-6 group-hover:text-blue-600"
        />
      </a>
      <div className="flex gap-4">
        <ImageMedia className="aspect-video h-fit w-36 object-cover" picture={media as Media} />
        <p className="dark:text-sm">{description}</p>
      </div>

      <div className="dark:text-inherit">Tech List</div>
    </div>
  )
}
