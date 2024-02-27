import React from 'react'
import Logo from "../../../public/logo.svg";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,FaTwitter
  } from "react-icons/fa";

  

const Footer = () => {
    
const FooterLinks = [
    {
      title: "Neackles",
      link: "/#",
    },
    {
      title: "Hoddies",
      link: "/#about",
    },
    {
      title: "Jewellery Box",
      link: "/#contact",
    },
    {
      title: "T-shirt",
      link: "/#blog",
    },
    {
      title: "Jacket",
      link: "/#blog",
    },
  ];
const AboutusLink = [
    {
      title: "Out Products",
      link: "/#",
    },
    {
      title: "Stemap",
      link: "/#about",
    },
    {
      title: "FAO",
      link: "/#contact",
    },
    {
      title: "About US",
      link: "/#blog",
    },
    {
      title: "Terms & conditions",
      link: "/#blog",
    },
  ];
const Customers = [
    {
      title: "Contact Us",
      link: "/#",
    },
    {
      title: "Track Your Order",
      link: "/#about",
    },
    {
      title: " Product care & Repair",
      link: "/#contact",
    },
    {
      title: "Books an Appoinment",
      link: "/#blog",
    },
    {
      title: "Shipping Returns",
      link: "/#blog",
    },
  ];
  return (
    <>
     {/* <div style={BackImg} className="text-white"> */}
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 ">
    {/* <div className="container"> */}
      <div  className="grid md:grid-cols-3  pt-5">
        <div className="py-5 px-4">
          <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            <img src={Logo} alt="" className="max-w-[150px]" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
            beatae ea recusandae blanditiis veritatis.
          </p>
          
          <div className="flex items-center gap-6 mt-4">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
          <div>
            <div className="py-5 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                CATLOGS
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((x,index) => (
                  <li 
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-30 "
                    key={index}
                  >
                    <span>{x.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {AboutusLink.map((x,index) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                    key={index}
                  >
                    <span>{x.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="py-5 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                CUSTOMERS SERVICES
              </h1>
              <ul className="flex flex-col gap-3">
                {Customers.map((x,index) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                    key={index}
                  >
                    <span>{x.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    {/* </div> */}
  </div>
  <div  className='border-t border-gray-300  mt-16 bg-black'>
  <div className="container py-4 text-white text-center ">
      &copy;Copyright @The Brave Coders 2023. 
  </div>
</div>

</>
  )
}

export default Footer
