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
  const { projects, title } = props

  return (
    <section className="from-darkblue-100/30 mt-4 rounded-t-2xl bg-gradient-to-bl to-white p-4 md:mt-8 md:rounded-t-4xl md:p-8 dark:to-black/80">
      <div className="container m-auto">
        <h2 className="text-left text-2xl font-bold uppercase md:text-3xl">{title}</h2>

        <div className="m-auto grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectComponent key={`${project.id}`} project={project.project} />
          ))}
        </div>
      </div>
    </section>
  )
}
