import Link from 'next/link'
import React from 'react'
import { RiPlayFill } from 'react-icons/ri'
import Image from 'next/image'
import styles from './video.module.css'

export default function Video() {
  return (
    <>
      <section className={styles.section}>
            <div className={styles.mainDiv}>
                <div className={styles.innerDiv}>
                    <Image src='/video7.jpg' alt='img' width={1440} height={300} className='rounded'/>
                    <div className={styles.circleDiv}>
                        <Link href={'https://youtu.be/AeSadjRblyM?list=RDQMBt5Z15c8Kck'} target='blank'><RiPlayFill className='w-12 h-12'/></Link>
                    </div>
                    <div className={styles.absoluteDiv}></div>
                </div>
            </div>
      </section>
    </>
  )
}
