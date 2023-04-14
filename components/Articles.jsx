/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Articles = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    ]
  }


  return (
    <Slider {...settings}>
      {
        posts.map(post => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <div className="card d-flex flex-column">
              <div className="card-header">
                <img src={urlFor(post.image)} alt="rover" className='img-fluid' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h4>
                  {post.title}
                </h4>
                <div className="user-info pt-2 d-flex align-items-center justify-content-between w-100">
                  <small>{post.publishedAt}</small>
                  <h5>{post.author}</h5>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </Slider>
  )
}

export default Articles