import React from "react";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
const Cart = () => {
  const filterdata = list.filter((data) => data.category == "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <hr />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-9">
        <div>
          <h1 className="text-xl text-gray-900 font-bold pb-3">
            Free Offered Course
          </h1>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in
            facilis nostrum saepe ipsam corporis, officia vel consequatur vero
            accusamus et. Doloribus dolore ad necessitatibus quae accusantium?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Cards item={item} key={item.id}></Cards>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Cart;
