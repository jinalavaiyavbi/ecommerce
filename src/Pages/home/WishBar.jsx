import React, { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { SidebarContext } from "../../assets/Contexts/SidebarContext";
import { CiHeart } from "react-icons/ci";
import WishList from "./WishList";
import { WishContext } from "../../assets/Contexts/WishContext";
  

const WishBar = () => {
  const { WishClose, wishOpen } = useContext(SidebarContext);
  const {wishproduct,clearWish} = useContext(WishContext);

  return (
    <div
      className={`${
        wishOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-1 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-1 border-b">
        <div className="flex  items-center justify-center">
          <CiHeart className="pe-2 text-3xl" />
          Wish List
        </div>
        <div
          onClick={WishClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center "
        >
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lh:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {wishproduct.map((item, index) => {
          return <WishList key={index} item={item}></WishList>;
        })}
      </div>
      <div className="flex flex-col gap-y-1 py-2 mt-2">
        <div className="flex w-full  justify-between items-center">
         
          <div
            onClick={clearWish}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FaRegTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishBar;
