import { Container } from '../Container'

interface StockCardProps {
  quantity: number
}

export function StockCard({ quantity }: StockCardProps) {
  return (
    <Container className="flex flex-row items-center gap-4">
      <div className=" flex items-center justify-center rounded-full w-4 h-4 bg-[#E3EEFF]">
        <div className="rounded-full w-[0.533rem] h-[0.533rem] bg-[#2C7EF8]"></div>
      </div>
      <h1 className="text-[#37465A] xl:text-base text-xs font-[300]">
        {quantity} left in Stock
      </h1>
    </Container>
  )
}
