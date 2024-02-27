import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      // console.log(data)
      setproducts(data);
    };
    fetchData();
  }, []);
  const bestSeller = products.filter((x, index) => x.status == "Best Selers");
  // console.log(bestSeller);

  return (
    <div className="max-w-screen-2xl container mx-auto  xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">Best Seller</h2>
        <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          repellendus quia libero qui optio neque possimus natus eius dolores
          non.
        </p>
      </div>
      {/* best seller product card */}
      <div className="mb-16">
        <Swiper
            slidesPerView={1}
          spaceBetween={10}
        //   centeredSlides={true}  // to align center all slides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSeller.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <Link to={`/shop/${item.id}`}>
                  <img
                    src={item.image}
                    alt="img"
                    className="mx-auto w-full hover:scale-105 transition-all duration-300 "
                  />
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2 ">
                    {item.title}
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-black/50">{item.category}</p>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
