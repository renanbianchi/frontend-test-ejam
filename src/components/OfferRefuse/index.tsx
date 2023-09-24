import { Container } from '../Container'

interface offerRefuseProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function OfferRefuse({ onClick }: offerRefuseProps) {
  return (
    <Container
      onClick={onClick}
      className="underline active:scale-95 select-none cursor-pointer text-[#F82C2C] mt-5 text-center text-lg "
    >
      <h1>NO THANKS, I DON&#39;T WANT THIS</h1>
    </Container>
  )
}
