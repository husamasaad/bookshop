import Link from 'next/link';
import React from 'react'
import PortableText from "react-portable-text";


export default function PostBody({ post }) {
  return (
    <div className='blog-post'>
      <PortableText content={post.body} />
    </div>
  )
}