import React, { useContext } from 'react'
import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { WishContext } from '../../assets/Contexts/WishContext'

const WishList = ({item}) => {
    const {removewish} = useContext(WishContext)

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light to-gray-500  ">
    <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
      <div>
          <img src={item?.image} alt="cartimage" className="max-w-[80px]" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between mb-2">
          <Link
            to={`/shop/${item?.id}`}
            className="text-primary  text-sm uppercase font-medium max-w-[240px] hover:underline"
          >
            {item?.title}
          </Link>
          <div onClick={() => removewish(item?.id)} className="text-xl cursor-pointer ">
            <IoIosClose className="text-gray-500 hover:text-red-500 transition" />
          </div>
        </div>
        <div className= "flex gap-x-2 h-[36px] text-sm">
          <div className="flex-1 flex items-center justify-start">$ {item?.price}</div>
         </div>
      </div>
    </div>
  </div>
  )
}

export default WishList
