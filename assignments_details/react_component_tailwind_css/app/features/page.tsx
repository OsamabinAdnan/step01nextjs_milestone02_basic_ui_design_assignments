'use client'
import React from 'react'
import Slider from "react-slick";
import { FEATURES } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine } from "react-icons/ri";

export default function Features() {

  // For Slider Arrows

  interface ArrowProps {
    onClick: () => void;
  }

  const NextArrow = (props:ArrowProps) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className='text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 right-[-2%] hover:bg-slate-10 z-10'><RiArrowRightSLine/></div>
    )
  }
  
  const PrevArrow = (props:ArrowProps) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className='text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 left-[-2%] hover:bg-slate-10 z-10'><RiArrowLeftSLine/></div>
    )
  }


  type FeaturedItem = {
    title:string
    URL: string
    des:string
  }
  const FeaturedItem = ({title, URL, des}:FeaturedItem) => {
    return (
      <div className='group mx-3 overflow-hidden border border-slate-200'>
        <div className='overflow-hidden relative flex justify-center items-center'>
          <Image
            src={URL}
            alt='location-images'
            width={600}
            height={400}
            className='hover:scale-105 hover:rotate-2 transition-all duration-700 featured-images'
          />
          <Link href={'/'} className='absolute top-1/2 left-1/2 text-[55px] h-14 w-14 hover:text-black bg-white flexCenter rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500'><RiSearchLine /></Link>
        </div>
        <div className='px-5 py-3 bg-white'>
          <div className='capitalize text-[24px] font-[600]'>{title}</div>
          <div className='text-gray-50 my-2 text-[16px] font-[600]'>{des}</div>
        </div>
      </div>
    )
  }

  // For Slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    nextArrow:<NextArrow onClick={()=>{}}/>,
    prevArrow:<PrevArrow onClick={()=>{}}/>,
    responsive:[
      {
        breakpoint:1980,
        settings:{
          slidesToShow:3,
        },
      },
      {
        breakpoint:1636,
        settings:{
          slidesToShow:3,
        },
      },
      {
        breakpoint:1280,
        settings:{
          slidesToShow:3,
        },
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
        },
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:2,
        },
      },
      {
        breakpoint:640,
        settings:{
          slidesToShow:1,
        },
      },
    ]
  };

  return (
    <>
      <section className='max-container padding-container bg-slate-10 pt-24 pb-12 '>
        <div className='mx-auto w-[90%]'>
          <h3 className='bold-40 text-center '>Featured Destinations</h3>
          <p className='text-center max-w-lg m-auto text-gray-30 py-6'>From serene valleys to historic landmarks, our featured destinations bring you the best of Pakistan. Discover the magic that awaits!</p>
          <div className='pt-16'>
            <Slider {...settings}>
              {
                FEATURES.map((feature)=>(
                  <FeaturedItem
                    title={feature.title}
                    key={feature.title}
                    URL={feature.URL}
                    des={feature.des}

                  />
                ))
              }
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
