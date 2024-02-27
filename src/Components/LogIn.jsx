import React, { useState } from "react";
import Img from "../../public/images/background.webp";
import { Link } from "react-router-dom";
import Home from "../Pages/home/Home";

const LogIn = () => {

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Here, you would typically perform authentication (e.g., send a request to your backend)
      // For simplicity, let's assume successful login for any non-empty username/password
      if (username.trim() !== '' && password.trim() !== '') {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
      }
    };
  
    if (loggedIn) {
      return <Home setLoggedIn={setLoggedIn} />;
    }

  const backgroundStyle = {
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  const gradientStyle = {
    background: "linear-gradient(to bottom, #f0a93a  , #000000)",
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
              <h1 className="md:text-6xl text-2xl text-white pb-2 uppercase font-semibold">
                LogIn
              </h1>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                className="outline-none  text-left border-b-2 bg-transparent w-full px-2 py-2 text-white font-semibold  focus:border-white "
                placeholder="Email or Phone"
              />
            </div>
            <div>
              <input
                type="password"
                name="email"
                id=""
                value={password}
                onChange={(e)=> setPassword(e.target.value)}

                placeholder="Password"
                className="outline-none border-b-2 bg-transparent  w-full px-2 py-2 text-white font-semibold   focus:border-white"
              />
            </div>
            <div className="text-center pt-2">
              <Link to="/password" className="text-white">
                Forgot Password ?
              </Link>
            </div>
            <div className="text-center">
              <button
                type="button  "
                onClick={handleLogin}
                className=" bg-[#fc9d03] w-[200px] py-2 rounded-3xl mt-2 text-white"
              >
                Login
              </button>
            </div>
            <div className="text-[#fc9d03]">Don't have an account? 
                <Link to="/registration" className="text-[fc9d03] font-bold"> Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
