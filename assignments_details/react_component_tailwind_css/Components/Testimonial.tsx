'use client'
import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri';
import Slider from "react-slick";
import { TESTIMONIALS } from '@/constant';
import Image from 'next/image';

export default function Testimonial() {


  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    responsive:[
      
      {
        breakpoint:1280,
        settings:{
          slidesToShow:2,
        },
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        },
      },
    ]
  };

  return (
    <>
      <section className='max-container padding-container pt-16 bg-slate-10 relative'>
      <h3 className='bold-40 text-center '>Testimonial</h3>
      <p className='text-center max-w-lg m-auto text-gray-30 py-6'>Hear what our travelers have to say about their unforgettable experiences. Their words inspire us to keep delivering exceptional journeys.</p>

      <Slider {...settings}>
        {
          TESTIMONIALS.map((testimonial)=> (
            <TestimonialItems 
            key={testimonial.title}
            title={testimonial.title}
            profession={testimonial.profession}
            URL={testimonial.URL}
            desc={testimonial.desc}/>
            
          ))
        }
      </Slider>
      </section>
    </>
  )
}

type TestimonialItems = {
  title:string;
  profession:string;
  URL:string;
  desc:string;
}

const TestimonialItems = ({title, profession, URL, desc}:TestimonialItems)=>{
  return (
    <div className='mx-4 my-12 px-8 py-12 rounded-md bg-white relative z-10'>
      <span className='text-slate-10 text-9xl absolute -top-4 right-4  -z-10'><RiDoubleQuotesR/></span>
      <p className='text-gray-50 text-center regular-18 '>{desc}</p>
      <div className='flexCenter gap-4 mt-8'>
        <Image 
          src={URL} 
          alt='user' 
          width={55} 
          height={55}
        className='rounded-full '/>
        <div>
          <div className='medium-22'>{title}</div>
          <div className='text-gray-20 regular-16'>{profession}</div>
        </div>
      </div>
    </div>
  )
}