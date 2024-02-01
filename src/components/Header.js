import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";


function Header() {

    const [isNavOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
      setNavOpen(!isNavOpen);
    };
  return (
    <div className="w-full h-[80px] custom_colour_full flex  justify-center  items-center border-b  border-gray-300">
    <div className="header_container  justify-between ">
      <div className="flex items-center ">
        <svg className="w-6 h-6 bg-gray-100 rounded-md" viewBox="0 0 24 24">
          <rect className="rounded-md" />
          <path d="M9.76795 7C10.5378 5.66666 12.4623 5.66667 13.2321 7L17.1292 13.75C17.899 15.0833 16.9367 16.75 15.3971 16.75H7.60288C6.06328 16.75 5.10103 15.0833 5.87083 13.75L9.76795 7Z"></path>
        </svg>
        <div className="mx-1 font-bold">Milton</div>
      </div>

      {isNavOpen ? (
        <div
          className={`nav-links font-bold cursor-pointer flex flex-col items-center transform origin-center opacity-100  ${
            isNavOpen ? "open" : ""
          }`}
        >
          <Link  to="features" smooth={true} duration={500}>
            Features
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            Pricing
          </Link>
          <Link to="faq" smooth={true} duration={500}>
          FAQs
          </Link>
          <Link to="about_us" className="p-2 cursor-pointer">
              About Us
            </Link>
          

          <div className={`two_buttons ${isNavOpen ? "open" : ""}`}>
            <button className="bg-gray-100   font-bold py-2 px-4 rounded-xl  transition-transform transform-gpu hover:bg-gray-200 hover:shadow-md hover:scale-110">
              Login
            </button>
            <button className="bg-gray-700  text-white font-bold py-2 px-4 rounded-xl mt-2 md:mt-0 transition-transform transform-gpu hover:shadow-md hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="header_links w-full flex  items-center justify-between  h-10">
          <div className="flex-1 flex justify-center font-extrabold text-gray-500  space-x-2">
            <Link to="features" className="p-2 cursor-pointer">
              Features
            </Link>
            <Link to="testimonial" className="p-2 cursor-pointer">
              Testimonial
            </Link>
            <Link to="pricing" className="p-2 cursor-pointer">
              Pricing
            </Link>
            <Link to="faqs" className="p-2 cursor-pointer">
              FAQs
            </Link>
            <Link to="about_us" className="p-2 cursor-pointer">
              About Us
            </Link>
          </div>
          <div className="flex  items-center ml-2">
            <button className="bg-gray-100 font-bold py-2 px-4 rounded-xl transition-transform transform-gpu hover:bg-gray-200 hover:shadow-md hover:scale-110">
              Log In
            </button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-xl ml-2 transition-transform transform-gpu hover:shadow-md hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      )}

      <div
        className={`hamburger-menu ${isNavOpen ? "open" : ""}`}
        onClick={toggleNav}
      >
        {isNavOpen ? (
          <div className="cross-icon justify-end">
            <div className="bar cross-bar1" />
            <div className="bar cross-bar2" />
          </div>
        ) : (
          <div className="justify-end">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Header