import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { FaExclamationCircle } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { TbTargetArrow } from 'react-icons/tb'
import { Button } from '../ui/button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export default function Navbar() {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.mainDiv}>
                <div className={styles.innerDiv}>
                    {/* Logo */}
                    <div className={styles.logoDiv}>
                        <Link href='/' className={styles.logo}>PAKISTAN</Link>
                    </div>

                    {/* Desktop view */}

                    {/* Pages Links */}
                    <div className={styles.navbarLinksMainDiv}>
                        <div className={styles.linksDiv}>
                            {/* Home */}
                            <span> <AiFillHome/></span>
                            <Link href='/'>HOME</Link>
                        </div>
                        <div className={styles.linksDiv}>
                            {/* about */}
                            <span> <FaExclamationCircle/></span>
                            <Link href='/about'>ABOUT</Link>
                        </div>
                        <div className={styles.linksDiv}>
                            {/* package */}
                            <span> <BiWorld/></span>
                            <Link href='/packages'>PACKAGES</Link>
                        </div>
                        <div className={styles.linksDiv}>
                            {/* destination */}
                            <span> <TbTargetArrow/></span>
                            <Link href='/features'>DESTINATIONS</Link>
                        </div>
                    </div>
                    {/* Button */}
                    <div className={styles.btnDiv}>
                        <Button className={styles.btn}>
                            Login
                        </Button>
                    </div>

                    {/* Mobile View */}
                    <div className={styles.dropDown}>
                        <DropdownMenu>
                            <DropdownMenuTrigger> <GiHamburgerMenu/> </DropdownMenuTrigger>
                            <DropdownMenuContent className={styles.dropDownContent}>
                                {/* HOME */}
                                <DropdownMenuItem className={styles.dropDownItems}> 
                                    <Link href='/'>HOME</Link>
                                </DropdownMenuItem>
                                {/* About */}
                                <DropdownMenuItem className={styles.dropDownItems}> 
                                    <Link href='/about'>ABOUT</Link>
                                </DropdownMenuItem>
                                {/* packages */}
                                <DropdownMenuItem className={styles.dropDownItems}> 
                                    <Link href='/packages'>PACKAGES</Link>
                                </DropdownMenuItem>
                                {/* destination */}
                                <DropdownMenuItem className={styles.dropDownItems}> 
                                    <Link href='/features'>DESTINATIONS</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    
                </div>
                
            </div>
        </section>
    </>
  )
}
