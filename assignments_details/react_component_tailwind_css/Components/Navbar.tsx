'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NAV_LINKS } from '../constant'
import Image from 'next/image'
import Button from './Button'


export default function Navbar() {
  const [menuOpened, SetmenuOpened] =useState(false)
  const toggleMenu =() => {
    SetmenuOpened(!menuOpened)
  }
  return (
    <>
        <nav className='lg:flexCenter flexBetween max-container px-12 z-30 py-2 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]'>
          <Link href={'/'} className='bold-32 text-transparent'>
            <span className='logo-image '>PAKISTAN.</span>
          </Link>

          {/* Desktop */}
          <ul className='hidden lg:flex h-full'>
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
          </ul>
          <div className='hidden lg:block'>
            <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_rounded'
            ></Button>
          </div>

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
