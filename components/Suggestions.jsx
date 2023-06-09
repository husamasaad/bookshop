/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/lib/client';
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Suggestions = ({ books, cat, curBook }) => {
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

  let FilteredBooks = books.filter(book => book.cat === cat && book.name !== curBook)

  if (FilteredBooks.length < 3) {
    FilteredBooks = books.slice(0 , 8).filter(book => book.name !==  curBook)
  }

  return (
    <Slider {...settings}>
      {
        FilteredBooks.map(book => (
          <div key={book._id} className='book-card d-flex justify-content-center p-2 mx-2 my-5'>
            <div class="book d-flex flex-column justify-content-center gap-5 text-center overflow-hidden">
              <div className='ps-3'>
                <h2>{book.name}</h2>
                <p>{book.author}</p>
                <p className='text-danger fw-bold lead'>SDG {book.price}</p>
              </div>
              <div className='ps-3'>
                <Link href={`/book/${book.slug.current}`}>
                  <button className="btn btn-primary text-white btn-lg">
                    اقرأ المزيد
                  </button>
                </Link>
              </div>
              <div class="cover">
                  <img src={urlFor(book.image[0])} className='w-100 d-block'/>
              </div>
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default Suggestions