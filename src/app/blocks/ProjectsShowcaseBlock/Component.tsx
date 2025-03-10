import { ProjectComponent } from '@/components/Project/Project'
import { Divider } from '@/components/ui/divider'
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
    <section className="relative right-1/2 left-1/2 -mx-[50vw] mt-10 w-screen dark:bg-none">
      <div className="m-auto xl:max-w-[1280px]">
        <h2 className="text-center">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.flatMap((currentProject) =>
            [0, 1, 2].map((i) => (
              <ProjectComponent
                key={`${currentProject.id}-${i}`}
                project={currentProject.project}
              />
            )),
          )}
        </div>
      </div>
    </section>
  )
}
