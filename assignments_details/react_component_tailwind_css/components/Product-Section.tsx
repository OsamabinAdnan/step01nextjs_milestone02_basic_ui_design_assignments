import React from 'react'
import SectionHeader from './SectionHeader'
import LiveDateTime from './Timer'
import ProductsCollection from './productsCollection'


interface ProductSectionProps {
Heading:string,
Subheading:string
showTimer:boolean
action:React.ReactNode //In action property, due to it type is ReactNode we can add any JSX property in it to render it.
products:Product[]
isCarousel:boolean
ctaText?: string
}

export interface Product {
title:string;
image:string;
price:number;
rating: {
  rate:number;
  count:number;
  }
}

export default function ProductSection({Heading, Subheading, showTimer,action, products, isCarousel}:ProductSectionProps) {
  return (
    <div className='flex flex-col justify-center'>
        {/* Header part */}
        <div className='flex items-end justify-between'>
            <div className='space-y-10 space-x-10 flex items-end'>
                <SectionHeader heading={Heading} subHeading={Subheading}/>
                {showTimer && <LiveDateTime/>}
            </div>
            {action}
        </div>

        {/* Products part */}
        <div className='mt-10'>
          <ProductsCollection Products={products} IsCarousel={isCarousel}/>    
        </div>
    </div>
  )
}
