import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext} from '@/context/stateContext';
import { Cart } from '.';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className='navbar navbar-expand-md align-items-center'>
      <Link className='navbar-brand text-white' href="/">
        شعار المكتبة
      </Link>
      <div className='nav-container d-flex justify-content-between align-items-center'>
        <ul className='navbar-nav d-none d-md-flex ms-auto gap-5'>
          <li className='nav-item px-md-5'>
            <Link href='/' className='nav-link text-white' aria-current="page">
              الصفحة الرئيسية
            </Link>
          </li>
          <li className='nav-item px-md-5'>
            <Link href='/store' className='nav-link text-white' aria-current="page">
              معرض الكتب
            </Link>
          </li>
          <li className='nav-item px-md-5'>
            <Link href='/blog' className='nav-link text-white' aria-current="page">
              مقالات
            </Link>
          </li>
          <li className='nav-item px-md-5'>
            <Link href='/#contact-us' className='nav-link text-white' aria-current="page">
              تواصل معنا
            </Link>
          </li>
        </ul>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </nav>
  )
}

export default Navbar