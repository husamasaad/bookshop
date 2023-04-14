import React from 'react'
import { MdDeliveryDining, MdDiscount } from 'react-icons/md'
import { BsCashStack } from 'react-icons/bs'

const Features = () => {
  return (
    <div className='featuers d-flex flex-column flex-md-row justify-content-around align-items-center gap-5 text-center'>
      <div className='featuers__card p-4 rounded shadow'>
          <MdDeliveryDining size={100} />
        <p className='fs-2 fw-bold text-dark'>
          توصيل لكل مناطق الخرطوم
        </p>
      </div>
      <div className='featuers__card p-4 rounded shadow'>
          <BsCashStack size={100} />
        <p className='fs-2 fw-bold text-dark'>
          الدفع عند الاستلام
        </p>
      </div>
      <div className='featuers__card p-4 rounded shadow'>
          <MdDiscount size={100} />
        <p className='fs-2 fw-bold text-dark'>
          عروض شهرية متجددة
        </p>
      </div>
    </div>
  )
}

export default Features