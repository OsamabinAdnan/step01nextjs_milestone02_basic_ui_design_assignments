'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Cart() {
  const route = useRouter()
  return (
    <>
        <section className='max-container'>
        {/* Top Heading */}
          <p className='my-20 text-black/50 lg:text-left text-center'>Home / <span className='text-black'>Cart</span></p>

          {/* 1st Div */}
          <div className='flex flex-col gap-6'>
            
            {/* 1st row */}
            <div className='flex justify-between items-start lg:flex-row flex-col shadow-black/30 shadow-md rounded-[10px] p-6'>
              <p className='w-5/6'>Product</p> {/*5/6*/}
              <p className='w-2/6'>Price</p>
              <p className='w-2/6'>Quantity</p>
              <p className='w-2/6'>Subtotal</p>
            </div>

            {/* 2nd Div */}
            <div className='flex flex-wrap sm:flex-nowrap justify-between items-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-4 rounded px-4 sm:px-10 lg:flex-row flex-col'>
              {/* 1st Box */}
              <div className='w-full sm:w-1/3 flex items-center gap-4 text-left relative z-10"'>
                <Image src='/led.png' alt='product' width={54} height={54} />
                <Image src='/icon-cancel.png' alt='cancel' width={24} height={24} className='absolute top-[-10] left-[-10]'/>
                <span className="font-poppins text-sm sm:text-base">LCD Monitor</span>
              </div>
              {/* 2nd Box */}
              <div className="w-1/2 sm:w-1/6 text-center mt-4 sm:mt-0">
                <span className="text-sm sm:text-base font-poppins">$650</span>
              </div>
              {/* 3rd Box */}
              <div className='w-1/2 sm:w-1/6 flex justify-center text-center mt-4 sm:mt-0'>
                <div className='w-[60px] sm:w-[80px] border-2 border-button border-opacity-50 flex items-center justify-center py-2 px-2 sm:px-4 rounded gap-2 sm:gap-4'>
                  <div className='text-sm sm:text-base font-poppins'>1</div>
                  <div className='flex flex-col items-center'>
                    <ChevronUp/>
                    <ChevronDown/>
                  </div>
                </div>
              </div>
              {/* 4th Box */}
              <div className='w-full sm:w-1/6 text-center mt-4 sm:mt-0'>
                $650
              </div>
            </div>

              {/* 3rd Div */}
              <div className='flex flex-wrap sm:flex-nowrap justify-between items-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)] py-4 rounded px-4 sm:px-10 lg:flex-row flex-col'>
              {/* 1st Box */}
              <div className='w-full sm:w-1/3 flex items-center gap-4 text-left relative z-10"'>
                <Image src='/h1gamepad.png' alt='product' width={54} height={54} />
                
                <span className="font-poppins text-sm sm:text-base">LCD Monitor</span>
              </div>
              {/* 2nd Box */}
              <div className="w-1/2 sm:w-1/6 text-center mt-4 sm:mt-0">
                <span className="text-sm sm:text-base font-poppins">$550</span>
              </div>
              {/* 3rd Box */}
              <div className='w-1/2 sm:w-1/6 flex justify-center text-center mt-4 sm:mt-0'>
                <div className='w-[60px] sm:w-[80px] border-2 border-button border-opacity-50 flex items-center justify-center py-2 px-2 sm:px-4 rounded gap-2 sm:gap-4'>
                  <div className='text-sm sm:text-base font-poppins'>2</div>
                  <div className='flex flex-col items-center'>
                    <ChevronUp/>
                    <ChevronDown/>
                  </div>
                </div>
              </div>
              {/* 4th Box */}
              <div className='w-full sm:w-1/6 text-center mt-4 sm:mt-0'>
                $1100
              </div>
            </div>
          </div>

          
          {/* Buttons Div */}
          <div className='flex justify-between items-center md:flex-row flex-col mt-[24px] mb-[80px] gap-4'>
            <Button className='px-12 py-3 border-2 border-black/30 rounded-[10px] '>Return To Shop</Button>
            <Button className='px-12 py-3 border-2 border-black/30 rounded-[10px]'>Update Cart</Button>
          </div>



          {/* Coupon and proceed to checkout */}
          <div className='flex gap-[173px] lg:justify-between lg:items-start items-center lg:flex-row flex-col '>
            {/* Coupon */}
            <div className='flex gap-4 justify-center items-center md:flex-row flex-col'>
              <Input type='text' placeholder='Coupon Code' className='rounded-[10px] text-black/50'/>
              <Button className='px-12 py-5 border-2 bg-[#db4444] text-white rounded-[10px] text-[16px] font-medium hover:bg-[#bb3a3a]'>Apply Coupon</Button>
            </div>
            {/* Proceed to checkout */}
            <div className='w-auto h-auto flex flex-col border-2 border-black sm:p-8 p-2 gap-4 rounded-[10px]'>
              <span className='text-[20px] font-semibold'>Cart Total</span>
              <div className='flex justify-between items-center border-b-2'>
                <span className='text-[16px] font-normal'>Subtotal:</span>
                <span className='text-[16px] font-normal'>$1750</span>
              </div>
              <div className='flex justify-between items-center border-b-2'>
                <span className='text-[16px] font-normal'>Shipping:</span>
                <span className='text-[16px] font-normal'>Free</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-[16px] font-normal'>Total:</span>
                <span className='text-[16px] font-normal'>$1750</span>
              </div>
              <div className='flex justify-center items-center'>
                <Button onClick={()=>(route.push('/checkout'))} className='px-12 py-5 border-2 bg-[#db4444] text-white rounded-[10px] text-[16px] font-medium hover:bg-[#bb3a3a]'>Proceed to checkout</Button>
              </div>
              
            </div>
          </div>

          


          
        </section>
    </>
  )
}
