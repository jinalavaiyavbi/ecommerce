import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import Logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import { SidebarContext } from "../assets/Contexts/SidebarContext";
import { CartContext } from "../assets/Contexts/CartContext";
import { CiHeart } from "react-icons/ci";


const NaavBar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  const { open, setopen,wishOpen,setwishOpen } = useContext(SidebarContext);
  const { amountItem } = useContext(CartContext);

  const navItem = [
    { title: "Jewelery & Accesories", path: "/" },
    { title: "Clothing & shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Partys", path: "/" },
    { title: "Toys  & Entertainment", path: "/" },
    { title: "Arts & Collections", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 60 ? setisActive(false) : setisActive(true);
    });
  });
  const LogOut = () => {
    localStorage.setItem('loggedIn', 'false');
  }

  return (
    <header
      className={` ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full transition-all z-10 max-w-screen-2xl xl:px-28 px-4  top-0 right-0 left-0  `}
    >
      {/* <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0 "> */}
      <nav className="container flex justify-between items-center md:py-4 pt-6 pb-3">
        {/* logo */}
        <FaSearch className="hidden md:block cursor-pointer text-Black w-5 h-5" />
        <a href="/">
          <img src={Logo} alt="logo" className="" />
        </a>
        {/* account & shopping */}
        <div className="sm:flex items-center hidden text-lg text-black gap-4 relative">
          <a className="flex items-center gap-2 ">
            <MdOutlineAccountCircle onClick={LogOut}  /> Sign Out
          </a>

          <span
            onClick={() => {
              setopen(!open);
            }}
            className="flex items-center gap-2  cursor-pointer  "
          >
            <FaShoppingBag className="text-2xl" /> Shopping
            <div className="bg-red-500 absolute right-48 bottom-4 w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {amountItem}
            </div>
          </span>
          <span
            onClick={() => {
              setwishOpen(!wishOpen);
            }}
            className="flex items-center gap-2  cursor-pointer  "
          >
            <CiHeart className="text-2xl" /> Wish List
            
          </span>
        </div>

        {/* nacbar for sm devices  */}
        <div className="sm:hidden ">
          <button onClick={() => setisOpenMenu((pre) => !pre)}>
            {isOpenMenu ? (
              <FaTimes className="text-Black w-5 h-5 " />
            ) : (
              <FaBars className="text-Black w-5 h-5 " />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* catergort item  */}
      <div className="pt-4">
        <ul className="lg:flex justify-between items-center hidden text-black ">
          {navItem.map((x, index) => {
            return (
              <li key={index} className="hover:text-orange-500">
                {x.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" sm:hidden">
        <ul
          className={`bg-Black  text-white px-4 py-2 rounded ${
            isOpenMenu ? "" : "hidden"
          } `}
        >
          {navItem.map((x, index) => {
            return (
              <li
                key={index}
                className="hover:text-orange-500 my-3 cursor-pointer "
              >
                <Link to="/">{x.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default NaavBar;
