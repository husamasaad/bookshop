/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Hero = ({ bannerData }) => {

  return (

    <Carousel
      indicators={false} 
      nextIcon= {
        <span 
          aria-hidden="true" 
          className="btn-arrow shadow">
            <BsArrowRight />
        </span>
      }
      prevIcon= {
        <span 
          aria-hidden="true" 
          className="btn-arrow shadow">
            <BsArrowLeft />
        </span>
      }
    >
      {
        bannerData.map(item => (
            <Carousel.Item key={item._id}>
              <div className='banner d-flex flex-column flex-md-row align-items-center justify-content-center text-white'>
                <div className=" d-flex flex-column banner__content">
                    <h1 className='display-1'>{item.book}</h1>
                    <p className='lead py-4'>{item.details}</p>
                    <Link href={`/book/${item.link}`} className='align-self-start'>
                      <button className="btn btn-outline-light btn-lg">
                        اقرأ المزيد
                      </button>
                    </Link>
                </div>
                <div className='text-center banner__image'>
                  <img
                    className='img-fluid'
                    src={urlFor(item.image)}
                    alt="First slide"
                  />
                </div>
              </div>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default Hero

