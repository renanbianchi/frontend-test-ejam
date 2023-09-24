import { Container } from '../Container'

interface OfferDescription {
  content: string
  className?: string
}

export function OfferDescription({ content, className }: OfferDescription) {
  return (
    <Container className={className}>
      <span className="text-[#4D5254] xl:text-base text-xs w-[398px] ">{content}</span>
    </Container>
  )
}
