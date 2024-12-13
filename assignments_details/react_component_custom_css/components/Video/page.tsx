import Link from 'next/link'
import React from 'react'
import { RiPlayFill } from 'react-icons/ri'
import styles from './video.module.css'
import Image from 'next/image'

export default function Video() {
  return (
    <>
      <section className='w-full my-10'>
            <div className='bg-gray-100 max-w-[1440px] mx-auto p-2'>
                <div className='flex items-center justify-center my-2 max-w-[1024px] mx-auto relative'>
                    <Image src='/video7.jpg' alt='img' width={1440} height={300}/>
                    <div className='absolute text-white h-16 w-16 bg-[#4ee247] z-10 flex justify-center items-center rounded-full'>
                        <Link href={'https://youtu.be/AeSadjRblyM?list=RDQMBt5Z15c8Kck'} target='blank'><RiPlayFill className='w-12 h-12'/></Link>
                    </div>
                    <div className='absolute h-12 w-12 bg-white rounded-full animate-ping'></div>
                </div>
            </div>
      </section>
    </>
  )
}
