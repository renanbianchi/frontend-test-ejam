import { Container } from '../Container'
import { ReviewCard } from '../ReviewCard'
import Image from 'next/image'
import mainProduct from '../../../assets/Product/Main.png'

interface contentsProp {
  className: string
}

export function Contents({ className }: contentsProp) {
  const contentItems = {
    customer: 'Ken T.',
    image: mainProduct,
    grade: 5,
    isVerified: true,
    content: `“As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”`,
  }

  return (
    <Container className={className}>
      <div className="flex max-w-[575px] items-center flex-col gap-6 text-black">
        <Image
          className="max-h-[591px] max-w-[575px]"
          src={contentItems.image}
          alt="Product Image"
        />
        <ReviewCard
          customer={contentItems.customer}
          grade={contentItems.grade}
          verified={contentItems.isVerified}
          content={contentItems.content}
        />
      </div>
    </Container>
  )
}
