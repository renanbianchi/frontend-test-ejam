import react from 'react'
import { Container } from '../Container'

export function OrderStats() {
  const content = {
    title: 'Wait! Your Order in Progress.',
    subtitle: 'Lorem ipsum dolor sit amet, Consectetur Adipisicing',
  }

  return (
    <Container className="xl:px-0 px-5 flex flex-col align-center gap-6 justify-center text-center text-black">
      <h1 className="xl:text-5xl text-[32px] font-[500]">{content.title}</h1>
      <span className="xl:text-2xl text-base text-[#4D5254]">
        {content.subtitle}
      </span>
    </Container>
  )
}
