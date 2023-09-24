import React from 'react'
import { Container } from '../Container'
import Image from 'next/image'
import Clarifion_logo from '../../../assets/Logos/Clarifion Logo.png'
import McAfee from '../../../assets/Logos/McAfee_Secure.svg'
import Norton from '../../../assets/Logos/norton-antivirus.svg'

export function Header() {
  return (
    <Container className="flex justify-between p-5 xl:justify-between xl:py-[1.875rem] xl:px-[7.938rem] text-black">
      <Image
        className="w-[106.67px] h-[20px] xl:w-[192.36px] xl:h-[36px] "
        src={Clarifion_logo}
        alt="Clarifion logo"
      />
      <div className="flex justify-center items-center gap-8">
        <Image
          className="w-[44px] h-[16px] xl:w-auto xl:h-auto"
          src={McAfee}
          alt="McAfee logo"
        />
        <Image
          className="w-[44px] h-[20px] xl:w-auto xl:h-auto"
          src={Norton}
          alt="Norton logo"
        />
      </div>
    </Container>
  )
}
