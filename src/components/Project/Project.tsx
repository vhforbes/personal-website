'use client'

import { Media, Project } from '@/payload-types'
import { ArrowUpRight } from 'lucide-react'
import { ImageMedia } from '../Media/Image'
import { openInNewTab } from '@/lib/openNewTab'
import { useCallback } from 'react'
import { Technology } from '../ui/technology'

export const ProjectComponent = ({ project }: { project: Project }) => {
  // Why media come as number | Media here?
  const { name, description, url, media, technologies } = project

  const handleClick = useCallback(() => {
    openInNewTab(url)
  }, [url])

  return (
    <div
      onClick={handleClick}
      className="dark:bg-darkblue-500 dark:border-darkblue-300 dark:hover:border-darkblue-100 dark:hover:bg-darkblue-200 hover:border-gray-00 flex grid-cols-1 flex-col rounded-xl border-2 border-gray-400 bg-white p-4 transition-colors duration-300 hover:cursor-pointer hover:bg-gray-50"
    >
      <div className="flex-grow">
        <a className="clean group mb-2 flex w-fit" target="_blank" href={url}>
          <h3 className="dark:text-neutral dark:group-hover:text-accent mb-0 text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-600">
            {name}
          </h3>
          <ArrowUpRight
            strokeWidth={2}
            className="dark:text-neutral dark:group-hover:text-accent relative w-5 text-gray-600 transition-all duration-300 ease-in-out group-hover:w-6 group-hover:text-blue-600"
          />
        </a>
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <ImageMedia
            className="aspect-video h-fit w-full object-cover md:w-36"
            picture={media as Media}
          />
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1 dark:text-inherit">
        {technologies?.map((tech) => (
          <li key={tech.id}>
            {tech['technology-name'] && <Technology key={tech.id} name={tech['technology-name']} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
