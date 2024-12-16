'use client'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function WishList() {
  const route = useRouter()
  return (
    <>
        <section className='max-container'>
        
        <div>
          {/* Top Heading */}
          <div className='flex justify-between items-center sm:flex-row flex-col gap-4 my-20'>
            <p className=' text-black/50 lg:text-left text-center'>Home / <span className='text-black'>Wishlist</span></p>
            <Button onClick={()=>route.push('/cart')} className='px-4 py-2 border-2 rounded'>Move All To Bag</Button>
          </div>


          {/* Items list */}
          <div className='grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-6'>
            {/* 1st Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/bag.jpg'width={178} height={129} alt='bag'/></Link>
                <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div>
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/icon-delete.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>Gucci duffle bag</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$960</span>
                  <span className='text-[16px] font-medium line-through text-black/50'>$1160</span>
                </p>
              </div>
            </div>

             {/* 2nd Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/gammer.jpg'width={178} height={129} alt='bag'/></Link>
                {/* <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div> */}
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/icon-delete.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>Gucci duffle bag</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$1960</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
            </div>

              {/* 3rd Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/console.jpg'width={178} height={129} alt='bag'/></Link>
                {/* <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div> */}
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/icon-delete.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>Gucci duffle bag</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$550</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
            </div>

            {/* 4th Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/jacket.jpg'width={178} height={129} alt='bag'/></Link>
                {/* <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div> */}
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/icon-delete.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>Gucci duffle bag</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$750</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
            </div>
          </div>

          {/* Title and Button */}

          <div className='mt-[80px]'>
            
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-6'>
                <div className='w-5 h-10 bg-[#db4444] rounded'/>
                <h3 className=' text-lg'>Just For You</h3>
              </div>
              <div><Button className='px-8 py-4 border border-black/30  rounded'>See All</Button></div>
            </div>
          </div>

          {/* 2nd Item list */}

          <div className='grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-[60px] mb-[140px]'>
            {/* 1st Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/laptop.jpg'width={178} height={129} alt='img'/></Link>
                <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div>
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/quick-view.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>ASUS FHD Gaming Laptop</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$960</span>
                  <span className='text-[16px] font-medium line-through text-black/50'>$1160</span>
                </p>
              </div>
              <div className='flex gap-2 justify-start'>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <span className='text-[14px] text-black/50 font-semibold'>(65)</span>
              </div>
            </div>

            {/* 2nd Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/IPS LCD Gaming Monitor.jpg'width={178} height={129} alt='img'/></Link>
                {/* <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div> */}
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/quick-view.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>IPS LCD Gaming Monitor</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$1160</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
              <div className='flex gap-2 justify-start'>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <span className='text-[14px] text-black/50 font-semibold'>(65)</span>
              </div>
            </div>
            
            {/* 3rd Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/HAVIT HV-G92 Gamepad.jpg'width={178} height={129} alt='img'/></Link>
                <div className='absolute top-2 left-2 bg-[#00FF66]  text-white px-3 py-1 rounded text-xs font-poppins'>NEW</div>
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/quick-view.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>HAVIT HV-G92 Gamepad</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$560</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
              <div className='flex gap-2 justify-start'>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <span className='text-[14px] text-black/50 font-semibold'>(65)</span>
              </div>
            </div>

            {/* 4th Item */}
            <div className='flex flex-col flex-wrap relative gap-4 mx-auto w-full max-w-[340px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]'>
              <div className='relative w-full h-[270px] flex items-center justify-center bg-[#f5f5f5] rounded-t'>
                <Link href={'#'} ><Image src='/AK-900 Wired Keyboard.jpg'width={178} height={129} alt='img'/></Link>
                {/* <div className='absolute top-2 left-2 bg-[#db4444]  text-white px-3 py-1 rounded text-xs font-poppins'>-35%</div> */}
                <div className='absolute top-2 right-2 bg-white px-2 py-2 rounded-full cursor-pointer'>
                  <Image src='/quick-view.png'width={24} height={24} alt='delete'/>
                </div>
              
                <Link className='flex gap-2 bg-black text-white w-full justify-center py-2 absolute bottom-0 left-0 rounded-b font-poppins text-xs' href='/cart'>
                  <Image src='/cart1.png' alt='cart' width={24} height={24}/>
                  Add to Cart
                </Link>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className=' text-[16px] font-medium'>AK-900 Wired Keyboard</h1>
                <p className='flex gap-2'>
                  <span className='text-[16px] font-medium text-[#db4444]'>$200</span>
                  {/* <span className='text-[16px] font-medium line-through text-black/50'>$1160</span> */}
                </p>
              </div>
              <div className='flex gap-2 justify-start'>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <Star  radius={24}  fill='gold'  className='text-yellow-400'/>
                <span className='text-[14px] text-black/50 font-semibold'>(65)</span>
              </div>
            </div>
          </div>

        </div>
        
          



        </section>
    </>
  )
}

