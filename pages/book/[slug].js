/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '@/lib/client';
import { useStateContext } from '@/context/stateContext';
import Link from 'next/link';
import { FavBooks, Suggestions } from '@/components';

const BookDetails = ({ books, theBook }) => {

  const { decQty, incQty, qty, onAdd, setShowCart, formatPrice } = useStateContext();

  return (
    <>

    <section className='bg-grad-2'>
    <div className='container py-5'>
      <div className='banner d-flex gap-5 flex-column flex-md-row align-items-center justify-content-center text-white'>
        <div className=" d-flex flex-column banner__content">
            <h1 className='display-1'>{theBook.name}</h1>
            <p className='lead pt-2'>تأليف: {theBook.author}</p>
            <p className='lead py-4'>{theBook.details}</p>
            <div className='d-flex flex-column align-items-center gap-5 flex-md-row justify-content-around'>
            <p className=" d-flex gap-3 align-items-center m-0">
                <span className="d-block btn btn-sm btn-secondary p-3 shadow" onClick={decQty}><AiOutlineMinus /></span>
                <span className="d-block fs-3 p-3">{qty}</span>
                <span className="d-block btn btn-sm btn-success p-3 shadow" onClick={incQty}><AiOutlinePlus /></span>
              </p>
              <button className="btn-custom text-white btn-lg" onClick={() => onAdd(theBook, qty)}>
                أضف إلى السلة
              </button>
            </div>
        </div>
        <div className='text-center banner__image'>
          <img
            className='img-fluid'
            src={urlFor(theBook.image[0])}
            alt="First slide"
          />
        </div>
      </div>
    </div>
    </section>

    <section className='bg-white'>
        <div className='container text-center'>
          <div >
            <div className="gradient mb-4"></div>
            <h1 className='display-4'> كتب أخرى قد تعجبك</h1>
          </div>
          <div className='py-5 mb-3'>
            <Suggestions books={books} cat={theBook.cat} curBook={theBook.name} />
          </div>
          <Link href="/store">
            <button className="btn btn-outline-dark">
                  عُد إلى معرض الكتب
            </button>
          </Link>
        </div>
      </section>
    
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "book"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "book" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "book"]'
  
  const theBook = await client.fetch(query);
  const books = await client.fetch(productsQuery);

  return {
    props: { books, theBook }
  }
}

export default BookDetails