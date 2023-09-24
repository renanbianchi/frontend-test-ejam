import { Container } from '../Container'

interface cardsProps {
  cards: cardProp[]
}

interface cardProp {
  cardName: () => JSX.Element
}

export function Cards({ cards }: cardsProps) {
  return (
    <Container className=" flex flex-row items-center justify-center gap-[2px] px-[16px]">
      {cards.map((card, index) => {
        const Icon = card.cardName
        return <Icon key={index} />
      })}
    </Container>
  )
}
