import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaArrowAltCircleRight } from "react-icons/fa";
import { CartContext } from "../../assets/Contexts/CartContext";
import { IoIosAdd, IoIosRemove } from 'react-icons/io'


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [addAmt, setaddAmt] = useState(0);
  const [addAmt, setAddAmt] = useState(1); // State for the quantity of items

  const { addtoCart,decreseAmt,increseAmt } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();

        const getdata = data.find((item, index) => {
          return item.id === parseInt(id);
        });
        setProduct(getdata);
      } catch (err) {
        console.log(err, "erroe to fetch data");
      }
    };
    fetchData();
  }, [id]);
  // console.log(product)

  
  // Function to handle the increase in quantity
  const handleIncrease = () => {
    setAddAmt(prevAmt => prevAmt + 1);
  };

  // Function to handle the decrease in quantity
  const handleDecrease = () => {
    if (addAmt > 1) {
      setAddAmt(prevAmt => prevAmt - 1);
    }
  };

  const handleAddToCart = () => {
      addtoCart(product, product?.id, addAmt);
    setAddAmt(1);
  };
  
  

  
  if (!product) {
    return (
      <section className="h-screen flex items-center justify-center">
        Loading....
      </section>
    );
  }
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className=" pt-5 sm:pt-10 pl-3 max-w-7xl m-auto">
        <a href="/" className="text-gray-600">
          Home
        </a>
        <a href="/" className="text-black font-bold">
          / Shop
        </a>
      </div>
      <div className="p-3  max-w-7xl m-auto">
        <div className="mt-2 sm:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max ">
            {/* image */}
            <div>
              <img src={product?.image} alt="Image" />
            </div>
            {/* product details */}
            <div>
              <h1 className="capitalize text-3xl font-semibold text-left">
                {product?.title}
              </h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                deserunt velit sunt adipisci, nam incidunt vero recusandae
                voluptatibus saepe mollitia sapiente cupiditate cumque atque rem
                qui quaerat pariatur fugit deleniti!
              </p>
              <span className="my-2 text-yellow-500 text-xl flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-red-500 text-xl font-semibold sm:text-2xl ">
                $ {product?.price}
              </p>
              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label htmlFor="" className="font-semibold">
                    Quantity
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      required
                      name="price"
                      id="price"
                      value={addAmt}
                      // onChange={(e) => setAddAmt(e.target.value)}.
                      onChange={(e) => setAddAmt(parseInt(e.target.value))}  
                      className="outline-none text-sm font-semibold py-3 px-4 md:py-3 md:px-3 border border-gray-300  mb-1 max-w-full w-full rounded-md m-0 focus:border-red-500"
                    />
                    <button onClick={handleIncrease} className="border border-gray-300 px-3 py-[14px] rounded-md">
                      <IoIosAdd />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full text-left my-4">
                <button
                  onClick={handleAddToCart}
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border-red-500 rounded-md ease-in-out duration-500 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                >
                  <span>Confirmed Order</span>
                  <FaArrowAltCircleRight />
                </button>
              </div>
              {/* <div className="mt-4">
                <div className="tetx-left flex flex-col gap-2 w-full">
                  <label htmlFor="" className="font-semibold">
                    Qunatity
                  </label>
                  <input
                    type="number"
                    required
                    name="price"
                    id="price"
                    onChange={(e) => setaddAmt(e.target.value)}
                    className="outline-none text-sm font-semibold py-3  px-4 md:py-3 md:px-3 border border-gray-300  mb-1 max-w-full w-full rounded-md m-0 focus:border-red-500"
                  />
                </div>
              </div> */}
              {/* conform order  */}
              {/* <div className="w-full text-left my-4">
                <button
                  onClick={() => addtoCart(product, product?.id, addAmt)}
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border-red-500 rounded-md ease-in-out duration-500 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                >
                  <span>Confirmed Order</span>
                  <FaArrowAltCircleRight />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
