'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { RiHome5Fill } from 'react-icons/ri'
import { FaCircleExclamation } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi'
import { GoGoal } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Check on mount
    checkMobileScreen()

    // Add event listener for resize
    window.addEventListener('resize', checkMobileScreen)

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobileScreen)
  }, [])

  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  const closeMenu = () => {
    setIsOpened(false)
  }

  // Navigation links configuration
  const navLinks = [
    { 
      href: '/', 
      icon: <RiHome5Fill />, 
      label: 'Home' 
    },
    { 
      href: '/about', 
      icon: <FaCircleExclamation />, 
      label: 'About' 
    },
    { 
      href: '/packages', 
      icon: <BiWorld />, 
      label: 'Packages' 
    },
    { 
      href: '/features', 
      icon: <GoGoal />, 
      label: 'Destination' 
    }
  ]

  return (
    <div className="relative">
      <nav className="mx-auto max-w-[1440px] py-2 bg-white top-1 relative">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <div className='hover:scale-110 transition-transform duration-500'>
            <Link 
              href={'/'} 
              className='text-[36px] font-bold cursor-pointer '
            >
              PAKISTAN
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center justify-center gap-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className='flex justify-center items-center gap-2 hover:scale-110 transition-all duration-500'
                > 
                  <span className='w-[20px] h-[20px]'>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Login Button */}
          <div className='flex justify-center items-center'>
            <button 
              className='flex justify-center items-center gap-2 border text-white bg-black px-[16px] py-[6px] rounded-xl hover:bg-green-50'
            >
              <span><FaUser/></span>Login
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <div className=" flex justify-center items-center z-20">
              <button
                className="p-2 bg-gray-200 text-black rounded"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpened ? <ImCross className="text-black" /> : <GiHamburgerMenu className="text-black" />}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu - Positioned Below Navbar */}
      {isOpened && isMobile && (
        <div className="absolute left-0 right-0 top-[110%] bg-white shadow-lg z-10 w-screen rounded">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex justify-center items-center gap-2 hover:scale-110 transition-all duration-500"
                onClick={closeMenu}
              >
                <span className="w-[20px] h-[20px]">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Login Button */}
            <button 
              className='flex justify-center items-center gap-2 border text-white bg-black px-[12px] py-[6px] rounded-xl hover:bg-green-50'
              onClick={closeMenu}
            >
              <span><FaUser/></span>Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}