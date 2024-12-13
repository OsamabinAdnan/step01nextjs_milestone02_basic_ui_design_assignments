import Image from 'next/image'
import React from 'react'
import styles from '@/components/Features/features.module.css'

export default function Features() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.mainDiv}>
          {/* Heading */}
          <div className={styles.headingDiv}>
              <h1 className={styles.h1Heading}>Featured Destinations</h1>
              <p className={styles.pHeading}>From serene valleys to historic landmarks, our featured destinations bring you the best of Pakistan. Discover the magic that awaits!</p>
          </div>
          {/* Images */}
          <div className={styles.imageDiv}>
            {/* 1 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/hunza.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Hunza Valley</p>
            </div>
            {/* 2 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/skardu.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Skardu Valley</p>
            </div>
            {/* 3 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/naran.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Naran Valley</p>
            </div>
            {/* 4 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/nathiagali.jpeg' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Nathia Gali</p>
            </div>
            {/* 5 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/fairy.jpg' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Fairy Meadows</p>
            </div>
            {/* 6 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/Kaghan.png' alt='img' width={322} height={222}/>
                <p className={styles.imageInnerDivP}>Kaghan Valley</p>
            </div>
            {/* 7 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/chitral.png' alt='img' width={322} height={222}/>
                <p className={styles.imageInnerDivP}>Chitral Valley</p>
            </div>
            {/* 8 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/ratti.png' alt='img' width={322} height={222}/>
                <p className={styles.imageInnerDivP}>Ratti Gali Lake</p>
            </div>
            {/* 9 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/shandur.png' alt='img' width={322} height={222}/>
                <p className={styles.imageInnerDivP}>Shandur Pass</p>
            </div>
            {/* 10 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/desoi.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Desoi National Park</p>
            </div>
            {/* 11 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/ziarat.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Ziarat Valley</p>
            </div>
            {/* 12 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/neelam.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Neelum Valley</p>
            </div>
            {/* 13 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/malir.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Kund Malir Beach</p>
            </div>
            {/* 14 */}
            <div className={styles.imageInnerDiv}>
                <Image src='/hingol.png' alt='img' width={333} height={222}/>
                <p className={styles.imageInnerDivP}>Hingol National Park</p>
            </div>
          
          </div>
        </div>
          
      </section>
    </>
  )
}
