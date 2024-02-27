import React, { useContext } from 'react'
import { IoIosAdd, IoIosClose, IoIosRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CartContext } from '../../assets/Contexts/CartContext'

const CartItem = ({item}) => {
    // console.log(item,"cart")
    const {removeCart,increseAmt,decreseAmt} = useContext(CartContext)

  return (
    <>
    
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light to-gray-500  ">
    <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
      <div>
        <Link to={`/shop/${item?.id}`}>
          <img src={item?.image} alt="cartimage" className="max-w-[80px]" />
        </Link>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between mb-2">
          <Link
            to={`/shop/${item?.id}`}
            className="text-primary  text-sm uppercase font-medium max-w-[240px] hover:underline"
          >
            {item?.title}
          </Link>
          <div onClick={() => removeCart(item?.id)} className="text-xl cursor-pointer ">
            <IoIosClose className="text-gray-500 hover:text-red-500 transition" />
          </div>
        </div>
        <div className= "flex gap-x-2 h-[36px] text-sm">
          {/* qu */}
          <div className="flex flex-1 items-center max-w-[100px] h-full border text-primary font-medium ">
            {/* <div  className="flex-1  flex justify-center items-center cursor-pointer h-full"  > */}
            <div onClick={() => decreseAmt(item?.id)} className="flex-1  flex justify-center items-center cursor-pointer h-full"  >
              <IoIosRemove />
            </div>
            {/* amount */}
            <div className="h-full flex justify-center items-center px-2">{item?.amount}</div>
            {/* <div   className="flex-1 h-full flex justify-center items-center cursor-pointer"> */}
            <div  onClick={()=> increseAmt(item?.id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoIosAdd  />
            </div>
          </div>
          {/* price */}
          <div className="flex-1 flex items-center justify-around">$ {item?.price}</div>
          {/* qfinal price */}
          <div className="flex flex-1 justify-end items-center text-primary font-medium" >{`$ ${ parseFloat(item?.price * item?.amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
    
  </div>
  </>
  )
}

export default CartItem
