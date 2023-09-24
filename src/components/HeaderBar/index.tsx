'use client'
import { useState } from 'react'
import { Container } from '../Container'
import { TextIcon } from '../TextIcon'
import { PiTruckLight } from 'react-icons/pi'
import {
  CheckmarkStarburst20Regular,
  ArrowSyncCheckmark20Regular,
} from '@fluentui/react-icons'
import { mdiCardsHeartOutline } from '@mdi/js'
import { LeftArrow } from '../../../assets/Icons/Left Arrow'
import { RightArrow } from '../../../assets/Icons/Right Arrow'

export function HeaderBar() {
  const [selectedItem, setSelectedItem] = useState(0)

  const handleNextClick = () => {
    setSelectedItem((prevItem) => prevItem + 1)
  }

  const handlePrevClick = () => {
    setSelectedItem((prevItem) => prevItem - 1)
  }

  return (
    <Container className="flex h-[2.625rem] sm:h-[3.125rem] sm:justify-around flex-row px-5 bg-[#252F3D] justify-between text-white">
      <button
        className="sm:hidden"
        type="button"
        onClick={handlePrevClick}
        disabled={selectedItem === 0}
      >
        <LeftArrow />
      </button>
      <TextIcon
        isDisabled={selectedItem !== 0}
        icon={CheckmarkStarburst20Regular}
        content="30-DAY SATISFACTION GUARANTEE"
      />
      <TextIcon
        isDisabled={selectedItem !== 1}
        icon={PiTruckLight}
        content="FREE DELIVERY ON ORDERS OVER $40.00"
      />
      <TextIcon
        isDisabled={selectedItem !== 2}
        icon={mdiCardsHeartOutline}
        content="50.000+ HAPPY CUSTOMERS"
      />
      <TextIcon
        isDisabled={selectedItem !== 3}
        icon={ArrowSyncCheckmark20Regular}
        content="FREE DELIVERY ON ORDERS OVER $40.00"
      />
      <button
        className="sm:hidden"
        type="button"
        onClick={handleNextClick}
        disabled={selectedItem === 3}
      >
        <RightArrow />
      </button>
    </Container>
  )
}
