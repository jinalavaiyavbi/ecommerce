import React, { useContext, useState } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CartContext } from "../../assets/Contexts/CartContext";
import { WishContext } from "../../assets/Contexts/WishContext";

const CardItem = ({ filterItems }) => {
  const { addtoCart } = useContext(CartContext);
  const { wishproduct, wishItem } = useContext(WishContext);

  const isInWishlist = (productId) => {
    return wishproduct.some((item) => item.id === productId);
  };

  return (
    <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-12 shadow-sm">
      {filterItems.map((item, index) => (
        <div key={index} className="relative group">
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt="img"
              className="mx-auto w-full hover:scale-105 transition-all duration-300 "
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2 ">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <button
                onClick={() => {
                  addtoCart(item, item.id);
                }}
                className="flex justify-center items-center  text-white w-12 h-12 bg-red-500"
              >
                <BsPlus className="text-3xl" />
              </button>
              <Link
                to={`/shop/${item.id}`}
                className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
              >
                <BsEyeFill />
              </Link>

              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
          <div
            onClick={() => wishItem(item, item.id)}
            className={` opacity-0 group-hover:opacity-100 absolute top-1`}
          >
            <CiHeart
              color={isInWishlist(item?.id) ? "red" : "black"}
              className={`group-hover:text-4xl `}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
