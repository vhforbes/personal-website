import { Project } from 'next/dist/build/swc/types'

type Props = {
  projects: Project[]
}

export const ProjectsShowcaseBlock: React.FC<Props> = (props) => {
  const { projects } = props

  console.log(projects)

  return <div>Hey I`m Projects Showcase</div>
}
