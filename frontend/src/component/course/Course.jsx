import React from "react";
import list from "../../../public/list.json";
import Cards from "../Cards";
import { Link } from "react-router-dom";

const Course = () => {
  console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  bg-white ">
        <div className="items-center justify-center text-center pt-36">
          <h1 className="text-2xl md:text-4xl text-gray-900">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className=" text-gray-900 mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem
            a numquam modi delectus, quis distinctio rerum aperiam vero eos
            accusantium voluptates cumque, deserunt natus culpa aliquam quos
            omnis vel?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">
              back
            </button>
          </Link>
        </div>
        <div className=" mt-8 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards item={item} key={item.id}></Cards>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default Course;
