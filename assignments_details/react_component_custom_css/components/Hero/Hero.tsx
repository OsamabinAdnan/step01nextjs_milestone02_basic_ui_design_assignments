import React from 'react'
import styles from './Hero.module.css'
import { Button } from '../ui/button'
import { MdPlace, MdTravelExplore } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'
import { Hotel, ShoppingBagIcon } from 'lucide-react'

export default function Hero() {
  return (
    <>
        <section className={styles.bgImage}>
            <div className={styles.mainDiv}>
                <div className={styles.innerDiv}>
                    <div className={styles.parent}>
                        <h1 className={styles.h1Div}>Explore Pakistan With Us</h1>
                        <p className= {styles.pDiv}>Discover the breathtaking beauty, rich culture, and hidden gems of Pakistan like never before. From majestic mountains to vibrant cities, let us guide you on an unforgettable journey through this incredible land.</p>
                    </div>
                    <div>
                        <Button className={styles.btn}><span><MdTravelExplore/></span>Travel Plan</Button>
                    </div>
                    <div>
                        <h1 className={styles.h1Div2}>Explore the key points</h1>
                    </div>
                    <div className={styles.btnDiv}>
                        <Button className={styles.btn2}><span><MdPlace/></span>Places</Button>
                        <Button className={styles.btn2}><span><BiFoodMenu/></span> Restaurants</Button>
                        <Button className={styles.btn2}><span><Hotel/></span>Hotels</Button>
                        <Button className={styles.btn2}><span><ShoppingBagIcon/></span> Shopping</Button>
                    </div>
                </div>
                
            </div>

        </section>
    </>
    
  )
}
