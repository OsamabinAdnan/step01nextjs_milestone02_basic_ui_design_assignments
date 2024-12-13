
import React from 'react'
import styles from '@/components/About/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <>
        <section className={styles.section}>
            <div className='max-w-[1440px] mx-auto my-20 '>
                {/* 1st Section */}
                <div className='flex justify-center items-center gap-8 md:flex-row flex-col md:m-0 m-2 '>
                    {/* 1st col */}
                    <div className='flex items-start justify-center flex-col gap-5 flex-1'>
                        <h1 className='lg:text-[55px] text-[35px] font-bold'>Join Us In Exploring Pakistan</h1>
                        <p className='text-gray-500 lg:text-[28px] text-[16px]'>Join us in discovering the heart and soul of Pakistan. Let&apos;s create memories as we explore its breathtaking beauty and cultural richness.</p>
                        <p className='text-gray-500 lg:text-[28px] text-[16px]'>Step into the adventure of a lifetime as we take you across Pakistan&apos;s iconic landmarks and hidden gems. Experience the charm of this extraordinary land with us!</p>

                        <div className='flex items-center justify-start flex-wrap gap-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Comfortable Journey</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Luxuries Hotel</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Travel Guide</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Popular Destination</p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd col */}
                    <div className='flex flex-1 md:gap-4 gap-1 '>
                        <div>
                            <Image src='/about1.jpg' alt='img' width={333} height={222} className='w-auto rounded-lg border border-gray-10 mb-12'/>
                        </div>
                        <div>
                        <Image src='/about2.jpg' alt='img' width={333} height={222} className='w-auto rounded-lg border border-gray-10 mt-12'/>
                        </div>
                    </div>
                </div>
                
                {/* 2nd Section */}
                <div className='flex justify-center items-center gap-8 md:flex-row flex-col md:mx-0 mx-2 my-20 '>
                    
                    {/* 1st col */}
                    <div className='flex flex-1 md:gap-4 gap-1 '>
                        <div>
                            <Image src='/about3.jpg' alt='img' width={333} height={222} className='w-auto rounded-lg border border-gray-10 mb-12'/>
                        </div>
                        <div>
                        <Image src='/about4.jpg' alt='img' width={333} height={222} className='w-auto rounded-lg border border-gray-10 mt-12'/>
                        </div>
                    </div>
                    {/* 2nd col */}
                    <div className='flex items-start justify-center flex-col gap-5 flex-1'>
                        <h1 className='lg:text-[55px] text-[35px] font-bold'>Your Gateway to Pakistan&apos;s Wonders</h1>
                        <p className='text-gray-500 lg:text-[28px] text-[16px]'>Pakistan is calling! Discover its vibrant history, stunning scenery, and warm hospitality with us as your trusted guide.</p>
                        <p className='text-gray-500 lg:text-[28px] text-[16px]'>Adventure, culture, and serenity &#45; Pakistan has it all. Join us in uncovering the magic of this extraordinary country.</p>

                        <div className='flex items-center justify-start flex-wrap gap-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Tailored Experiences</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>World Class Hospitality</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Scenic Adventures</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className='lg:text-[22px] text-[16px]'>Memorable Journeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}
