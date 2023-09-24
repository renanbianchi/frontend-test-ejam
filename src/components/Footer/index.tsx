import { Container } from '../Container'
import { TextIcon } from '../TextIcon'
import { LockIcon } from '../../../assets/Icons/LockIcon'

export function Footer() {
  return (
    <Container className="flex xl:text-base text-xs flex-col xl:flex-row items-center justify-around xl:h-[88px] h-[102px] bg-[#252F3D]">
      <div className="flex flex-row gap-4">
        <span className="border-r-[1px] pr-4">Copyright (c) 2023</span>
        <span>Clarifionsupport@clarifion.com</span>
      </div>
      {/* <TextIcon icon={LockIcon} content="Secure 256-bit SSL encryption." /> */}
      <div className="flex flex-row gap-2 items-center">
        <LockIcon stroke="#FFFFFF" />
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </Container>
  )
}
