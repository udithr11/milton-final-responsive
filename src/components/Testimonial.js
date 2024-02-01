import React from 'react'
import Rating from '../utils/Rating'
import {avatarT1,avatarT2} from "../constants"

const Testimonial = () => {
  return (
    <div className="features_master  mx-auto     ">
      <div>
        <div className="flex  justify-center">
          <div className="features_text1 font-bold flex justify-center bg-gray-100 rounded-full p-2 w-64 text-center">
          They already love our products 😍          </div>
        </div>

        <p className="features_text2 flex justify-center text-center leading-tight">
        See what our users say<br className="mobile_br_1" /> about us
          
        </p>
      </div>

      <div className='testimonial_main'>
        <div className='testimonial_part flex justify-center  '>
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">No more forgotten appointments</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I'm not the most organized person, but this app has made it so <br/>easy for me to stay on top of things! I love how I can set <br/>reminders and get notifications, and it's really helped me.
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Michel O Neil</p>
              <p className="p-3 text-slate-500">CEO of RoastingOS</p>
            </div>
        </div>
        </div>
        <div className='testimonial_part flex justify-center  '>
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT2} />
            <p className="mt-5 font-semibold">"Saves me time”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          Since I started using this app, I've saved so much time. I no <br/>longer have to manually add appointments or set reminders - <br/>it's all done for me!          
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Annie Devy</p>
              <p className="p-3 text-slate-500">Head of sales</p>
            </div>
        </div>
        </div>
      </div>


      <div className='testimonial_main'>
        <div className='testimonial_part flex justify-center  '>
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">No more forgotten appointments</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I'm not the most organized person, but this app has made it so <br/>easy for me to stay on top of things! I love how I can set <br/>reminders and get notifications, and it's really helped me.
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Michel O Neil</p>
              <p className="p-3 text-slate-500">CEO of RoastingOS</p>
            </div>
        </div>
        </div>
        <div className='testimonial_part flex justify-center '>
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT2} />
            <p className="mt-5 font-semibold">"Saves me time”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          Since I started using this app, I've saved so much time. I no <br/>longer have to manually add appointments or set reminders - <br/>it's all done for me!          
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Annie Devy</p>
              <p className="p-3 text-slate-500">Head of sales</p>
            </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonial