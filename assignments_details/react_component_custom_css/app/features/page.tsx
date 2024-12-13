import Image from 'next/image'
import React from 'react'

export default function Features() {
  return (
    <>
      <section className='mx-auto max-w-[1440px] py-10 bg-gray-100 my-10'>
        <div className='flex flex-col gap-8'>
          {/* Heading */}
          <div className='max-w-[1024px] mx-auto space-y-5'>
              <h1 className='sm:text-[45px] text-[28px] font-bold text-center'>Featured Destinations</h1>
              <p className='sm:text-[25px] text-[18px] font-medium text-center text-gray-500'>From serene valleys to historic landmarks, our featured destinations bring you the best of Pakistan. Discover the magic that awaits!</p>
          </div>
          {/* Images */}
          <div className='mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1'>
            {/* 1 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/hunza.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Hunza Valley</p>
            </div>
            {/* 2 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/skardu.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Skardu Valley</p>
            </div>
            {/* 3 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/naran.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Naran Valley</p>
            </div>
            {/* 4 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/nathiagali.jpeg' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Nathia Gali</p>
            </div>
            {/* 5 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/fairy.jpg' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Fairy Meadows</p>
            </div>
            {/* 6 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/Kaghan.png' alt='img' width={322} height={222}/>
                <p className='text-[20px] mt-2'>Kaghan Valley</p>
            </div>
            {/* 7 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/chitral.png' alt='img' width={322} height={222}/>
                <p className='text-[20px] mt-2'>Chitral Valley</p>
            </div>
            {/* 8 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/ratti.png' alt='img' width={322} height={222}/>
                <p className='text-[20px] mt-2'>Ratti Gali Lake</p>
            </div>
            {/* 9 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/shandur.png' alt='img' width={322} height={222}/>
                <p className='text-[20px] mt-2'>Shandur Pass</p>
            </div>
            {/* 10 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/desoi.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Desoi National Park</p>
            </div>
            {/* 11 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/ziarat.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Ziarat Valley</p>
            </div>
            {/* 12 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/neelam.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Neelum Valley</p>
            </div>
            {/* 13 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/malir.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Kund Malir Beach</p>
            </div>
            {/* 14 */}
            <div className='bg-white rounded p-2 hover:scale-[2.0] transition-all duration-500'>
                <Image src='/hingol.png' alt='img' width={333} height={222}/>
                <p className='text-[20px] mt-2'>Hingol National Park</p>
            </div>
          
          </div>
        </div>
          
      </section>
    </>
  )
}
