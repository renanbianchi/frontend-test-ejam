;`use client`
import { Container } from '../Container'

import correct from '../../../assets/Icons/tick-circle.svg'
import { TickCircle } from '../../../assets/Icons/tick-circle'
import Image from 'next/image'

interface StepProps {
  step?: number
  stage?: string
  isCurrent?: boolean
  isDone?: boolean
}

export function Step({ step, stage, isCurrent, isDone }: StepProps) {
  return (
    <Container className="flex flex-col xl:flex-row justify-center items-center xl:gap-5 gap-2 text-black">
      {isDone ? (
        <div>
          <TickCircle width="40px" height="40px" />
        </div>
      ) : (
        <div
          className={`flex items-center text-center justify-center w-9 h-9 rounded-full    ${
            isCurrent
              ? `bg-[#2C7EF8] text-[#FFFFFF] `
              : `text-[#2C7EF8] border-[2px] border-[#2C7EF8]`
          }`}
        >
          {step}
        </div>
      )}
      <div className="flex xl:text-xl text-xs whitespace-nowrap">
        <span
          className={`xl:flex hidden font-${isCurrent ? `bold` : `medium`}`}
        >
          Step {step} : {`\xa0`}
        </span>
        <span className={`font-${isCurrent ? `bold` : `medium`}`}>{stage}</span>
      </div>
    </Container>
  )
}
