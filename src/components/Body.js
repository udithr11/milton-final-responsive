import React from 'react'
import Faqs from './Faqs'
import Features from './Features'
import FirstPart from './FirstPart'
import Footer from './Footer'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const Body = () => {
  return (
    <div>
     
        <FirstPart/>
        <div className='features w-[85%] mx-auto items-center h-48 '></div>
        <Features/>
        <div className='testimonial w-[85%] mx-auto items-center h-48 '></div>
        <Testimonial/>
        <div className='pricing w-[85%] mx-auto items-center h-48 '></div>
        <Pricing/>
        <div className='faqs w-[85%] mx-auto items-center h-48 '></div>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Body