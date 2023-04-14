import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/stateContext'
import { BsBagCheckFill } from 'react-icons/bs'

const Success = () => {

  const { setcartItems, setTotalPrice, setTotalQuantities } = useStateContext()


  useEffect(() => {
    localStorage.clear();
    setcartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, [])

  const [order, setOrder] = useState(null)
  return (
    <section className='bg-grad-2 checkout-section d-flex flex-column justify-content-center'>
      <div className='success-wrapper container d-flex align-items-center justify-content-center'>
        <div className='success p-5'>
          <p className='icon'>
            <BsBagCheckFill />
          </p>
          <h2>شكرًا لتجربتك </h2>
          <p className='email-msg mt-3'>تسرّني جدًا قراءة تعليقاتك على الموقع</p>
          <p className='description'>
            وإذا أعجبك وترغب في استخدامه لمنتجاتك لا تتردد في التواصل معي: <br />
            <a className='email' href='mailto:order@example.com'>
              husamibnasaad@gmail.com
            </a>
          </p>
          <Link href="/">
            <button type='button' className='btn-custom w-100 mt-2' >
              استمر في التسوّق
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Success