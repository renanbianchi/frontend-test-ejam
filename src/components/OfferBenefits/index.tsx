import { Container } from '../Container'
import { OfferBenefit } from '../OfferBenefit'

export function OfferBenefits() {
  const benefits = [
    {
      content: 'Negative Ion Technology may',
      bold: 'help with allergens',
      isBoldPositionOnRight: true,
    },
    {
      content: 'Designed for',
      bold: 'air rejuvenation',
      isBoldPositionOnRight: true,
    },
    {
      content: 'in all types of places.',
      bold: 'Perfect for every room',
      isBoldPositionOnRight: false,
    },
  ]
  return (
    <Container className="flex flex-col xl:mt-8 mt-[27.5px]">
      {benefits.map((benefit, index) => {
        return (
          <OfferBenefit
            key={index}
            content={benefit.content}
            bold={benefit.bold}
            isBoldPositionOnRight={benefit.isBoldPositionOnRight}
          />
        )
      })}
    </Container>
  )
}
