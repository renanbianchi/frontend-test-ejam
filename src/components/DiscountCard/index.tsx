import { Container } from '../Container'

interface DiscountCardProps {
  productName: string
  discountedPrice: number
  quantity: number
  fullPrice: number
}
export function DiscountCard({
  productName,
  discountedPrice,
  quantity,
  fullPrice,
}: DiscountCardProps) {
  const discountPercentage = ((fullPrice - discountedPrice) / fullPrice) * 100
  return (
    <Container className="flex flex-row rounded-[10px] items-center xl:text-base text-sm mt-[32px] py-3 px-4 gap-4 bg-[#EDF3FD]">
      <div className="flex text-xs items-center justify-center xl:w-[32px] xl:h-[32px] p-[10px] w-[24px] h-[24px] rounded-full bg-[#2C7EF8] font-[600]">
        %
      </div>
      <span className="text-[#000000]">
        Save{' '}
        <span className="text-[#2C7EF8]">{discountPercentage.toFixed(0)}%</span>{' '}
        and get{' '}
        <span className="text-[#2C7EF8]">
          {quantity} extra {productName}
        </span>{' '}
        for only
        <span className="text-[#2C7EF8]">
          {`\xa0`}${discountedPrice / quantity} Each
        </span>
        .
      </span>
    </Container>
  )
}
