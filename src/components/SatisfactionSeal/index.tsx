import { Container } from '../Container'
import Image from 'next/image'
import seal from '../../../assets/Logos/Satisfacion Seal.png'

export function SatisfactionSeal() {
  return (
    <Container className="flex flex-row items-center gap-4 mt-[37px]">
      <Image src={seal} alt="satisfaction seal" />
      <span className="text-[#4D5254]  xl:text-base text-xs">
        If you are not completely thrilled with your Clarifion - We have a{' '}
        <b>30 day satisfaction guarantee.</b> Please refer to our return policy
        at the bottom of the page for more details. Happy Shopping!
      </span>
    </Container>
  )
}
