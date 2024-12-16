import { Input } from '@/components/ui/input'
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Checkout() {
  return (
    <>
        <section className='max-container'>
        {/* Top Heading */}
          <p className='my-20 text-black/50 lg:text-left text-center sm:text-[14px] text-[10px] text-wrap'>Account / My Account / Product / View Cart / <span className='text-black'>CheckOut</span></p>
          <h1 className='text-[36px] font-medium mb-12 sm:ml-0 ml-2'>Billing Details</h1>
            {/* Whole Div */}
            <div className='mb-[140px] flex justify-between sm:items-start item-center lg:flex-row flex-col gap-20'>

                {/* Left Div */}
                <div>
                    
                    <div className='flex flex-col gap-8 sm:ml-0 ml-2'>
                        <div className='max-w-[470px]  space-y-2'>
                            <p className='text-[16px] text-black/50'>First Name<span className='text-[#db4444]'>*</span></p>
                            <Input type='text' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Company Name</p>
                            <Input type='text' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Street Address<span className='text-[#db4444]'>*</span></p>
                            <Input type='text' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Apartment, floor etc. (optional)</p>
                            <Input type='text' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Town/City<span className='text-[#db4444]'>*</span></p>
                            <Input type='text' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Phone Number<span className='text-[#db4444]'>*</span></p>
                            <Input type='tel' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full space-y-2'>
                            <p className='text-[16px] text-black/50'>Email Address<span className='text-[#db4444]'>*</span></p>
                            <Input type='email' className='border-none bg-[#f5f5f5] rounded'/>
                        </div>
                        <div className='max-w-[470px] w-full flex justify-start items-center gap-4'>
                            <Checkbox className='   ' id='check'   />
                            <label htmlFor='check' className='text-[16px] '>Save this information for faster check-out next time</label>
                        </div>
                    </div>
                </div>

                {/* Right Div */}
                <div className='flex flex-col gap-8'>
                    {/* 1st Div */}
                    <div className='space-y-8'>
                        {/* 1st Inner of 1st Div */}
                        <div className='flex  w-full  sm:gap-6 gap-2 justify-center items-center'>
                            <div>
                                <Image src='/h1gamepad.png' width={54} height={54} alt='led'/>
                            </div>
                            <div className='flex sm:justify-between justify-center gap-2 items-center max-w-full w-[347px]'>
                                <div className='text-[16px] font-normal'>H1 Gamepad</div>
                                <div className='text-[16px] font-normal'>$650</div>
                            </div>
                        </div>

                        {/* 2nd Inner of 1st Div */}
                        <div className='flex  w-full  sm:gap-6 gap-2 justify-center items-center'>
                            <div>
                                <Image src='/led.png' width={54} height={54} alt='led'/>
                            </div>
                            <div className='flex sm:justify-between justify-center gap-2 items-center max-w-full w-[347px]'>
                                <div className='text-[16px] font-normal'>LCD Monitor</div>
                                <div className='text-[16px] font-normal'>$1100</div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd Div */}
                    <div className='flex flex-col gap-4 '>
                        <div className='flex sm:justify-between justify-center gap-4 items-center border-b-2'>
                            <div className='text-[16px] font-normal'>Subtotal:</div>
                            <div className='text-[16px] font-normal'>$1750</div>
                        </div>
                        <div className='flex sm:justify-between justify-center gap-4 items-center border-b-2'>
                            <div className='text-[16px] font-normal'>Shipping:</div>
                            <div className='text-[16px] font-normal'>Free</div>
                        </div>
                        <div className='flex sm:justify-between justify-center gap-4 items-center '>
                            <div className='text-[16px] font-normal'>Total:</div>
                            <div className='text-[16px] font-normal'>$1750</div>
                        </div>
                    </div>
                    
                    {/* 3rd Div Bank*/}
                    <div>
                        <div className='flex  w-full sm:flex-row flex-col  gap-6 justify-center items-center'>
                            <div>
                                <Image src='/Radio Button.png' width={24} height={24} alt='led'/>
                            </div>
                            <div className='flex justify-between sm:flex-row flex-col items-center max-w-full w-[347px]'>
                                <div className='text-[16px] font-normal'>Bank</div>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src='/Bkash.png' width={42} height={28} alt='bkash'/>
                                    <Image src='/Visa.png' width={42} height={28} alt='visa'/>
                                    <Image src='/Mastercard.png' width={42} height={28} alt='mastecard'/>
                                    <Image src='/Nagad.png' width={42} height={28} alt='nagad'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4th Div Cash on delivery*/}
                    <div>
                        <div className='flex  w-full sm:flex-row flex-col  gap-6 justify-center items-center'>
                            <div>
                                <Image src='/Radio Button2.png' width={24} height={24} alt='led'/>
                            </div>
                            <div className='flex sm:justify-between justify-center items-center max-w-full w-[347px]'>
                                <div className='text-[16px] font-normal'>Cash on delivery</div>
                            </div>
                        </div>
                    </div>

                    {/* 5th Div Coupon */}
                    <div className='w-full  flex gap-2 justify-start items-center sm:flex-row flex-col'>
                        <input type="text" placeholder='Coupon Code' className='w-[300px] border px-2 py-1 border-black rounded' />
                        <Button className='bg-[#db4444] p-2 text-white rounded-[10px] text-[16px] font-medium hover:bg-[#bb3a3a]'>Apply Coupon</Button>
                    </div>

                    {/* 6th Div place order */}
                    <div className='flex sm:justify-start justify-center items-center'>
                        <Button className='bg-[#db4444] px-6 py-2 text-white rounded-[10px] text-[16px] font-medium hover:bg-[#bb3a3a]'>Place Order</Button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
