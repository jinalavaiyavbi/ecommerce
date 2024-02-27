import React from 'react'
import Img from "../../public/images/background3.jpg";
import { Link } from "react-router-dom";


const Password = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      };
      const gradientStyle = {
        background: "linear-gradient(to bottom, #000000  , #000000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
  return (
    
    <div className="bg-no-repeat" style={backgroundStyle}>
      <div className="h-screen w-screen">
        <div
          style={gradientStyle}
          className="mx-auto w-[300px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-lg bg-black opacity-40 shadow-lg fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 p-5 sm:p-10 border-4 border-white "
        >
          <div className="grid grid-rows-2 gap-2 sm:gap-6 pt-2">
            <div className="text-center  ">
              <h1 className="md:text-4xl text-2xl text-white pb-2 capitalize font-semibold">
                Change Password
              </h1>
            </div>
            <div>
              <input
                type="password"
                name="oldpass"
                id="oldpass"
                className="outline-none  text-left border-b-2 bg-transparent w-full px-2 py-2  focus:border-white "
                placeholder="Old Password"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                className="outline-none  text-left border-b-2 bg-transparent w-full px-2 py-2  focus:border-white "
                placeholder="Change Password"
              />
            </div>
            <div>
              <input
                type="password"
                name="confirpass"
                id=""
                placeholder="Confirm Password"
                className="outline-none border-b-2 bg-transparent  w-full px-2 py-2  focus:border-white"
              />
            </div>
            
            <div className="text-center  bg-white w-full py-2 rounded-3xl ">
              <Link to="/"
                className=" mt-2 text-black"
              >
                Update Psssword
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Password
