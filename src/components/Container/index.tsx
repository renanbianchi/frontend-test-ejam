import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function Container({ className, children, onClick }: ContainerProps) {
  return <div onClick={onClick} className={className}>{children}</div>
}
