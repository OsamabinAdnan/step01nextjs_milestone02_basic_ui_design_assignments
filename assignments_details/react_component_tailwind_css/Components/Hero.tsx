import { CATEGORIES } from '@/constant'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

type CategoryItems = {
  title:string
  icon:string
}

export default function Hero() {
  const CategoryItems = ({title, icon}:CategoryItems) => {
    return (
      <Link href={'/'} className='bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[4px] transition-all duration-500 rounded-md'>
        <Image src={icon} alt='icons' width={22} height={22} className='regular-28'/>
        <span className='capitalize regular-16'>{title}</span>
      </Link>
    )
  }
  return (
    <section className='relative bg-hero h-[100vh] w-full z-10 pb-12'>
      <div className='max-container padding-container  relative top-28 sm:top-1/3 z-10  '>
        <h1 className='bold-44 sm:bold-64 text-white capitalize max-w-[36rem]'>Explore Pakistan With Us</h1>
        <p className='regular-20 mt-6 text-white lg:w-1/2'>
        Discover the breathtaking beauty, rich culture, and hidden gems of Pakistan like never before. From majestic mountains to vibrant cities, let us guide you on an unforgettable journey through this incredible land.
        </p>
        <div className='mt-8'>
          <Button
           type='button'
           title='Travel Plan'
           icon='send-plane.svg'
           variant='btn_white_rounded'/>
        </div>
        <h4 className='text-white my-4 bold-32'>Explore the key points</h4>
        <ul className='flex flex-wrap gap-4'>
          {
            CATEGORIES.map((category)=>(
              <CategoryItems
              title = {category.title}
              key = {category.title}
              icon = {category.icon}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}



