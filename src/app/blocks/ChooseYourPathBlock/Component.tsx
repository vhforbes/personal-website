import { LightsaberSvg } from '@/components/lightsaberSvg'
import { ChooseYourPathBlock as ChooseYourPathTypes } from '@/payload-types'

export const ChooseYourPathBlock: React.FC<ChooseYourPathTypes> = (props) => {
  console.log(props)

  const { title, paths } = props

  return (
    <section className="mt-4 md:mt-18">
      <h3 className="text-center">{title}</h3>

      <div className="mt-8 flex flex-col justify-around md:flex-row">
        {paths.map((path) => (
          <div key={path.id} className="text-center">
            <h3>{path.name}</h3>
            <LightsaberSvg />
          </div>
        ))}
      </div>
    </section>
  )
}
