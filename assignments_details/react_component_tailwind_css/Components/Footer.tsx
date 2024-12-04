import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
      <>
        <footer className='flexCenter mb-[20px] pt-20 border border-t-2'>
          <div className='padding-container max-container flex w-full flex-col gap-14'>
            <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
              <Link href='/' className='mb-10 bold-40 logo-image '>PAKISTAN</Link>
              <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
                {/* Footer Links */}
                {
                FOOTER_LINKS.map((col)=>(
                  <FooterColumn
                    title={col.title} // Footer Title
                    key={col.title}
                    >
                      <ul className='flex flex-col gap-4 regular-18 text-black '>
                        {col.links.map((link)=>(
                          // Footer links
                          <Link href="/" key={link}>
                            {link}
                          </Link>
                        ))}
                      </ul>
                    </FooterColumn>
                ))
                }
                {/* Footer Contact Info */}
                <div>
                  <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.links.map((link)=>(
                      <Link href="/" key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                        <p className='medium-14'>{link.label}:</p> <p className='medium-14'>{link.value}</p>
                      </Link>
                    ))}
                  </FooterColumn>
                </div>
                {/* Footer Social Links */}
                <div className='flex'>
                  <FooterColumn title={SOCIALS.title}>
                    <ul className='flex gap-4'>
                      {
                        SOCIALS.links.map((link)=>(
                          <Link href="/"
                          key={link}>
                            <Image src={link} alt='logo' width={22} height={22}/>
                          </Link>
                        ))
                      }
                    </ul>
                  </FooterColumn>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center max-container '>
              <h4 className='bold-22 hover:text-green-50 text-center'>&#169; Pakistan Travel | 2024</h4>
            </div>
            
          </div>

        </footer>
      </>
  )
}

type FooterColumn = {
  title:string,
  children:React.ReactNode,
}

const FooterColumn = ({title, children}:FooterColumn) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-22 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}