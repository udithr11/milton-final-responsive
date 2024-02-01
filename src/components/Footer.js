import React from "react";
import { twitter, linkedin, fb } from "../constants";

const Footer = () => {
  return (
    <div className="bg-gray-300 ">
      <div className="flex justify-center ">
        <div className="w-[80%]  mx-auto  ">
          <div className=" mt-3 flex  cursor-pointer ">
          <div className="flex items-center ">
        <svg className="w-6 h-6 bg-gray-100 rounded-md" viewBox="0 0 24 24">
          <rect className="rounded-md" />
          <path d="M9.76795 7C10.5378 5.66666 12.4623 5.66667 13.2321 7L17.1292 13.75C17.899 15.0833 16.9367 16.75 15.3971 16.75H7.60288C6.06328 16.75 5.10103 15.0833 5.87083 13.75L9.76795 7Z"></path>
        </svg>
        <div className="mx-1 font-bold">Milton</div>
      </div>
          </div>
          <p className="text-gray-500 mt-2">
            A short text explaining <br />
            why my startup is so cool
          </p>
          <p className="text-gray-500 mt-2">© My super start-up</p>
          <div className="flex">
            <img className="my-4" src={twitter} alt="twi" />
            <img className="my-4 mx-3" src={fb} alt="twi" />
            <img className="my-4" src={linkedin} alt="twi" />
            <div className=" ml-auto">
              <p className=" text-end text-gray-500">
                All rights will be received by this Sunday!
              </p>
              <p className=" text-end text-gray-500">Created by John Kattadi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
