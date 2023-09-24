import { Container } from '../Container'
import { ReviewCard } from '../ReviewCard'
import Image from 'next/image'
import mainProduct from '../../../assets/Product/Main.png'

interface contentsProp {
  className: string
}

export function Contents({ className }: contentsProp) {
  return (
    <Container className={className}>
      <div className="flex max-w-[575px] items-center flex-col gap-6 text-black">
        <Image
          className="max-h-[591px] max-w-[575px]"
          src={mainProduct}
          alt="Product Image"
        />
        <ReviewCard
          customer="Ken T."
          grade={5}
          verified={true}
          content="“As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”"
        />
      </div>
    </Container>
  )
}
