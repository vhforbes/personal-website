import { ProjectComponent } from '@/components/Project/Project'
import { Project } from '@/payload-types'

type Props = {
  title: string
  projects: {
    id: string
    project: Project
  }[]
}

export const ProjectsShowcaseBlock: React.FC<Props> = (props) => {
  console.log(props)

  const { projects, title } = props

  return (
    <section className="mt-10">
      <h2>{title}</h2>
      <div className="flex flex-wrap gap-4 justify-between w-full">
        {projects.flatMap((currentProject) =>
          [0, 1, 2].map((i) => (
            <ProjectComponent key={`${currentProject.id}-${i}`} project={currentProject.project} />
          )),
        )}
      </div>
    </section>
  )
}
