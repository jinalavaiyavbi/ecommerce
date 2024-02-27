import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaavBar from "./Components/NaavBar";
import SingleProduct from "./Pages/home/SingleProduct";
import Home from "./Pages/home/Home";
import Sidebar from "./Pages/home/Sidebar";
import WishBar from "./Pages/home/WishBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogIn from "./Components/LogIn";
import Regisration from "./Components/Regisration";
import Password from "./Components/Password";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        {/* <NaavBar /> */}
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/registration" element={<Regisration />} />
          <Route path="/password" element={<Password />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
        </Routes>
        <ToastContainer /> 
        <Sidebar />
        <WishBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
