import Image from 'next/image'
import React from 'react'

export default function HomeBottom() {
  return (
    <>
         <div className='flex lg:flex-row flex-col justify-center items-center gap-[88px] mb-[140px]'>
        
                        {/* 1st Box */}
                        <div className='max-w-[330px] max-h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 '>
                            <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2   relative z-[10]'>
                                <Image src='/icon-delivery.png' alt='services-img' width={40} height={40} className='  '/>
                            </div>
                            <div>
                                <p className='text-[20px] font-semibold '>FREE AND FAST DELIVERY</p>
                                <p className='text-[14px] font-normal '>Free delivery for all orders over $140</p>
                            </div>
                        </div>
        
                        {/* 2nd Box */}
                        <div className='max-w-[330px] max-h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 '>
                            <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2   relative z-[10]'>
                                <Image src='/Icon-Customer service.png' alt='services-img' width={40} height={40} className='  '/>
                            </div>
                            <div>
                                <p className='text-[20px] font-semibold '>24/7 CUSTOMER SERVICE</p>
                                <p className='text-[14px] font-normal'>Friendly 24/7 customer support</p>
                            </div>
                        </div>
        
                        {/* 3rd Bix */}
                        <div className='max-w-[330px] max-h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 '>
                            <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2   relative z-[10]'>
                                <Image src='/Icon-secure.png' alt='services-img' width={40} height={40} className='  '/>
                            </div>
                            <div>
                                <p className='text-[20px] font-semibold '>MONEY BACK GUARANTEE</p>
                                <p className='text-[14px] font-normal '>We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
    </>
  )
}
