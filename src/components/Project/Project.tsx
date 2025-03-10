import { Media, Project } from '@/payload-types'
import { ArrowUpRight } from 'lucide-react'
import { ImageMedia } from '../Media/Image'

export const ProjectComponent = ({ project }: { project: Project }) => {
  //   console.log(project)

  // Why media come as number | Media here?
  const { name, description, url, media, technologies } = project

  return (
    <div className="bg-darkblue-500 p-4 border-2 border-darkblue-300 rounded-xl md:w-[375px] xl:w-[600px]">
      <a className="clean flex group w-fit mb-2" target="_blank" href={url}>
        <h3 className="text-xl font-bold mb-0 transition-all duration-300 text-neutral group-hover:text-accent">
          {name}
        </h3>
        <ArrowUpRight
          strokeWidth={3}
          className="relative w-4 transition-all duration-300 ease-in-out group-hover:text-accent group-hover:w-5"
        />
      </a>
      <div className="flex gap-4">
        <ImageMedia className="w-36 h-fit aspect-3/2" picture={media as Media} />
        <p className="text-sm">{description}</p>
      </div>

      <div>Tech List</div>
    </div>
  )
}
