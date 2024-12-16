import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function contact() {
  return (
    <section className='max-container'>
        {/* Top Heading */}
        <p className='my-20 text-black/50 lg:text-left text-center'>Home / <span className='text-black'>Contact</span>
        </p>

        <div className='flex justify-start items-center gap-[30px] lg:flex-row flex-col mb-[140px]'>
            {/* Left Section */}
            <div className='py-2 px-4 shadow-2xl'>
                <div className='space-y-8 max-w-[300px]  '>
                    {/* Left Div upper*/}
                    <div className='border-b-2 border-black gap-6  flex flex-col'>
                        <div className='flex gap-5 justify-start items-center'>
                            <Image src='/phone.svg' alt='phone' width={40} height={40}/>
                            <h1>Call To Us</h1>
                        </div>
                        <div className='flex gap-6 flex-col mb-8'>
                            <p className='text-[16px]'>We are available 24/7, 7 days a week</p>
                            <p className='text-[16px]'>Phone: +8801611112222</p>
                        </div>
                    </div>
                    {/* Left Div below */}
                    <div className=' gap-6  flex flex-col'>
                        <div className='flex gap-5 justify-start items-center'>
                            <Image src='/mail.svg' alt='phone' width={40} height={40}/>
                            <h1>Write To Us</h1>
                        </div>
                        <div className='flex gap-6 flex-col mb-8'>
                            <p className='text-[16px]'>Fill out our form and we will contact you within 24 hours.</p>
                            <p className='text-[16px]'>Emails: customer@exclusive.com</p>
                            <p className='text-[16px]'>Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className=' lg:p-8 p-4 shadow-2xl '>

                    <div className='flex flex-col gap-8 '>
                        <div className='flex justify-center items-center gap-4 lg:flex-row flex-col'>
                            <Input type='text' placeholder='Your Name *' className='border-none bg-[#F5F5F5] rounded-[10px] text-[16px] text-black/50'></Input>
                            <Input type='email' placeholder='Your Email *' className='border-none bg-[#F5F5F5] rounded-[10px] text-[16px] text-black/50'></Input>
                            <Input type='tel' placeholder='Your Phone *' className='border-none bg-[#F5F5F5] rounded-[10px] text-[16px] text-black/50'></Input>
                        </div>
                        <div className='  '>
                            <textarea placeholder='Your Message *' className='border-none bg-[#F5F5F5] rounded-[10px] text-[16px] text-black/50 textarea  '/>
                        </div>
                        <div className='flex justify-end'>
                            <Button className='bg-[#DB4444] text-white px-8 py-3 rounded text-[16px] font-medium hover:bg-[#bb3a3a]'>Send Message</Button>
                        </div>

                    </div>
            </div>

        </div>
        

    </section>
  )
}
