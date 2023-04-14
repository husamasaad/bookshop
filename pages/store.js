/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FavBooks } from '@/components'
import React, { useState } from 'react'
import { client, urlFor } from '@/lib/client';
import Link from 'next/link';

const Store = ({ books }) => {

  const [activeCat, setactiveCat] = useState("all")

  const categories = [...new Set(books.map(book => book.cat))];
  
  let filterdBooks = activeCat === "all" ? books : books.filter(book => book.cat === activeCat )
    

  return (
    <>
    <section className='bg-grad'>
      <div className='container text-center'>
        <h1 className='display-1 text-white mt-4'>معرض الكتب</h1>
      </div>
    </section>
    <section className=''>
      <div className='container-fluid'>
      <ul class="nav nav-pills nav-fill justify-content-center px-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => setactiveCat("all")}>الكل</a>
        </li>
        {
          categories.map(clicked => (
            <li key={clicked} className="nav-item">
              <a className="nav-link" aria-current="page" href="#" onClick={() => setactiveCat(clicked)}>{clicked}</a>
            </li>
          ))
        }
      </ul>
          <div className='d-flex justify-content-center flex-wrap gap-5 mt-5'>
          {
            filterdBooks.map(book => (
              <div key={book._id} className='book-card d-flex justify-content-center p-2'>
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
          </div>

        </div>
    </section>
    </>
  )
}

export default Store


export const getServerSideProps = async () => {
  const query = '*[_type == "book"]';
  const books = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { books, bannerData }
  }
}