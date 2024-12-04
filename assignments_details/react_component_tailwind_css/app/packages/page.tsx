import { PACKAGES } from '@/constant'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { RiSearchLine, RiTimeLine } from "react-icons/ri";

export default function Packages() {
  return (
    <>
      <section className='max-container padding-container pt-24 bg-slate-10'>
        <h3 className='bold-40 text-center'>Our Packages</h3>
        <p className='text-center max-w-lg m-auto text-gray-30 py-6'>Our packages offer the perfect blend of adventure and relaxation. Let us take care of the details while you enjoy the experience.</p>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-12'>
          {PACKAGES.map((card) =>(
            <PackageItem
              key={card.title}
              title={card.title}
              des={card.des}
              price={card.price}
              URL={card.URL}
              duration={card.duration}
            />
          ))}
        </div>

      </section>
    </>
  )
}
type PackageItemProps = {
  title:string
  price:string
  URL:string
  des:string
  duration:string
}

const PackageItem = ({title, price,URL,des,duration}:PackageItemProps) => {
return(
  <div className='overflow-hidden rounded-tr-xl rounded-tl-xl border border-slate-200 group'>
    <div className='overflow-hidden relative '>
      <Image
        src={URL}
        alt='image'
        height={400}
        width={600}
        className='group-hover:scale-105 group-hover:rotate-2 transition-all duration-500'
        />
        <Link href={'/'} className='absolute top-1/2 left-1/2 text-[55px] h-14 w-14 hover:text-black bg-white flexCenter rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500'><RiSearchLine /></Link>        
    </div>
    <div className='p-4 bg-white'>
      <div className='capitalize medium-18 flexBetween'>{title} <span className='text-green-50'>{price}</span></div>
      <p className='text-gray-50 my-3 regular-14 border-b border-gray-200 pb-3'>{des}</p>
      <div className='flexBetween'>
        <p className='flexStart gap-2 text-gray-50'><RiTimeLine/><span className='medium-14'>{duration}</span></p>
        <Link href='/' className='medium-14 px-4 py-2 rounded-md border bg-black text-white'><span>Book Now</span></Link>
      </div>
    </div>
  </div>
)
}
