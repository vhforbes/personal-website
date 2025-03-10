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
    <section className="mt-4 md:mt-8">
      <h2 className="text-center">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.flatMap((currentProject) =>
          [0, 1, 2].map((i) => (
            <ProjectComponent key={`${currentProject.id}-${i}`} project={currentProject.project} />
          )),
        )}
      </div>
    </section>
  )
}
