// Production Section top header with timer

import React from 'react'



export default function SectionHeader({heading, subHeading}:{
    heading:string; subHeading:string
}) {
  return (
    <div>
        <div className='flex items-center gap-6'>
            <div className='w-5 h-10 bg-[#db4444] rounded'/>
            <h3 className='text-brandPrimary md:text-lg text-sm'>{subHeading}</h3>
        </div>
        <h1 className='md:text-4xl text-2xl font-semibold mt-2'>{heading}</h1>
    </div>
  )
}
