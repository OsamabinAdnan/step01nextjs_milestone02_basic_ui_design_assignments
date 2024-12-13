import { Button } from '@/components/ui/button'
import { Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Packages() {
  return (
    <>
        <section className='w-full'>
            <div className='max-w-[1440px] mx-auto p-10 bg-gray-100 my-10'>
                <div className='max-w-[1024px] mx-auto'>
                    <h1 className='sm:text-[45px] text-[28px] font-bold text-black text-center'>Our Packages</h1>
                    <p className='text-gray-500 text-center my-10 sm:text-[25px] text-[18px]'>Our packages offer the perfect blend of adventure and relaxation. Let us take care of the details while you enjoy the experience.</p>
                </div>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {/* 1st pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/hsfm.png' alt='image' height={400} width={600}/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Northern Gems: Hunza, Skardu, and Fairy Meadows</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$1,200 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Discover the captivating beauty of Northern Pakistan with visits to Hunza, Skardu, and the serene Fairy Meadows. This package offers a perfect mix of adventure, nature, and culture.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>8 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 2nd pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/punjab.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Majestic Punjab: Lahore, Multan, and Islamabad</h1>
                            <p className='sm:text-[18px] text-[12px] text-green-700'>$850 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Dive into the rich history and culture of Punjab with a visit to Lahore's Badshahi Mosque, Multan's Sufi shrines, and the modern capital city of Islamabad. Enjoy the vibrant local bazaars, and historical architecture.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>6 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 3rd pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/baloch.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Coastal Bliss: Gwadar, Hingol National Park, Kund Malir</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$700 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Experience the untouched beauty of Pakistan's southern coastline. Marvel at the pristine beaches of Kund Malir, the Hingol National Park's majestic rock formations, and the cultural charm of Gwadar.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>4 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 4th pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/malamjabba.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Swat Retreat: Mingora, Malam Jabba, and Kalam</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$650 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Enjoy a peaceful escape to Swat Valley, known as the `Switzerland of the East`. This package includes skiing at Malam Jabba, lush green landscapes in Kalam, and cultural exploration in Mingora.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>5 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                     {/* 5th pic */}
                     <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/sindh.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Sindh Splendor: Karachi, Hyderabad, and Mohenjo-Daro</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$900 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Discover the vibrant culture of Sindh, from Karachi's bustling streets to the ancient ruins of Mohenjo-Daro. This journey is a perfect blend of history, art, and coastal beauty. What you are waiting for?</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>6 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 6th pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/kashmir.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px]  font-bold'>Dreamy Kashmir: Neelum Valley, Muzaffarabad, Rawalakot</h1>
                            <p className='sm:text-[18px] text-[12px]  font-semibold text-green-700'>$950 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Explore the enchanting valleys of Kashmir, filled with lush greenery, clear rivers, and mesmerizing mountain views. Highlights include Toli Pir, Banjosa Lake, and cultural experiences in Muzaffarabad.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>6 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 7th pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/islamabad.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Capital to Hills: Islamabad, Murree, Patriata</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$500 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Explore the enchanting valleys of Kashmir, filled with lush greenery, clear rivers, and mesmerizing mountain views. Highlights include Toli Pir, Banjosa Lake, and cultural experiences in Muzaffarabad.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>3 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 8th pic */}
                    <div className='overflow-hidden relative max-w-[400px] rounded-xl bg-white  '>
                        <Image src='/islamabad.png' alt='image' height={400} width={600} className=''/>
                        <div className='flex p-2 justify-between items-center gap-2'>
                            <h1 className='sm:text-[18px] text-[12px] font-bold'>Colorful Chitral: Kalash Valley and Beyond</h1>
                            <p className='sm:text-[18px] text-[12px] font-semibold text-green-700'>$1100 per person</p>
                        </div>
                        <div className='p-2'>
                            <p className='sm:text-[14px] text-[10px] font-medium text-gray-600'>Celebrate the vibrant traditions of the Kalash people and explore the natural beauty of Chitral. This package includes cultural immersion, treks, and visits to local landmarks.</p>
                        </div>
                        <div className='flex justify-between items-center p-2 border-t-[1px] border-gray-300'>
                            <div className='flex justify-center items-center gap-2'>
                                <Timer className='sm:text-[16px] text-[12px] text-gray-500'/>
                                <p className='sm:text-[18px] text-[12px] text-gray-500'>3 Days</p>
                            </div>
                            <div>
                                    <Button className='sm:py-2 py-0 sm:px-4 px-1 hover:text-black hover:bg-[#4ee247]'>Book Now</Button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
    </>
  )
}
