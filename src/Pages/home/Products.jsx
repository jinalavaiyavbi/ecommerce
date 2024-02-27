import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import CardItem from "./CardItem";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [filterItems, setfilterItems] = useState([]);
  const [selectedcateroy, setselectedcateroy] = useState("all");
  const [selectOption, setselectOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        // console.log(data)
        setproducts(data);
        setfilterItems(data);
      } catch (err) {
        console.log(err, "erroe to fetch data");
      }
    };
    fetchData();
  }, []);

//   filter function
  const filterItem = (category) => {
    const flitercard =
      category === "all"
        ? { products }
        : products.filter((item) => item.category === category);
    // console.log(flitercard)
    setfilterItems(flitercard);
    setselectedcateroy(category);
  };
//   showall function
  const showAll = () => {
    setfilterItems(products);
    setselectedcateroy(category)("all");
  };

//   sortinh function
  const handelsortchange = (option) => {
    console.log(option);
    setselectOption(option);
    let sortItems = [...filterItems];
    switch (option) {
      case "A-Z":
        sortItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setfilterItems(sortItems)
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 ">
      {/* Heading */}
      <h2 className="title">Or Subscribe to the newsletter</h2>
      {/* all product */}
      <div className="">
        <div className="flex md:justify-between items-center flex-col md:flex-row flex-wrap space-y-3 mb-8    ">
          {/* button */}
            <div className="flex justify-start flex-row md:items-center md:gap-8 gap-4 flex-wrap">
              <button onClick={showAll}>All Products</button>
              <button
                onClick={() => {
                  filterItem("Dress");
                }}
              >
                Clothing
              </button>
              <button
                onClick={() => {
                  filterItem("Hoodies");
                }}
              >
                Hoodies
              </button>
              <button
                onClick={() => {
                  filterItem("Bag");
                }}
              >
                Bag
              </button>
            </div>
          {/* filter */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white  h-4 w-4" />
            </div>
            <select
              onChange={(e) =>handelsortchange(e.target.value)}
              value={selectOption} id="sort"
              className="bg-black text-white  px-2 py-1 rounded-sm "
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* cards item */}
        <CardItem filterItems={filterItems} />
      </div>
    </div>
  );
};

export default Products;
