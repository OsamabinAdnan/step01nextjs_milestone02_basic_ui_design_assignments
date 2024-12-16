
import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function TopHeader() {
  return (
	<div className='w-full bg-black items-center justify-between md:flex hidden p-3'>
		<div className='max-w-7xl mx-auto flex items-center justify-center'>
			<p className='text-white text-[16px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
				<span className='text-[16px] font-bold underline ml-2'>Shop Now</span>
			</p>
		</div>
		<p className='text-white flex items-center gap-2 mr-6 text-[16px]'>English <span><ChevronDown/></span></p>

	</div>
  )
}
