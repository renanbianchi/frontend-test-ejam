'use client'
import { Container } from '../Container'
import { Checkmark12Regular,  } from '@fluentui/react-icons'

interface StepProps {
  step?: number
  stage?: string
  isCurrent?: boolean
  isDone?: boolean
}

export function Step({ step, stage, isCurrent, isDone }: StepProps) {
  return (
    <Container className="flex flex-col xl:flex-row items-center justify-between xl:gap-5 gap-2 text-black">
      {isDone ? (
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#85BF55]`}
        >
          <Checkmark12Regular
            style={{ width: '30px', height: '30px' }}
            color="white"
          />
        </div>
      ) : (
        <div
          className={`flex items-center text-center justify-center w-10 h-10 rounded-full    ${
            isCurrent
              ? `bg-[#2C7EF8] text-[#FFFFFF] `
              : `text-[#2C7EF8] border-[2px] border-[#2C7EF8]`
          }`}
        >
          {step}
        </div>
      )}
      <div className="flex xl:text-xl text-xs items-center whitespace-nowrap">
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
