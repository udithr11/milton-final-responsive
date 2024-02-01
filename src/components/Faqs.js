import React from 'react'
import Accordion from '../utils/Accordian'
import {logo_last} from '../constants'

const Faqs = () => {
  return (
    <div className="features_master mx-auto     ">
      <div>
        <div className="flex  justify-center">
          <div className="features_text1 font-bold flex justify-center bg-gray-100 rounded-full p-2 w-52 text-center">
            Our main features 🦸🏼
          </div>
        </div>

        <p className="features_text2 flex justify-center text-center leading-tight">
          Discover your new <br className="mobile_br_1" />
          superpowers
        </p>
      </div>


      <div className="flex justify-center items-center">
        <Accordion />
      </div>

      <div>
        <div className="flex mt-20 justify-center">
          <div className="features_text1  font-bold flex justify-center bg-gray-100 rounded-full p-2 w-52 text-center">
          Last call Baby! 🚀          </div>
        </div>

        <p className="features_text2  flex justify-center text-center leading-tight">
        Ready to start?
        </p>
        <p className="fp_text3 flex justify-center text-center text-gray-500 mt-8 font-medium">
        
        Here is your last chance to explain<br className="mobile_br_1"/> how cool your app is. Focus<br className="desktop_br_1"/>  on <br className="mobile_br_1"/>the benefits for your users, not on the<br className="mobile_br_1"/> features. 
        
      </p>
      <div className="flex justify-center py-10">
        <button className="bg-slate-800  text-white  font-bold py-4 px-6 rounded-xl transition-transform   hover:shadow-md hover:scale-110">
          Get Started,it's free
        </button>
      </div>
      
      </div>
      <div className="flex items-center justify-center -mt-6">
  <div className="mx-auto items-center justify-center ">
    <div
      style={{ fontSize: "16px" }}
      className="font-bold bg-orange-200 ml-20  mt-5 text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm"
    >
      <p className="text-left">
        I never missed a call again, the AI-<br/>driven feature is a game changer for me!
      </p>
      <p className="text-neutral-600 mt-2 text-left">Adam, Solo founder</p>
    </div>

    <img alt="avatarLogo6" src={logo_last} className="h-20 w-20" />
  </div>
</div>
<div className='about_us w-[85%] mx-auto items-center h-32 '></div>

      </div>
  )
}

export default Faqs