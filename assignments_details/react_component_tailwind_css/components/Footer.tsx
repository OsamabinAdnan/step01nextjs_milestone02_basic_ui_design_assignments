import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

export default function Footer() {
  return (
    <div className='bg-black w-[100vw] max-h-full'>
        <div className=' max-w-[1440px] mx-auto '>
            <div className=' max-h-full py-12 flex lg:flex-row flex-col gap-[88px] lg:ml-[0px] ml-[25px]'>
                {/* Exclusive Part */}
                <div className='flex flex-col text-white gap-y-6 w-[217px]'>
                    <h1 className='text-[24px] font-bold'>Exclusive</h1>
                    <h2 className='text-[20px] font-medium'>Subscribe</h2>
                    <p className='text-[16px] '>Get 10% off your first order</p>
                    <div className='flex justify-center items-center border border-white w-[217px] h-8 px-[16px] py-[12px] rounded-[10px] relative'>
                        <Input placeholder='Enter your email' className='border-none text-[16px] text-gray  '/>
                        <div className='absolute right-[10px] top-[12px]'>
                            <Image src='/Vector.svg' alt='send-icon'width={24} height={24} className='text-white'/>
                        </div>
                    </div>
                    
                </div>

                {/* Support */}
                <div className='flex flex-col text-white gap-y-6 w-[217px] '>
                    <h1 className='text-[20px] font-medium'>Support</h1>
                    <div className='flex justify-center items-start flex-col gap-y-6'>
                        <p className='text-[16px] font-[400]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='text-[16px] font-[400]'>exclusive@gmail.com</p>
                        <p className='text-[16px] font-[400]'>+88015-88888-9999</p>
                    </div>
                </div>

                {/* Account */}
                <div className='flex flex-col text-white gap-y-6 '>
                    <h1 className='text-[20px] font-medium'>Account</h1>
                    <div className='flex justify-center items-start flex-col gap-y-6'>
                        <p className='text-[16px] font-[400]'>My Account</p>
                        <p className='text-[16px] font-[400]'>Login/Register</p>
                        <p className='text-[16px] font-[400]'>Cart</p>
                        <p className='text-[16px] font-[400]'>Wishlist</p>
                        <p className='text-[16px] font-[400]'>Shop</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col text-white gap-y-6 '>
                    <h1 className='text-[20px] font-medium'>Quick Links</h1>
                    <div className='flex justify-center items-start flex-col gap-y-6'>
                        <p className='text-[16px] font-[400]'>Privacy Policy</p>
                        <p className='text-[16px] font-[400]'>Terms of Uses</p>
                        <p className='text-[16px] font-[400]'>FAQ</p>
                        <p className='text-[16px] font-[400]'>Contact</p>
                    </div>
                </div>

                {/* Download App */}
                <div className='flex flex-col text-white gap-y-6 '>
                    <h1 className='text-[20px] font-medium'>Download App</h1>
                    <p className='text-[12px] font-medium text-gray'>Save $3 with App New User Only</p>
                    <div className='flex gap-2 justify-start items-center'>
                        <Image src={'/Qr Code.svg'} alt='qr-code' width={80} height={80}/>
                        <div className='flex flex-col'>
                            <Image src={'/GooglePlay.svg'} alt='qr-code' width={110} height={40}/>
                            <Image src={'/AppStore.svg'} alt='qr-code' width={110} height={40}/>
                        </div>
                    </div>
                    <div className='flex gap-6 justify-start items-center'>
                        <span><BiLogoFacebook widths={24} height={24} /></span>
                        <span><BiLogoTwitter widths={24} height={24}/></span>
                        <span><BiLogoInstagram widths={24} height={24}/></span>
                        <span><BiLogoLinkedin widths={24} height={24}/></span>
                    </div>

                </div>

            </div>
        </div>
        <div className='border-t-2 border-black/40'>
            <p className='gray text-[16px] text-center py-2 tracking-wide'> <span className='space-x-2'> &#169; </span>  Copyright Rimel 2022. All right reserved</p>
        </div>

    </div>
  )
}
