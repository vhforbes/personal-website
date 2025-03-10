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
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [url])

  return (
    <div
      onClick={handleClick}
      className="grid-cols-1 rounded-xl border-2 border-gray-400 bg-gray-200 p-4 shadow-sm transition-colors duration-300 hover:cursor-pointer hover:border-gray-400 hover:bg-gray-50"
    >
      <a className="clean group mb-2 flex w-fit" target="_blank" href={url}>
        <h3 className="mb-0 text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-blue-600">
          {name}
        </h3>
        <ArrowUpRight
          strokeWidth={2}
          className="relative w-5 text-gray-600 transition-all duration-300 ease-in-out group-hover:w-6 group-hover:text-blue-600"
        />
      </a>
      <div className="flex gap-4">
        <ImageMedia
          className="aspect-video h-fit w-36 rounded-md object-cover"
          picture={media as Media}
        />
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="mt-2 text-gray-600">Tech List</div>
    </div>
  )
}
