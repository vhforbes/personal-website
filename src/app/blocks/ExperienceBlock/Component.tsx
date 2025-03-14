import { ExperienceComponent } from '@/components/Experience/Experience'
import { cn } from '@/lib/utils'
import { ExperienceBlock as ExperienceBlockTypes } from '@/payload-types'
export const ExperienceBlock: React.FC<ExperienceBlockTypes> = (props) => {
  const { title, experiences } = props

  console.log(props)

  return (
    <section className="to-darkblue-100/30 mb-8 rounded-b-2xl bg-gradient-to-br from-white p-4 md:mb-12 md:rounded-b-4xl md:p-8 dark:from-black/80">
      <div className="container m-auto border-t-2 border-gray-500">
        <h3 className="mt-8 text-right text-2xl font-bold uppercase md:text-3xl">{title}</h3>

        {experiences?.map((exp, idx) => {
          const { experience } = exp

          if (typeof experience === 'number' || !experience) {
            return null
          }

          const lastItem = idx === experiences.length - 1

          return (
            <div className={cn({ 'border-b-2 border-gray-500': !lastItem })} key={exp.id}>
              <ExperienceComponent experience={experience} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
