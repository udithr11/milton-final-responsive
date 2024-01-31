import React from "react";
import "../index";
import {
  avatar_logo1,
  avatar_logo2,
  avatar_logo3,
  avatar_logo4,
  avatar_logo5,
  features_last,
} from "../constants";
import Rating from "../utils/Rating";
const FirstPart = () => {
  return (
    
    <div className="fp pt-20 mx-auto items-center bg-red-100">
      <div className="flex justify-center">
        <div className="fp_text1 font-bold flex justify-center bg-gray-100 rounded-full p-1 w-64 text-center">
          An other way to manage time
        </div>
      </div>
      <p className="fp_text2 flex justify-center  text-center leading-tight">
        Your new <br className="mobile_br_1" />
        favorite<br />
         calendar 🗓️ app
      </p>
      <p className="fp_text3 flex justify-center text-center text-gray-500 mt-8 font-medium">
        
        Here you should explain how cool your app
        <br className="mobile_br_1"/> is. Remember, <br className="desktop_br_1"/>  focus on the benefits for
        <br className="mobile_br_1" /> your users, not on the features.
      </p>

      <div className="flex justify-center py-10">
        <button className="bg-slate-800  text-white z-10 font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
          Get Started,it's free
        </button>
      </div>
      <p className="flex justify-center text-xs text-gray-500 -mt-8">
        Free 14 days trials,no credit card needed
      </p>

      <div className=" flex justify-center items-center mt-9">
        <div className=" flex space-x-[-8px]">
            <div className="fp_img"><img
            alt="logo2"
            src={avatar_logo2}
            className=" h-10 w-10 p-[2px] bg-white rounded-full"
          /></div>
          <div className="fp_img"><img
            alt="logo4"
            src={avatar_logo4}
            className=" h-10 w-10 p-[2px] bg-white rounded-full"
          /></div>
          <div className="fp_img"> <img
            alt="logo5"
            src={avatar_logo5}
            className=" h-10 w-10 p-[2px] bg-white rounded-full"
          /></div>
         <div className="fp_img"><img
            alt="logo3"
            src={avatar_logo3}
            className=" h-10 w-10 p-[2px] bg-white rounded-full"
          /></div>
          
                   <div className="fp_img"><img
            alt="logo1"
            src={avatar_logo1}
            className=" first-letter:h-10 w-10 p-[2px] bg-white rounded-full"
          /></div>

          
        </div>

        <div className="ml-3 flex">
          <Rating rating={5} />
          <p className="font-semibold  ml-1">5.0</p>
          <p className="text-slate-600 mt-6 -ml-36 pl-2 text-sm w-44">
            From 200+ happy users
          </p>
        </div>
      </div>

      <img  alt="feature_last" src={features_last} className="flex items-center rounded-2xl border border-slate-200 mt-20 justify-center"/>
      </div>
  )
}

export default FirstPart