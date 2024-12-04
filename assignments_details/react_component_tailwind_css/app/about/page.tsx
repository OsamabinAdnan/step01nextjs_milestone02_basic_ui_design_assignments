import { ABOUT, ABOUT2 } from '@/constant'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
      <section className='max-container padding-container py-24'>
        {/* First Container */}
        <div className='flex flex-col gap-8 lg:flex-row pb-24'>
          {/* left side of the section */}
          <div className='flex flex-1 flex-col items-start justify-center'>
            <h1 className='bold-52 capitalize pb-4'>Join Us In Exploring Pakistan</h1>
            <p className='text-gray-50'>Join us in discovering the heart and soul of Pakistan. Let&#039;s create memories as we explore its breathtaking beauty and cultural richness.</p>
            <br />
            <p className='text-gray-50'>Step into the adventure of a lifetime as we take you across Pakistan&#039;s iconic landmarks and hidden gems. Experience the charm of this extraordinary land with us!</p>
            <div className='flex flex-wrap mt-8'>
              {ABOUT.map((about)=>(
                <AboutItems
                  key={about.title}
                  title={about.title}
                  icon={about.icon}
                />
              ))}
            </div>
          </div>
          {/* Right Side of the section */}
          <div className='flex flex-1 gap-4 lg:gap-8'>
            <div>
              <Image
              src='/about1.jpg'
              alt='about1'
              width={333}
              height={444}
              className='w-auto rounded-lg border border-gray-10 mb-12'
              />  
            </div>
            <div>
              <Image
              src='/about2.jpg'
              alt='about1'
              width={333}
              height={444}
              className='w-auto rounded-lg border border-gray-10 mt-12'
              />  
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div className='flex flex-col gap-8 lg:flex-row '>
          
          {/* left side of the section */}
          <div className='flex flex-1 gap-4 lg:gap-8'>
            <div>
              <Image
              src='/about3.jpg'
              alt='about1'
              width={333}
              height={444}
              className='w-auto rounded-lg border border-gray-10 mb-12'
              />  
            </div>
            <div>
              <Image
              src='/about4.jpg'
              alt='about2'
              width={333}
              height={444}
              className='w-auto rounded-lg border border-gray-10 mt-12'
              />  
            </div>
          </div>

          {/* Right Side of the section */}
          
          <div className='flex flex-1 flex-col items-start justify-center'>
            <h1 className='bold-52 capitalize pb-4'>Your Gateway to Pakistan&#039;s Wonders</h1>
            <p className='text-gray-50'>Pakistan is calling! Discover its vibrant history, stunning scenery, and warm hospitality with us as your trusted guide.</p>
            <br />
            <p className='text-gray-50'>Adventure, culture, and serenity—Pakistan has it all. Join us in uncovering the magic of this extraordinary country.</p>
            <div className='flex flex-wrap mt-8'>
              {ABOUT2.map((about)=>(
                <AboutItems
                  key={about.title}
                  title={about.title}
                  icon={about.icon}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
type AboutItems = {
  title:string
  icon:string
}
const AboutItems = ({title, icon}:AboutItems) => {
  return(
    <div className='w-1/2 flex gap-2 mb-4'>
      <Image src={icon} alt='icon'width={20} height={20}/>
      <p className='regular-20'>{title}</p>
    </div>
  )
}