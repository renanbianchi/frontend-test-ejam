import React from 'react'

import { Container } from '../Container'
import { IconType } from 'react-icons/lib/esm/iconBase'
import MdIcon from '@mdi/react'

interface TextIconProps {
  icon: IconType | string
  content: string
  isDisabled?: boolean
}

export function TextIcon({ icon: Icon, content, isDisabled }: TextIconProps) {
  return (
    <Container
      className={` ${
        isDisabled ? `hidden` : ``
      } sm:flex font-[400] text-xs flex flex-row gap-2 items-center`}
    >
      {Icon ? (
        typeof Icon === 'string' ? (
          <MdIcon path={Icon} size="1.375rem" />
        ) : (
          <Icon size="1.375rem" />
        )
      ) : null}
      <h1>{content}</h1>
    </Container>
  )
}
