import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

interface ProductCardProps {
    title:string
    price:number
    originalPrice:number
    discount?:string
    rating:number
    review:number
    image:string
    isNew:boolean
}

export default function ProductCard({title,price,originalPrice,discount,rating,review, image, isNew}:ProductCardProps) {
  return (
    <Card className='group relative overflow-hidden '>
        <CardContent>
            <div className='relative aspect-square '>
            <Image src={image} alt={title} fill className='  object-cover'/>
            </div>
            <div className='py-2'>
              <h1 className='font-medium text-[16px] mb-1'>{title}</h1>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[20px] font-bold">${price.toFixed(2)}</span>
                {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>

            <div className='flex items-center justify-between gap-1 mt-1 '>
                {[...Array(5)].map((_,i)=>(
                  <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400': "text-gray-300"}>★</span>
                ))}
                <span className='text-sm text-muted-foreground'>({review})</span>
            </div>
            
 
            
        </CardContent>
    </Card>
  )
}
