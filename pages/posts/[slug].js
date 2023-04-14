import React, { useState } from 'react'

import { client, urlFor } from '@/lib/client';
import { useStateContext } from '@/context/stateContext';
import Link from 'next/link';
import { PostBody } from '@/components';



const Post = ({ thePost, posts }) => {

  return (
    <>
    <section className='bg-grad'>
      <div className='container text-center'>
        <h1 className='display-1 text-white mt-5'>{thePost.title}</h1>
      </div>
    </section>

    <section>
      <div className='container'>
      <PostBody post={thePost} />
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
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "post"]'
  
  const thePost = await client.fetch(query);
  const posts = await client.fetch(productsQuery);

  return {
    props: { posts, thePost }
  }
}



export default Post