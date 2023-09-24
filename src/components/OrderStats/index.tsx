import react from 'react'
import { Container } from '../Container'

export function OrderStats() {
  return (
  <Container className="sm:px-0 px-5 flex flex-col align-center gap-6 justify-center text-center text-black">
    <h1 className="sm:text-5xl text-[32px] font-[500]">Wait! Your Order in Progress.</h1>
    <span className="sm:text-2xl text-base text-[#4D5254]">Lorem ipsum dolor sit amet, Consectetur Adipisicing</span>
  </Container>
  )
}