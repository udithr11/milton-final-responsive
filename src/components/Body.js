import React from 'react'
import Faqs from './Faqs'
import Features from './Features'
import FirstPart from './FirstPart'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const Body = () => {
  return (
    <div>
        <FirstPart/>
        <div className='w-[85%] mx-auto items-center h-48 bg-red-100'></div>
        <Features/>
        <div className='w-[85%] mx-auto items-center h-48 bg-red-100'></div>
        <Testimonial/>
        <div className='w-[85%] mx-auto items-center h-48 bg-red-100'></div>
        <Pricing/>
        <div className='w-[85%] mx-auto items-center h-48 bg-red-100'></div>
        <Faqs/>
    </div>
  )
}

export default Body