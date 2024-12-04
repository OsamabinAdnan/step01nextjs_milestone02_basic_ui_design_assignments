import Link from 'next/link'
import React from 'react'
import { RiPlayFill } from 'react-icons/ri'

export default function Video() {
  return (
    <>
      <section className='max-container padding-container py-16'>
        <div className='bg-video bg-cover bg-center bg-no-repeat h-[260px] md:h-[400px] xl:h-[500px] grid place-items-center rounded-2xl relative'>
          <div className='text-white h-16 w-16 bg-green-50 bold-32 flexCenter rounded-full cursor-pointer z-10' ><Link href={'https://youtu.be/AeSadjRblyM?list=RDQMBt5Z15c8Kck'} target='blank'><RiPlayFill/></Link></div>
          <div className='absolute h-12 w-12 bg-white rounded-full animate-ping'></div>
        </div>
      </section>
    </>
  )
}
