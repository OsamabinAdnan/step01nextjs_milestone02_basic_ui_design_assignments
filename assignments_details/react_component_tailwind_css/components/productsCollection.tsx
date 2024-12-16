
// This is the file for products will show in carousel or in single products

import React from 'react'
import { Product } from './Product-Section'
import ProductCard from './ProductCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

export default function ProductsCollection({Products, IsCarousel}:{Products:Product[], IsCarousel:boolean}) {
    if (IsCarousel){
        return <div>
          <Carousel
            opts={
              {
                align:'start',
                loop:true
              }
            }
           className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto"
          >
            <CarouselContent>
              {Products.map((product, index)=>(
                  <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                    <div className='p-4'>
                        <ProductCard 
                        key={index}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        discount="34"
                        isNew
                        originalPrice={product.price}
                        rating={product.rating.rate}
                        review={product.rating.count}
                        />
                    </div>

                  </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className='gap-0 p-0 m-0 sm:block hidden'/>
            <CarouselNext className='sm:block hidden'/> */}
          </Carousel>
        </div>
    } 
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  w-auto max-w-[1440px] mx-auto px-4 gap-2'>
            {Products.map((product, index)=>(
              <ProductCard 
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              discount="34"
              isNew
              originalPrice={product.price}
              rating={product.rating.rate}
              review={product.rating.count}

               />
              
            ))}
    </div>
  )
}

