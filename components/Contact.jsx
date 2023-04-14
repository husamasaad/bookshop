import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { MdOutlineAttachEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='rounded row overflow-hidden contact'>
      <div className='contact__form col-12 p-4 p-top col-md-6 bg-alt'>
      <form className='w-100'>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>ما اسمك:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>بريدك الالكتروني:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required />
              <label>أترك لنا رسالة:</label>
            </div>
            <button className="submit-btn">إرسال</button>  
      </form>
      </div>
      <div className='contact__info col-12 p-4 p-top col-md-6 bg-dark gap-4'>
        <div className='d-flex align-items-center gap-5'>
          <GoLocation size={20} className='contact__info--icon' />
          <div>
            <h4>موقعنا</h4>
            <p className='m-0'>الخرطوم، أمدرمان، الثورة الحارة 19</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-5'>
          <BsWhatsapp size={20} className='contact__info--icon' />
          <div>
            <h4>رقم الهاتف</h4>
            <p className='m-0'>00249005671784</p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-5'>
          <MdOutlineAttachEmail size={20} className='contact__info--icon' />
          <div>
            <h4>بريدنا الالكتروني</h4>
            <a className='text-white' href="mailto:husamibnasaad@gmail.com">husamibnasaad@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact