import { Container } from '../Container'
import { ProductDetails } from '../ProductDetails'
import { Contents } from '../Contents'

export function OfferDetails() {
  return (
    <Container className="flex xl:flex-row flex-col justify-center xl:items-center">
      <div className="flex xl:w-fit xl:flex-row flex-col-reverse justify-center gap-10 xl:p-10 p-5 xl:my-10  bg-[#FAFAFA]">
        <Contents className="hidden xl:flex xl:flex-col" />
        <ProductDetails />
      </div>
    </Container>
  )
}
