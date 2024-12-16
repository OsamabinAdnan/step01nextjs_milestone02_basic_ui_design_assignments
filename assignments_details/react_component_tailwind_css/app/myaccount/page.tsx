import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'


export default function Account() {

  return (
    <>
        <section className='max-container'>
            {/* Top Heading */}
            <div className='flex md:justify-between justify-center items-center md:flex-row flex-col my-20 gap-2 md:gap-0'>
                <p className='text-black/50 lg:text-left text-center'>Home / <span className='text-black'>My Account</span></p>
                <p className=' text-black lg:text-left text-center'>Welcome! <span className='text-[#DB4444]'>Md Rime!</span></p>
            </div>
            
            {/* Whole Section */}
            <div className='mb-[140px] flex lg:flex-row flex-col gap-[100px] lg:items-start justify-center items-center '>
                {/* Left Section */}
                <div className='flex flex-col gap-6 basis-[50%] md:ml-0 ml-3 '>
                    {/* Left Section 1st part */}
                    <div>
                        <h1 className='mb-4 text-[18px] font-medium'>Manage My Account</h1>
                        <div className='flex flex-col justify-center items-start ml-10 gap-2'>
                            <Link href='/' className='text-[18px] font-normal text-[#db4444]'>My Profile</Link>
                            <Link href='/' className='text-[18px] font-normal text-black/50'>Address Book</Link>
                            <Link href='/' className='text-[18px] font-normal text-black/50'>My Payment Options</Link>
                        </div>
                    </div>
                    {/* Left Section 2nd part */}
                    <div>
                        <h1 className='mb-4 text-[18px] font-medium'>My Orders</h1>
                        <div className='flex flex-col justify-center items-start ml-10 gap-2'>
                            <Link href='/' className='text-[18px] font-normal text-black/50'>My Returns</Link>
                            <Link href='/' className='text-[18px] font-normal text-black/50'>My Cancellations</Link>
                        </div>
                    </div>
                    {/* Left Section 3rd part */}
                    <div>
                        <Link href='/wishlist' className='mb-4 text-[18px] font-medium'> My WishList</Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className='flex flex-col gap-6 lg:p-12 md:p-6 p-3 shadow-2xl  '>
                    {/* Form main heading div */}
                    <div>
                        <h1 className='text-[22px] font-medium text-[#db4444]'>Edit Your Profile</h1>
                    </div>
                    
                    {/* Form 1st Div first and last name */}
                    <div className='flex gap-[50px] lg:flex-row flex-col'>
                        <div>
                            <label htmlFor="" className='text-[16px] font-normal'> First Name
                            <Input type='text' placeholder='Md' className='border-none bg-[#f5f5f5] text-gray w-[330px]  rounded-[10px]'/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='text-[16px] font-normal'>Last Name
                                <Input type='text' placeholder='Rimel' className='border-none bg-[#f5f5f5] text-gray w-[330px]  rounded-[10px]'/>
                            </label>
                        </div>
                    </div>

                    {/* Form 2nd Div email and address */}
                    <div className='flex gap-[50px] lg:flex-row flex-col'>
                        <div>
                            <label htmlFor="" className='text-[16px] font-normal'> Email
                            <Input type='email' placeholder='rimel1111@gmail.com' className='border-none bg-[#f5f5f5] text-gray  w-[330px] rounded-[10px]'/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='text-[16px] font-normal'>Address
                                <Input type='text' placeholder='Kingston, 5236, United State' className='border-none bg-[#f5f5f5] text-gray w-[330px] rounded-[10px]'/>
                            </label>
                        </div>
                    </div>

                    {/* Form 3rd Div pwd and confirm pwd */}
                    <div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor="" className='text-[16px] font-normal'>Password Changes
                                    <Input type='text' placeholder='Current Password' className='border-none bg-[#f5f5f5] text-gray w-full rounded-[10px]'/>
                                </label>
                            </div>
                            <div>
                                <Input type='text' placeholder='New Password' className='border-none bg-[#f5f5f5] text-gray w-full rounded-[10px]'/>
                            </div>
                            <div>
                                <Input type='text' placeholder='Confirm New Password' className='border-none bg-[#f5f5f5] text-gray w-full rounded-[10px]'/>
                            </div>
                        </div>
                    </div>

                   {/* Form last Div btn */}

                   <div className='flex justify-end items-center gap-8'>
                        <Link href='/' className='text-[16px] font-normal'>Cancel</Link>
                        <Button className='px-12 py-3 bg-[#db4444] text-white text-[16px] font-medium rounded-[10px] hover:bg-[#bb3a3a]'>Save Changes</Button>
                   </div>
                
                </div>

            </div>
            
        </section>
    </>
  )
}
