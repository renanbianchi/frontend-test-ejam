'use client'
import { Container } from '../Container'
import Image from 'next/image'

import { ArrowRight12Filled } from '@fluentui/react-icons'
import preview from '../../../assets/Product/Preview.png'

import { Stars } from '../Stars'
import { StockCard } from '../StockCard'
import { TitleAndPrice } from '../TitleAndPrice'
import { OfferTitle } from '../OfferTitle'
import { OfferDescription } from '../OfferDescription'
import { OfferBenefits } from '../OfferBenefits'
import { DiscountCard } from '../DiscountCard'
import { Button } from '../Button'
import { OfferConditions } from '../OfferConditions'
import { OfferRefuse } from '../OfferRefuse'
import { SatisfactionSeal } from '../SatisfactionSeal'

export function ProductDetails() {
  const productInfo = {
    itemName: 'Clarifion',
    productName: 'Clarifion Air Ionizer',
    quantity: 6,
    discountedPrice: 84,
    fullPrice: 180,
    grade: 5,
    inStock: 12,
    description: "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple."
  }
  const button = {
    acceptMessage: 'YES - CLAIM MY DISCOUNT',
  }

  return (
    <Container className=" xl:max-w-[550px] m-0">
      <OfferTitle
        itemName={productInfo.itemName}
        quantity={productInfo.quantity}
        discountedPrice={productInfo.discountedPrice}
      />
      <div className="flex flex-row xl:gap-6 gap-4 mt-8">
        <div className="w-fit h-fit rounded-[10px] bg-[#2C7EF8]">
          <Image
            style={{ width: '134px' }}
            className="max-w-[134px] max-h-[134px]"
            src={preview}
            alt="Product Preview Image"
          />
        </div>
        <div className="flex flex-col xl:gap-[5px] gap-4">
          <TitleAndPrice
            title={productInfo.productName}
            discountedPrice={productInfo.discountedPrice}
            fullPrice={productInfo.fullPrice}
          />
          <Stars grade={productInfo.grade} />
          <StockCard quantity={productInfo.inStock} />
          <OfferDescription
            className="hidden xl:flex "
            content={productInfo.description}
          />
        </div>
      </div>
      <OfferDescription
        className="xl:hidden inline-flex mt-4 text-center text-xs"
        content={productInfo.description}
      />
      <OfferBenefits />
      <DiscountCard
        quantity={productInfo.quantity}
        productName={productInfo.itemName}
        fullPrice={productInfo.fullPrice}
        discountedPrice={productInfo.discountedPrice}
      />
      <Button
        className="mt-8"
        content={button.acceptMessage}
        icon={ArrowRight12Filled}
      />
      <OfferConditions />
      <OfferRefuse />
      <SatisfactionSeal />
    </Container>
  )
}
