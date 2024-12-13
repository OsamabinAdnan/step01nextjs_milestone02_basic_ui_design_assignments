import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'

export default function Footer() {
  return (
    <>
        <footer className={styles.footerDiv}>
            <div className={styles.mainDiv}>
                <div className={styles.innerDiv}>
                    {/* Logo */}
                    <span className={styles.logoDiv}>
                        <Link href='/' className={styles.logo}>PAKISTAN</Link>
                    </span>
                    <div className={styles.linksDiv}>
                        {/* 1st Row */}
                        <div className={styles.colDiv}>
                            <h1 className={styles.h1ColDiv}>Learn More</h1>
                            <Link href={'/about'} className= {styles.linkColDiv}>About us</Link>
                            <Link href={'/features'} className={styles.linkColDiv}>Destinations</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>Travel Guide</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>Book Now</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>FAQ</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>Privacy Policy</Link>
                        </div>
                        {/* 2nd Row */}
                        <div className={styles.colDiv}>
                            <h1 className={styles.h1ColDiv}>Our Community</h1>
                            <Link href={'#'} className= {styles.linkColDiv}>Terms and Conditions</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>Special Offer</Link>
                            <Link href={'#'} className= {styles.linkColDiv}>Customer Reviews</Link>
                        </div>
                        {/* 3rd Row */}
                        <div className={styles.colDiv}>
                            <h1 className= {styles.h1ColDiv}>Contact Us</h1>
                            <Link href={'#'} className= {styles.linkColDiv}> <span className='font-semibold'>Contact Number:</span> 123-456-7890</Link>
                            <Link href={'#'} className= {styles.linkColDiv}> <span className='font-semibold'>Email Address:</span> info@pakistantravel.com</Link>
                        </div>
                        {/* 4th Row */}
                        <div className='space-y-2'>
                            <h1 className={styles.h1ColDiv}>Social</h1>
                            <div className= {styles.socialColDiv}>
                                <Link href={'#'} className={styles.social}><FaFacebook/></Link>
                                <Link href={'#'} className={styles.social}><BsInstagram/></Link>
                                <Link href={'#'} className={styles.social}><BsTwitterX/></Link>
                                <Link href={'#'} className={styles.social}><BsYoutube/></Link>
                                <Link href={'#'} className={styles.social}><BsLinkedin/></Link>

                            </div>
                            
                        </div>

                    </div>
                    {/* Bottom Line */}
                    <div className={styles.bottomLine}>
                        <p>&#169; Pakistan Tour & Travel | 2024</p>
                    </div>
                </div>
                
            </div>
        </footer>
    </>
  )
}
