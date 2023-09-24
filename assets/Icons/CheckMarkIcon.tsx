import React from 'react'

interface CheckMarkIconTypes {
  fill?: string
  stroke?: string
  width?: string
  height?: string
}

export const CheckMarkIcon = ({ fill, stroke, width, height }: CheckMarkIconTypes) => (
  <svg
    width={width ? width : '24'}
    height={height ? height : '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      fill={fill ? fill : '#85BF55'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.75 12L10.58 14.83L16.25 9.17004"
      stroke={stroke ? stroke : '#FFFFFF'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)