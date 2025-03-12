import { Page } from '@/payload-types'
import React from 'react'
import { IntroductionBlock } from './IntroductionBlock/Component'
import { ProfessionalTimelineBlock } from './ProfessionalTimeline/Component'
import { ProjectsShowcaseBlock } from './ProjectsShowcaseBlock/Component'
import { ChooseYourPathBlock } from './ChooseYourPathBlock/Component'

const blockComponents = {
  introduction: IntroductionBlock,
  professionalTimeline: ProfessionalTimelineBlock,
  projectsShowcase: ProjectsShowcaseBlock,
  chooseYourPath: ChooseYourPathBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][] // wtf
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, i) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={i}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block key={i} {...block} disableInnerContainer />
                </div>
              )
            }
          }
        })}
      </>
    )
  }
}
