import { introductionJsxConverter } from '@/app/blocks/IntroductionBlock/jsxConverters'
import { Experience } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Technology } from '../ui/technology'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export const ExperienceComponent = ({ experience }: { experience: Experience }) => {
  const { name, period, description, technologies } = experience

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={name}>
        <AccordionTrigger className="group cursor-pointer px-4">
          <div className="flex w-full items-center justify-between">
            <h3 className="mb-0 group-hover:underline">
              <span className="text-xl md:text-2xl">{period}</span>: {name}
            </h3>

            <div className="flex flex-wrap gap-1">
              {technologies?.map((tech) => (
                <Technology key={tech.id} name={tech['technology-name'] as string} />
              ))}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <RichText className="md:pr-24" converters={introductionJsxConverter} data={description} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
