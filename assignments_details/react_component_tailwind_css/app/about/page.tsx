'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {Button} from '@/components/ui/button'
import { CiDollar } from 'react-icons/ci'

export default function About() {

    // For Slider
    const slides = [
        {
          image: "/tom.jpg",
          name: "Tom Cruise",
          position: "Founder & Chairman",
        },
        {
          image: "/emma.jpg",
          name: "Emma Watson",
          position: "Managing Director",
        },
        {
          image: "/will.jpg",
          name: "Will Smith",
          position: "Product Designer",
        },
        {
            image: "/tom.jpg",
            name: "Tom Cruise",
            position: "Founder & Chairman",
          },
          {
            image: "/emma.jpg",
            name: "Emma Watson",
            position: "Managing Director",
          },
          {
            image: "/will.jpg",
            name: "Will Smith",
            position: "Product Designer",
          },
    ];

    const [currentSlide, setCurrentSlide] = useState(0)
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
      };

  return (
    <section className='max-container'>
        {/* Top Heading */}
        <p className='my-20 text-black/50 lg:text-left text-center'>Home / <span className='text-black'>About</span>
        </p>
            
        <div className=''>
            {/* top section */}
            <div className='flex justify-between items-center gap-4 lg:flex-row flex-col mb-[140px]'>
                {/* Left text part of top section */}
                <div className='basis-[60%] max-w-full w-[50%] flex flex-col gap-[40px]'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>
                    <p className='text-[18px] font-normal'>Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className='text-[18px] font-normal'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                {/* Right picture of top section */}
                <div className=" bg-[#EB7EA8] max-w-[700px] max-h-[700px] rounded-[10px]">
                    
                    <Image src='/about-image.jpg' alt='about-image' width={950} height={609} className=' rounded-[10px] '/>
                    
                </div>
            </div>

            {/* Middle Section */}
            <div className='flex lg:flex-row flex-col gap-4 justify-center items-center mb-[140px]'>
                {/* 1st Box */}
                <div className='w-[300px] h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 hover:bg-[#DB4444] shadow-lg'>
                    <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2  group-hover:bg-white relative z-[10]'>
                        <Image src='/shop.svg' alt='services-img' width={40} height={40} className='  group-hover:invert'/>
                    </div>
                    <div>
                        <p className='text-[32px] font-bold group-hover:text-white'>10.5k</p>
                        <p className='text-[16px] font-normal group-hover:text-white'>Sellers active our site</p>
                    </div>
                </div>

                {/* 2nd Box */}
                <div className='w-[300px] h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 hover:bg-[#DB4444] shadow-lg'>
                    <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2  group-hover:bg-white relative z-[10]'>
                        <Image src='/shopping-bag.svg' alt='services-img' width={40} height={40} className='  group-hover:invert'/>
                    </div>
                    <div>
                        <p className='text-[32px] font-bold group-hover:text-white'>45.5k</p>
                        <p className='text-[16px] font-normal group-hover:text-white'>Customer active in our site</p>
                    </div>
                </div>

                {/* 3rd Box */}
                <div className='w-[300px] h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 hover:bg-[#DB4444] shadow-lg'>
                    <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2  group-hover:bg-white relative z-[10]'>
                        <Image src='/dollar.svg' alt='services-img' width={40} height={40} className=' group-hover:invert'/>
                        <Image src='/dollar-bag-sign.svg' alt='services-img' width={15} height={15} className='absolute top-[30] left-[25] bg-black group-hover:invert'/>
                    </div>
                    <div>
                        <p className='text-[32px] font-bold group-hover:text-white'>25k</p>
                        <p className='text-[16px] font-normal group-hover:text-white'>Annual gross sales in our site</p>
                    </div>
                </div>

                {/* 4th Box */}
                <div className='w-[300px] h-[260px] border-[1px] border-black/30 rounded-[10px] group py-8 px-4 flex flex-col justify-center items-center text-center gap-3 hover:bg-[#DB4444] shadow-lg'>
                    <div className='rounded-[50%] border-[10px] border-gray-300 bg-black p-2  group-hover:bg-white relative z-[10]'>
                    <CiDollar className='text-white font-bold w-[40px] h-[40px] group-hover:invert'/>
                    </div>
                    <div>
                        <p className='text-[32px] font-bold group-hover:text-white'>33k</p>
                        <p className='text-[16px] font-normal group-hover:text-white'>Monthly Product Sales</p>
                    </div>
                </div>
            </div>

            {/* Slider Section*/}

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden mb-[140px]">
                {/* Slides */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {(slides).map((slide, index) => ( 
                        <div key={index} className="flex-shrink-0 w-full flex flex-col items-center p-6">
                            <Image
                            src={slide.image}
                            alt={slide.name}
                            width={370}
                            height={430}
                            className="rounded-md w-[370px] h-[430px] object-cover mb-4"/>
                            <h3 className="text-xl font-semibold">{slide.name}</h3>
                            <p className="text-gray-600">{slide.position}</p>
                        </div>
                    ))}
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-4">
                    {slides.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => goToSlide(index)} 
                            className={`w-3 h-3 rounded-full ${ currentSlide === index ? "bg-[#DB4444]": "bg-gray-400"}`}>
                        </Button>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}

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
        </div>
    </section>
  )
}



