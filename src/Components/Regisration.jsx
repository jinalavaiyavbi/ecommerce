import React from 'react'
import Img from "../../public/images/background2.jpg";
import { Link } from 'react-router-dom';


const Regisration = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      };
  return (

    <div className="bg-no-repeat overflow-hidden" style={backgroundStyle}>
      <div className="h-screen w-screen">
        <div className="mx-auto w-[350px] h-[450px] sm:w-[500px] sm:h-[550px] rounded-lg bg-black opacity-45 shadow-lg fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 p-10 sm:p-20 border-2 border-white ">
          <div className="text-center  ">
            <h1 className="md:text-6xl mb-2 text-[2.75rem] text-white">Registration</h1>
            
          </div>
          <div className="grid grid-rows-2 gap-2 sm:gap-4 ">
            <div>
              <input
                type="text"
                name="name"
                id=""
                className="outline-none border-b-2 bg-transparent w-full font-bold text-[16px]  px-2 py-2  focus:border-white "
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id=""
                className="outline-none border-b-2 bg-transparent w-full font-bold text-[16px] px-2 py-2  focus:border-white "
                placeholder="Email or Phone"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                className="outline-none border-b-2 bg-transparent font-bold text-[16px]  w-full px-2 py-2  focus:border-white"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirm"
                id=""
                placeholder="Confirm Password"
                className="outline-none border-b-2 bg-transparent font-bold text-[16px]  w-full px-2 py-2  focus:border-white"
              />
            </div>
            <div className="text-center rounded-md px-4 py-2 bg-blue-600 w-full ">
            <Link to="/"
              className="font-bold text-white "
            >
              Register
            </Link>
          </div>
          </div>
          {/* <div className="text-center text-white py-4">Don't have an account? 
                <Link to="/" className="text-[fc9d03] font-bold"> Log in</Link>
            </div> */}
         
        </div>
      </div>
    </div>
  )
}

export default Regisration
