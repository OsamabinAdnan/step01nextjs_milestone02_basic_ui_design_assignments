
import React from 'react'
import styles from '@/components/About/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.mainDiv}>
                {/* 1st Section */}
                <div className={styles.firstSecDiv}>
                    {/* 1st col */}
                    <div className={styles.firstColDiv}>
                        <h1 className={styles.h1ColDiv}>Join Us In Exploring Pakistan</h1>
                        <p className={styles.pColDiv}>Join us in discovering the heart and soul of Pakistan. Let&apos;s create memories as we explore its breathtaking beauty and cultural richness.</p>
                        <p className={styles.pColDiv}>Step into the adventure of a lifetime as we take you across Pakistan&apos;s iconic landmarks and hidden gems. Experience the charm of this extraordinary land with us!</p>

                        <div className={styles.featuresDiv}>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Comfortable Journey</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Luxuries Hotel</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Travel Guide</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Popular Destination</p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd col */}
                    <div className={styles.imagesDiv}>
                        <div>
                            <Image src='/about1.jpg' alt='img' width={333} height={222} className={styles.imageOne}/>
                        </div>
                        <div>
                        <Image src='/about2.jpg' alt='img' width={333} height={222} className={styles.imageTwo}/>
                        </div>
                    </div>
                </div>
                
                {/* 2nd Section */}
                <div className={styles.secondSection}>
                    
                    {/* 1st col */}
                    <div className={styles.imagesDiv}>
                        <div>
                            <Image src='/about3.jpg' alt='img' width={333} height={222} className={styles.imageOne}/>
                        </div>
                        <div>
                        <Image src='/about4.jpg' alt='img' width={333} height={222} className={styles.imageTwo}/>
                        </div>
                    </div>
                    {/* 2nd col */}
                    <div className={styles.firstColDiv}>
                        <h1 className={styles.h1ColDiv}>Your Gateway to Pakistan&apos;s Wonders</h1>
                        <p className={styles.pColDiv}>Pakistan is calling! Discover its vibrant history, stunning scenery, and warm hospitality with us as your trusted guide.</p>
                        <p className={styles.pColDiv}>Adventure, culture, and serenity &#45; Pakistan has it all. Join us in uncovering the magic of this extraordinary country.</p>

                        <div className={styles.featuresDiv}>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Tailored Experiences</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>World Class Hospitality</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Scenic Adventures</p>
                            </div>
                            <div className={styles.featuresDiv2}>
                                <Image src='/checkbox.svg' alt='img' width={24} height={24}/>
                                <p className={styles.pfeaturesDiv2}>Memorable Journeys</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}
