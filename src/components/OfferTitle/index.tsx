import { Container } from '../Container'

interface OfferTitleProps {
  productName: string
  discountedPrice: number
  quantity: number
}

export function OfferTitle({
  discountedPrice,
  quantity,
  productName,
}: OfferTitleProps) {
  return (
    <Container className="xl:text-[32px] text-[#000000] text-2xl xl:text-left text-center">
      <span className="text-[#2C7EF8]">ONE TIME ONLY</span> Special Price For{' '}
      {quantity} Extra {productName} For Only{' '}
      <span className="text-[#2C7EF8]">${discountedPrice / quantity} Each</span>{' '}
      ($
      {discountedPrice} Total!)
    </Container>
  )
}
