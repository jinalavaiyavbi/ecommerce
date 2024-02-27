import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const WishContext = createContext();

const WishProvider = ({ children }) => {
  const [wishproduct, setwishproduct] = useState([]);

  // Load wishlist data from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setwishproduct(JSON.parse(storedWishlist));
    }
  }, []);
  
  // Update localStorage whenever wishlist data changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishproduct));
  }, [wishproduct]);

  //   add wish list
  const wishItem = (product, id) => {
    if (isInWishlist(id)) {
      // Remove item from wishlist
      const updatedWishlist = wishproduct.filter((p) => p.id !== id);
      setwishproduct(updatedWishlist);
      // if (updatedWishlist) {
      //   toast.error(`${wishproduct.category} Already in Wish List!`, {
      //     position: "bottom-right",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      // }
    } else {
      // Add item to wishlist
      setwishproduct([...wishproduct, product]);
      toast.success(`added to Wish List!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  };

  const isInWishlist = (id) => {
      return wishproduct.some((item) => item.id === id);
  };

  //   removerwish list
  const removewish = (id) => {
    const removeitem = wishproduct.find((item) => item.id === id) 
    const newCart = wishproduct.filter((item) => {
      return item.id !== id;
    });
    setwishproduct(newCart);
    // Show toast message
    if (removeitem) {
      toast.error(`${removeitem.category} removed from Wish List!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Clear wishlist
  const clearWish = () => {
      setwishproduct([]);
      if (wishproduct.length >= 0) {
        toast.success(`Wish List is now empty!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
  };

  return (
    <WishContext.Provider
      value={{
        wishItem,
        wishproduct,
        removewish,
        clearWish,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export default WishProvider;
