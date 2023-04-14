/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FavBooks } from '@/components'
import React, { useState } from 'react'
import { client, urlFor } from '@/lib/client';
import Link from 'next/link';

const Blog = ({ posts }) => {
    

  return (
    <>
    <section className='bg-grad'>
      <div className='container text-center'>
        <h1 className='display-1 text-white mt-5'>مقالات</h1>
      </div>
    </section>
    <section className=''>
      <div className='container'>
          <div className='d-flex flex-wrap gap-5 mt-5'>
          {
            posts.map(post => (
              <div className='g-card' key={post._id}>
                <Link  href={`/posts/${post.slug.current}`}>
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
              </div>
            ))
          }
          </div>

        </div>
    </section>
    </>
  )
}

export default Blog


export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { posts, bannerData }
  }
}