import { Container } from '../Container'

interface OfferTitleProps {
  itemName: string
  discountedPrice: number
  quantity: number
}

export function OfferTitle({
  discountedPrice,
  quantity,
  itemName,
}: OfferTitleProps) {
  return (
    <Container className="xl:text-[32px] text-[#000000] text-2xl xl:text-left text-center">
      <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price For{' '}
      {quantity} Extra {itemName} For Only{' '}
      <span className="text-[#2C7EF8]">${discountedPrice / quantity} Each</span>{' '}
      ($
      {discountedPrice} Total!)
    </Container>
  )
}
