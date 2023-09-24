import { Container } from '../Container'
import { Stars } from '../Stars'
import { CheckBadge } from '../../../assets/Icons/CheckBadge'
import Image from 'next/image'

import user from '../../../assets/Users/Ken T full.png'

interface reviewProps {
  customer: string
  verified: boolean
  grade: number
  content: string
}

export function ReviewCard({
  customer,
  verified,
  grade,
  content,
}: reviewProps) {
  return (
    <Container className="flex w-[575px] flex-col p-6 gap-[18px]">
      <div className="flex flex-row gap-[13px] items-center">
        <Image
          className="rounded-full object-cover object-bottom w-12 h-12 "
          src={user}
          alt="user picture"
        />
        <div className="flex flex-col">
          <Stars grade={grade} />
          <div className="flex items-center flex-row gap-[7.35px]">
            <span>{customer}</span>
            <CheckBadge />
            <span className="text-xs text-[#5BB59A]">Verified Customer</span>
          </div>
        </div>
      </div>
      <span className="text-[#4D5254]">{content}</span>
    </Container>
  )
}
