import { Container } from '../Container'
import { CheckMarkIcon } from '../../../assets/Icons/CheckMarkIcon'

interface OfferBenefitProps {
  content: string
  bold?: string
  isBoldPositionOnRight?: boolean
}

export function OfferBenefit({
  content,
  bold,
  isBoldPositionOnRight,
}: OfferBenefitProps) {
  return (
    <Container className="flex flex-row xl:text-base text-xs items-center text-black">
      <div className="hidden xl:flex xl:flex-row">
        <CheckMarkIcon
          width="44px"
          height="44px"
          fill="none"
          stroke="#2C7EF8"
        />
      </div>
      <div className="xl:hidden flex flex-row">
        <CheckMarkIcon
          width="24px"
          height="24px"
          fill="none"
          stroke="#2C7EF8"
        />
      </div>
      <span
        className={`text-[#4D5254] xl:text-base text-xs  font-${
          isBoldPositionOnRight ? `normal` : `bold`
        } `}
      >
        {isBoldPositionOnRight ? content : bold}
        {`\xa0`}
      </span>
      <span
        className={`font-${
          isBoldPositionOnRight ? `bold` : `normal`
        } text-[#4D5254`}
      >
        {isBoldPositionOnRight ? bold : content}
      </span>
    </Container>
  )
}
