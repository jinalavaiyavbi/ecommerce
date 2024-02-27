import React, { useContext } from "react";
import { SidebarContext } from "../../assets/Contexts/SidebarContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CartContext } from "../../assets/Contexts/CartContext";
import CartItem from "./CartItem";


const Sidebar = () => {
  const { open, setopen, handleclose } = useContext(SidebarContext);
  const { cart, clearCart, total, amountItem } = useContext(CartContext);
  // console.log(cart)
  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-1 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-1 border-b">
        <div>
          {/* Shopping Bag  */}
          Shopping Bag ({amountItem})
          <BsFillHandbagFill />
        </div>
        <div
          onClick={handleclose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center "
        >
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lh:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item}></CartItem>;
        })}
      </div>
      <div className="flex flex-col gap-y-1 py-2 mt-2">
        <div className="flex w-full  justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FaRegTrashAlt  />
          </div>
        </div>
        <div></div>
      </div>
    </div>

  );
};

export default Sidebar;
