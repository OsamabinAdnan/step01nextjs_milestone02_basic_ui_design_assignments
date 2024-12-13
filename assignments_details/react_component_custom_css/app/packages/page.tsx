import { Button } from '@/components/ui/button'
import { Timer } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import styles from '@/components/Packages/packages.module.css'

export default function Packages() {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.mainDiv}>
                <div className={styles.textDiv}>
                    <h1 className={styles.textDivh1}>Our Packages</h1>
                    <p className={styles.textDivp}>Our packages offer the perfect blend of adventure and relaxation. Let us take care of the details while you enjoy the experience.</p>
                </div>
                
                <div className={styles.picDiv}>
                    {/* 1st pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/hsfm.png' alt='image' height={400} width={600}/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Northern Gems&#58; Hunza, Skardu, and Fairy Meadows</h1>
                            <p className={styles.picDiv2p}>$1,200 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Discover the captivating beauty of Northern Pakistan with visits to Hunza, Skardu, and the serene Fairy Meadows. This package offers a perfect mix of adventure, nature, and culture.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>8 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 2nd pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/punjab.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Majestic Punjab&#58; Lahore, Multan, and Islamabad</h1>
                            <p className={styles.picDiv2p}>$850 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Dive into the rich history and culture of Punjab with a visit to Lahore&apos;s Badshahi Mosque, Multan&apos;s Sufi shrines, and the modern capital city of Islamabad. Enjoy the vibrant local bazaars, and historical architecture.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>6 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 3rd pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/baloch.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Coastal Bliss&#58; Gwadar, Hingol National Park, Kund Malir</h1>
                            <p className={styles.picDiv2p}>$700 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Experience the untouched beauty of Pakistan&apos;s southern coastline. Marvel at the pristine beaches of Kund Malir, the Hingol National Park&apos;s majestic rock formations, and the cultural charm of Gwadar.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>4 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 4th pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/malamjabba.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Swat Retreat&#58; Mingora, Malam Jabba, and Kalam</h1>
                            <p className={styles.picDiv2p}>$650 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Enjoy a peaceful escape to Swat Valley, known as the &apos;Switzerland of the East&apos;. This package includes skiing at Malam Jabba, lush green landscapes in Kalam, and cultural exploration in Mingora.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>5 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                     {/* 5th pic */}
                     <div className={styles.picDiv1}>
                        <Image src='/sindh.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Sindh Splendor&#58; Karachi, Hyderabad, and Mohenjo-Daro</h1>
                            <p className={styles.picDiv2p}>$900 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Discover the vibrant culture of Sindh, from Karachi&apos;s bustling streets to the ancient ruins of Mohenjo-Daro. This journey is a perfect blend of history, art, and coastal beauty. What you are waiting for?</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>6 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 6th pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/kashmir.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Dreamy Kashmir&#58; Neelum Valley, Muzaffarabad, Rawalakot</h1>
                            <p className={styles.picDiv2p}>$950 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Explore the enchanting valleys of Kashmir, filled with lush greenery, clear rivers, and mesmerizing mountain views. Highlights include Toli Pir, Banjosa Lake, and cultural experiences in Muzaffarabad.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>6 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 7th pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/islamabad.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Capital to Hills&#58; Islamabad, Murree, Patriata</h1>
                            <p className={styles.picDiv2p}>$500 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Take a short & refreshing getaway to Pakistan&apos;s capital city & the nearby hill stations. Explore Islamabad&apos;s serene spots, Murree&apos;s charming weather, & Patriata&apos;s cable car rides.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>3 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* 8th pic */}
                    <div className={styles.picDiv1}>
                        <Image src='/islamabad.png' alt='image' height={400} width={600} className=''/>
                        <div className={styles.picDiv2}>
                            <h1 className={styles.picDiv2h1}>Colorful Chitral&#58; Kalash Valley and Beyond</h1>
                            <p className={styles.picDiv2p}>$1100 per person</p>
                        </div>
                        <div className={styles.desDiv}>
                            <p className={styles.desDivP}>Celebrate the vibrant traditions of the Kalash people and explore the natural beauty of Chitral. This package includes cultural immersion, treks, and visits to local landmarks.</p>
                        </div>
                        <div className={styles.bottomDiv}>
                            <div className={styles.bottomDivInner}>
                                <Timer className={styles.Timer}/>
                                <p className={styles.bottomDivP}>3 Days</p>
                            </div>
                            <div>
                                <Button className={styles.btn}>Book Now</Button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </section>
    </>
  )
}
