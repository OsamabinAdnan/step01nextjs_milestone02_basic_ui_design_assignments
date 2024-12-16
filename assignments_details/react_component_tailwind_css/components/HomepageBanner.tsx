import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Banner() {
  return (
    <div className='mx-auto max-w-[1440px] bg-black my-20  h-auto p-4 rounded'>
      <div className='flex justify-between items-center gap-[10px] px-8 py-6'>
        <div className='flex-col flex justify-start items-start gap-6'>
            <h3 className='text-[#00FF66] text-[16px] font-semibold'>Categories</h3>
            <h1 className='text-white text-[48px] font-semibold'>Enhance Your Music Experience </h1>
            {/* Timer */}
            <div className='flex justify-start items-center sm:flex-row flex-col gap-6'>
              <div className='flex justify-center items-center bg-white max-h-[64px] max-w-[64px] p-4 rounded-full flex-col '>
                  <h1 className='text-sm font-bold'>23 </h1>
                  <h2 className='text-[8px]'>Hours</h2>
              </div>
              <div className='flex justify-center items-center bg-white max-h-[64px] max-w-[64px] p-4 rounded-full flex-col '>
                  <h1 className='text-sm font-bold'>05</h1>
                  <h2 className='text-[8px]'>Days</h2>
              </div>
              <div className='flex justify-center items-center bg-white max-h-[64px] max-w-[64px] p-4 rounded-full flex-col '>
                  <h1 className='text-sm font-bold'>59</h1>
                  <h2 className='text-[8px]'>Minutes</h2>
              </div>
              <div className='flex justify-center items-center bg-white max-h-[64px] max-w-[64px] p-4 rounded-full flex-col '>
                  <h1 className='text-sm font-bold'>35</h1>
                  <h2 className='text-[8px]'>Seconds</h2>
              </div>
            </div>
            {/* Button */}
            <div>
              <Button className='bg-[#00FF66] text-white px-8 py-4 rounded hover:bg-white hover:text-black'>Buy Now</Button>
            </div>

        </div>

        <div className='flex items-center justify-center relative z-0'>
            <Image src='/bannerImage.png' width={600} height={420} alt='img' className='relative z-10'/>
            <div className="w-full  [filter:blur(200px)] rounded-[50%] bg-[gainsboro] h-[500px] opacity-[0.3] absolute z-1 top-[-10%]" />
        </div>
      </div>
        

    </div>
  )
}
