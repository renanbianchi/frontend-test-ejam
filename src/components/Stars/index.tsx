import { Container } from '../Container'
import { StarOutlined, StarFilled } from '@ant-design/icons'

interface StarsProps {
  grade: number
}

export function Stars({ grade }: StarsProps) {
  if (grade > 5) {
    return null
  }
  let stars = []

  for (let i = 0; i < 5; i++) {
    if (i < grade) {
      stars.push(<StarFilled key={i} style={{ color: '#FFC000' }} />)
    } else {
      stars.push(<StarOutlined key={i} style={{ color: '#FFC000' }} />)
    }
  }

  return <Container className="flex flex-row items-center justify-left w-fit gap-[2px]">{stars}</Container>
}
