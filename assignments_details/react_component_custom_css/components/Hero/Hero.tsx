import React from 'react'
import styles from './Hero.module.css'
import { Button } from '../ui/button'
import { MdPlace, MdTravelExplore } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'
import { Hotel, ShoppingBagIcon } from 'lucide-react'

export default function Hero() {
  return (
    <>
        <section className={styles.bgImage}>
            <div className='max-w-[1440px] mx-auto space-y-6  '>
                <div className='top-24 relative space-y-6 max-w-2xl m-2'>
                    <div className='space-y-8 '>
                        <h1 className='text-white text-left md:text-[55px] text-[35px] font-bold'>Explore Pakistan With Us</h1>
                        <p className='text-white md:text-[25px] text-[16px]'>Discover the breathtaking beauty, rich culture, and hidden gems of Pakistan like never before. From majestic mountains to vibrant cities, let us guide you on an unforgettable journey through this incredible land.</p>
                    </div>
                    <div>
                        <Button className='text-left bg-white text-black hover:bg-[#4ee247]'><span><MdTravelExplore/></span>Travel Plan</Button>
                    </div>
                    <div>
                        <h1 className='text-left text-white md:text-[45px] text-[25px]'>Explore the key points</h1>
                    </div>
                    <div className='md:flex justify-start items-center gap-4 flex-row hidden'>
                        <Button className='bg-white text-black hover:bg-[#4ee247]'><span><MdPlace/></span>Places</Button>
                        <Button className='bg-white text-black hover:bg-[#4ee247]'><span><BiFoodMenu/></span> Restaurants</Button>
                        <Button className='bg-white text-black hover:bg-[#4ee247]'><span><Hotel/></span>Hotels</Button>
                        <Button className='bg-white text-black hover:bg-[#4ee247]'><span><ShoppingBagIcon/></span> Shopping</Button>
                    </div>
                </div>
                
            </div>

        </section>
    </>
    
  )
}
