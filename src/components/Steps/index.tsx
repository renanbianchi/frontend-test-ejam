import { Container } from '../Container'
import { Step } from '../Step'

export function Steps() {
  const currentSteps = [
    { step: 1, stage: 'Cart Review', isCurrent: false, isDone: true },
    { step: 2, stage: 'Checkout', isCurrent: false, isDone: true },
    { step: 3, stage: 'Special Offer', isCurrent: true, isDone: false },
    { step: 4, stage: 'Confirmation', isCurrent: false, isDone: false },
  ]

  return (
    <Container className="xl:gap-0 xl:justify-around xl:items-center flex flex-row justify-evenly gap-[16.33px] mx-[127px] xl:pt-[3.75rem] pt-6">
      {currentSteps.map((step, index) => {
        return (
          <Step
            key={index}
            step={step.step}
            stage={step.stage}
            isCurrent={step.isCurrent}
            isDone={step.isDone}
          />
        )
      })}
    </Container>
  )
}
