import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='bg-[#1E2831] bg-opacity-5 xl:px-28 px-4  py-16'>
        <h2 className="title mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
            <Link to="/">
                <img src="images/instagram/img1.png" alt="" />
            </Link>
            <Link to="/">
                <img src="images/instagram/img2.png" alt="" />
            </Link>
            <Link to="/">
                <img src="images/instagram/img3.png" alt="" />
            </Link>
            <Link to="/">
                <img src="images/instagram/img4.png" alt="" />
            </Link>
            <Link to="/">
                <img src="images/instagram/img5.png" alt="" />
            </Link>
        </div>
        <div className="">
            <h2 className="title mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <form action="" className="md:w-1/2 mx-auto text-center">
                <input type="email" name="email" id="email" className='h-8 placeholder:text-black/50 mr-4  outline-none border-b-2 pl-2 border-black w-full mb-5 bg-transparent ' placeholder='Email Address'  />
                <input type="submit" value={"Submit"} className='bg-Black text-white px-6 py-1 rounded-sm' />
            </form>
        </div>
    </div>
  )
}

export default Newsletter
