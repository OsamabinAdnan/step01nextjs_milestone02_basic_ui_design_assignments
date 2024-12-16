
import React from 'react'
import Link from 'next/link'

export default function error() {
  return (
    <>
    <section className='max-container'>
         {/* Top Heading */}
         <p className='my-20 text-black/50 lg:text-left text-center'>Home / <span className='text-black'>404 Error</span>
        </p>
        <div className='mb-[140px] flex justify-center items-center flex-col gap-20'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <h1 className='text-[110px] font-medium'>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
            </div>
            <Link href='/' className='bg-[#DB4444] px-8 py-4 text-center text-white rounded-[10px] text-[16px] font-medium cursor-pointer hover:bg-[#bb3a3a]'>Back to home page</Link>
        </div>
        

    </section>
    </>
    
    
  )
}
