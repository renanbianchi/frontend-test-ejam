import { Container } from '../Container'

interface TitleAndPriceProps {
  title: string
  fullPrice: number
  discountedPrice?: number
}

export function TitleAndPrice({
  title,
  fullPrice,
  discountedPrice,
}: TitleAndPriceProps) {
  return (
    <Container className="flex flex-row justify-between text-black">
      <h1 className="xl:text-xl xl:whitespace-normal text-sm whitespace-nowrap">
        {title}
      </h1>
      <div className="flex xl:gap-[0.625rem] gap-2 flex-row items-center">
        {discountedPrice && (
          <span className="xl:text-base text-[10px] line-through text-[#969696]">
            ${fullPrice}
          </span>
        )}
        <span className="font-[600] text-sm xl:text-[22px] text-[#2C7EF8]">
          ${discountedPrice ? discountedPrice : fullPrice}
        </span>
      </div>
    </Container>
  )
}
