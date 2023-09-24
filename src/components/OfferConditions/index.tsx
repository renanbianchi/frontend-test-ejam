import { Container } from '../Container'

import { LockIcon } from '../../../assets/Icons/LockIcon'
import { Cards } from '../Cards'
import { Amex } from '../../../assets/Product/Cardholders/Amex'
import { Visa } from '../../../assets/Product/Cardholders/Visa'
import { ShopPay } from '../../../assets/Product/Cardholders/ShopPay'
import { PayPal } from '../../../assets/Product/Cardholders/PayPal'
import { MasterCard } from '../../../assets/Product/Cardholders/MasterCard'
import { GPay } from '../../../assets/Product/Cardholders/GPay'
import { ApplePay } from '../../../assets/Product/Cardholders/ApplePay'

export function OfferConditions() {
  const cards = [
    { cardName: Visa },
    { cardName: ShopPay },
    { cardName: PayPal },
    { cardName: MasterCard },
    { cardName: GPay },
    { cardName: ApplePay },
    { cardName: Amex },
  ]

  const conditions = {
    condition1: 'Free Shipping',
    condition2: 'Secure 256-Bit SSL Encryption.',
  }

  return (
    <Container>
      <div className="flex flex-col items-center xl:gap-0 gap-3 xl:flex-row border-solid border-[1px] rounded-[4px] border-[#CFCFCF] mt-[12px]">
        <div className="xl:gap-4 gap-3 flex whitespace-nowrap flex-row pt-2 xl:py-2 px-[16px] text-[#4D5254]">
          <span className="text-xs">{conditions.condition1}</span>
          <div className="border-l-[1px]" />
          <div className="flex flex-row xl:border-r-2 gap-[10px] items-center justify-center ">
            <LockIcon />
            <span className="text-xs">{conditions.condition2}</span>
          </div>
          <div className="hidden xl:flex xl:flex-row">
            <Cards cards={cards} />
          </div>
        </div>
        <div className="xl:hidden w-[92%] border-t-[1px] border-[#CFCFCF]"></div>
        <div className="xl:hidden pb-2">
          <Cards cards={cards} />
        </div>
      </div>
    </Container>
  )
}
