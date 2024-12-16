import {  Camera, Gamepad2, Headphones, MonitorCheck, Smartphone, Watch } from 'lucide-react'
import React from 'react'


export default function Categories() {
  return (
    <>
        <div className='max-w-[1440px] h-auto mx-auto'>
            <div className='flex justify-between items-center gap-[30px] lg:flex-row flex-col'>
                {/* 1st picture */}
                <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-8 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><Smartphone  className='group-hover:text-white' width={56} height={56}/></span>
                        <h1 className='group-hover:text-white'>Phones</h1>
                    </div>
                </div>
                {/* 2nd picture */}
                <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-4 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><MonitorCheck  className='group-hover:text-white ' width={56} height={56}/></span>
                        <h1 className='group-hover:text-white'>Computers</h1>
                    </div>
                </div>
                 {/* 3rd picture */}
                 <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-4 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><Watch  className='group-hover:text-white' width={48} height={48}/></span>
                        <h1 className='group-hover:text-white'>Watches</h1>
                    </div>
                </div>
                 {/* 4th picture */}
                 <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-4 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><Camera  className='group-hover:text-white' width={56} height={56}/></span>
                        <h1 className='group-hover:text-white'>Camera</h1>
                    </div>
                </div>
                 {/* 5th picture */}
                 <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-4 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><Headphones  className='group-hover:text-white' width={56} height={56}/></span>
                        <h1 className='group-hover:text-white'>Headphones</h1>
                    </div>
                </div>
                 {/* 6th picture */}
                 <div className='group  '>
                    <div className='flex flex-col justify-center items-center gap-4 border-[1px] border-black/50 rounded   group-hover:bg-[#db4444] group-hover:border-none p-4 w-[170px] h-[145px]'>
                        <span className='max-w-[56px] max-h-[56px]'><Gamepad2  className='group-hover:text-white' width={56} height={56}/></span>
                        <h1 className='group-hover:text-white'>Gaming</h1>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
