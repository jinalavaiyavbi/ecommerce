import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [amountItem, setamountItem] = useState(0);
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setcart(storedCart);
    }
  }, []);

  // update item amt and save to local storage
  useEffect(() => {
    const amount = cart.reduce((x, item) => {
      return x + item.amount;
    }, 0);
    setamountItem(amount);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // update total amt
  useEffect(() => {
    const total = cart.reduce((x, item) => {
      // console.log(x)
      // console.log(item)
      return x + item.price * item.amount;
    }, 0);
    settotal(total);
  });

  // Add Item
  const addtoCart = (product, id, qt = 1) => {
    const newitem = { ...product, amount: qt };
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newcart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount + qt };
        } else {
          return item;
        }
      });
      setcart(newcart);
      // Show toast message for increasing item quantity
      toast.success(`Quantity of ${newitem.category} increased!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setcart([...cart, newitem]);
      toast.success(`added to cart!`, {
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

  // Remove All Item
  const removeCart = (id) => {
    const removeItem = cart.find((item) => item.id === id);
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setcart(newCart);
    // Show toast message
    if (removeItem) {
      toast.error(`${removeItem.category} removed from cart!`, {
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
  
  // Clear Item
  const clearCart = () => {
    setcart([]);
    if (cart.length >= 0) {
      toast.success(`Cart is now empty!`, {
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
  // Increse Quntity
  // const increseAmt = (id) => {
  //   const cartitem = cart.find((item) => item.id === id);
  //   addtoCart(cartitem, id, cartitem.amount + 1);
  // };

  const increseAmt = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 }; 
      } else {
        return item;
      }
    });
    setcart(newCart);
  };

  // Decrese Quntity
  const decreseAmt = (id) => {
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartitem);
    if (cartitem) {
      const newcart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartitem.amount - 1 };
        } else {
          return item;
        }
      });
      setcart(newcart);
      // Show toast message for increasing item quantity
      toast.success(`Quantity of ${cartitem.category} decreased!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (cartitem.amount < 2) {
      removeCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addtoCart,

        cart,
        removeCart,
        clearCart,
        increseAmt,
        decreseAmt,
        total,
        amountItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
