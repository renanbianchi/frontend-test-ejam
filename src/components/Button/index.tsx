import { Container } from '../Container'
import { IconType } from 'react-icons/lib/esm/iconBase'
import MdIcon from '@mdi/react'

interface ButtonProps {
  className?: string
  content: string
  icon?: IconType | string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function Button({
  content,
  icon: Icon,
  onClick,
  className,
}: ButtonProps) {
  return (
    <Container onClick={onClick} className={className}>
      <div
        className={`select-none active:scale-95 xl:text-base whitespace-normal text-sm cursor-pointer flex flex-row items-center justify-center xl:gap-[19.76px] gap-4 py-4 xl:px-[125.62px] font-bold rounded-[50px] w-full bg-[#59AE43]`}
      >
        <span>{content}</span>

        {Icon ? (
          typeof Icon === 'string' ? (
            <MdIcon size={44} path={Icon} />
          ) : (
            <Icon size={24} />
          )
        ) : null}
      </div>
    </Container>
  )
}
