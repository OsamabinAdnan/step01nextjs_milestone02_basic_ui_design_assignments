import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function HeroSection() {
  return (
    <section className='max-w-[1440px] mx-auto w-full flex lg:flex-row flex-col-reverse justify-between items-start lg:px-0 px-4 mb-[140px] '>
        
        <div className='lg:w-auto w-max pr-[40px] border-r-2 pt-10'>
            <div className='flex flex-col justify-center lg:items-start gap-3 w-full '>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Women's Fashion <span className='inline-block'><ChevronRight className="size-3 text-black text-center"  /></span></Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Men's Fashion <span className='inline-block'><ChevronRight className="size-3 text-black text-center"  /></span></Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Electronics </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Home & Life Style </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Medicine </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Sport and Outdoor </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Baby's & Toys </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Groceries & Pets </Link>
              <Link href={'/'} className='border-none shadow-none text-[18px] font-normal'>Health & Beauty </Link>
            </div>
        </div>
        {/* Image */}
        <div className=' mt-10 '>
        <Image src='/heroImage.png' alt='hero-image' height={344}
          width={1020} className="object-contain" />
        </div>


    </section>
  )
}
