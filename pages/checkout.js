import React, { useEffect, useState } from 'react'
import { useStateContext } from '@/context/stateContext';
import { urlFor } from '@/lib/client';
import Link from 'next/link';

const Checkout = () => {

  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, formatPrice } = useStateContext();

  const [loc, setLoc] = useState('الخرطوم')
  
  const [dileveryPrice, setDileveryPrice] = useState(loc === "الخرطوم" ? 1700 : loc === "بحري" ? 2000 : 2500)

  
  
  const onOptionChange = e => {
    setLoc(e.target.value)
  }

  useEffect(() => {
    setDileveryPrice(loc === "الخرطوم" ? 1700 : loc === "بحري" ? 2000 : 2500)
    return
  }, [loc])

  return (
    <>
    <section className='bg-grad-2 checkout-section d-flex flex-column justify-content-center'>
      <div className='container pt-5'>
        <div className='rounded row overflow-hidden contact'>
          <div className='order-2 order-md-1 contact__form col-12 p-4 p-top col-md-6 bg-alt'>
          <form className='w-100'>
                <div className="form-item">
                  <input type="text" name="sender" required />
                  <label>ما اسمك:</label>
                </div>
                <div className="form-item">
                  <input type="tel" name="email" required />
                  <label>رقم الهاتف</label>
                </div>
                <div className="form-item">
                  <input type="tel" name="email" required />
                  <label>رقم الهاتف الاحتياطي</label>
                </div>
                <div className='d-flex justify-content-around'>
                  <div class="d-flex align-items-center gap-2">
                    <input className="form-check-input m-0" type="radio" name="loc" value={"الخرطوم"} id="loc-1" checked={loc === "الخرطوم"} onChange={onOptionChange}/>
                    <label className="form-check-label" htmlFor="loc-1">
                      الخرطوم
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input m-0" type="radio" value={"بحري"} name="loc" id="loc-2" checked={loc === "بحري"} onChange={onOptionChange} />
                    <label className="form-check-label" htmlFor="loc-2">
                      بحري
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input m-0" type="radio" name="loc" value={"أمدرمان"} id="loc-3" checked={loc === "أمدرمان"} onChange={onOptionChange} />
                    <label className="form-check-label" htmlFor="loc-3">
                      أمدرمان
                    </label>
                  </div>
                </div>
                <div className="form-item mt-4">
                  <textarea className="" name="message" required />
                  <label>أوصف لنا مكان الاستلام بدقة</label>
                </div>
                <Link href='/success'>
                  <button className="submit-btn"
                  >تأكيد الطلب</button>
                  </Link>
                <span className='text-center d-block mt-3'>هذا الموقع للتجربة فقط، لن يحدث شيء بعد التأكيد</span>  
          </form>
          </div>
          <div className='order-1 order-md-2 text-white contact__info p-5 col-12 p-top col-md-6 bg-dark gap-4'>
            <h3 className='display-3 mb-3'>الفاتورة النهائية</h3>
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div key={item._id} className='d-flex justify-content-between align-items-center'>
                <p className='heading'>{item.name} × {item.quantity}</p>
                <p className='fw-bold'>SDG {formatPrice(item.price * item.quantity)}</p>
              </div>
          ))}
            <div className='d-flex justify-content-between align-items-center'>
            <p className='heading'>التوصيل</p>
            <p className='fw-bold'>{totalQuantities > 5 ? "مجانًا" : `${formatPrice(dileveryPrice)} SDG`}</p>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-auto'>
            <p className='heading'>المجموع الكلي : </p>
            <p className='fw-bold text-success'>SDG {totalQuantities > 5 ? formatPrice(totalPrice) : formatPrice(totalPrice + dileveryPrice) }</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Checkout