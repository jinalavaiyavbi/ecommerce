import React from 'react'
import { Link } from 'react-router-dom'

const Catergory = () => {
    const  companyLogo = [
        {id : 1, img : "../../../public/images/company/brand1.png"},
        {id : 2, img : "../../../public/images/company/brand2.png"},
        {id : 3, img : "../../../public/images/company/brand3.png"},
        {id : 4, img : "../../../public/images/company/brand4.png"},
        {id : 5, img : "../../../public/images/company/brand5.png"},
    ]
  return (
    <div className='max-w-screen-2xl mx-auto md:px-28 py-28 px-4 container '>
        <div className="flex items-center justify-around flex-wrap gap-4 py-5">
            {
                companyLogo.map((item , index) => {
                    return (
                        <div className="" key={index}> <img src={item.img} alt="logo" /> </div>
                    )
                })
            }
        </div>
        {/* Catergory img */}
        <div className="flex mt-8 flex-col md:flex-row items-center gap-4">
            <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti.</p>
            <div className="">
                <Link to="/">
                <img src="/images/category/image1.png" alt="" className='w-full hover:scale-105 transition-all duration-200' />
                </Link>
            </div>
            <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-2">
                    <Link to="/">
                <img src="/images/category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/">
                <img src="/images/category/image3.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/">
                <img src="/images/category/image4.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    <Link to="/">
                <img src="/images/category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catergory
