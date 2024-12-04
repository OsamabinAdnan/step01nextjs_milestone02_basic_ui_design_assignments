'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NAV_LINKS } from '../constant'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'
import { RiHome5Fill } from 'react-icons/ri'
import { FaCircleExclamation } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi'
import { GoGoal } from 'react-icons/go'


export default function Navbar() {
  const [menuOpened, SetmenuOpened] =useState(false)
  const toggleMenu =() => {
    SetmenuOpened(!menuOpened)
  }
  return (
    <>
        <nav className='flex items-center justify-between mx-auto max-w-[1440px] px-[40px] z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]  '>
          <div>
            <Link href={'/'} className=''>
              <span className=" bg-no-repeat bg-cover bg-clip-text logo-image text-[36px] font-bold leading-[120%] text-transparent">PAKISTAN.</span> 
            </Link>
          </div>
          <div className='lg:flex justify-between items-center gap-[24px] hidden group'>
            
              <Link href={'/'} className='flex justify-center items-center gap-2 hover:scale-110 transition-all duration-500'> 
              <span className='w-[20px] h-[20px]'><RiHome5Fill />  </span>Home</Link>
            
            
              <Link href={'/about'} className='flex justify-center items-center gap-2  hover:scale-110 transition-all duration-500'> 
              <span className='w-[20px] h-[20px]'><FaCircleExclamation />  </span>About</Link>
            
              <Link href={'/packages'} className='flex justify-center items-center gap-2  hover:scale-110 transition-all duration-500'> 
              <span className='w-[20px] h-[20px]'><BiWorld /></span>Packages</Link>

              <Link href={'/packages'} className='flex justify-center items-center gap-2  hover:scale-110 transition-all duration-500'> 
              <span className='w-[20px] h-[20px]'><GoGoal /></span>Destination</Link>
          </div>
          <div className='hidden lg:block'>
            <button className='flex justify-center items-center gap-2 border text-white bg-black px-[12px] py-[6px] rounded-xl hover:bg-green-50'><span><FaUser/></span>Login</button>
           
          </div>

          {/* Desktop */}
          {/* <ul className='hidden lg:flex h-full'>
            {
              NAV_LINKS.map((link)=>(
                <Link
                  href={link.href}
                  key={link.key}
                  className='flex mx-8 relative text-gray-50 gap-2 group'> 
                  <Image 
                    src={link.iconURL}
                    width={20}
                    height={20}
                    alt={link.label}
                    className='h-auto w-4'
                    />
                  {link.label}
                  <span className='inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full'></span>
                </Link>
              ))
            }
          </ul> */}

          {/* Mobile */}
          { !menuOpened ?  
              (<Image
              src='menu.svg'
              alt='menu-icon'
              width={28}
              height={28}
              className='lg:hidden inline-block cursor-pointer'
              onClick={toggleMenu}
              />
              ) : (
                <Image
                  src='close.svg'
                  alt='close-icon'
                  width={28}
                  height={28}
                  className='lg:hidden inline-block cursor-pointer'
                  onClick={toggleMenu}
                />)
          }

            <ul className={ menuOpened ? 
              ('flex flex-col justify-center p-12 fixed top-12 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md')
              :
              ('flex flex-col justify-center p-12 fixed top-12 right-[-130%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md')}>
            {
              NAV_LINKS.map((link)=>(
                <Link
                  href={link.href}
                  key={link.key}
                  className='flex m-6 relative text-gray-50 gap-1 group'> 
                  <Image 
                    src={link.iconURL}
                    width={20}
                    height={20}
                    alt={link.label}
                    className='h-auto w-4'
                    />
                  {link.label}
                  <span className='inline-block absolute h-[2px] w-0 bg-black -bottom-2 transition-all duration-500 group-hover:w-full'></span>
                </Link>
              ))
            }
            </ul>
        </nav>
    </>
    



  )
}
