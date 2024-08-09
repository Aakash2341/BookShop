import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Detail = () => {
  return (
    <div className="  h-screen flex  bg-white">
      <div className="w-[1200px]  ">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
          <div
            className="w-full  w-1/2 
       mt-12 md:mt-32 order-1 md:order-1"
          >
            <div className="  text-black">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").closed()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Detail</h3>

              <div className=" mt-4 space-y-2">
                <span>FuLL Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-1 border rounded-md  text-black bg-stone-200"
                />
                <br />
              </div>

              <div className="  space-y-2 mt-8">
                <span>Phone No.</span>
                <br />
                <input
                  type="digit"
                  placeholder="Enter your Number"
                  className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black
              "
                />
                <br />
              </div>
              <div className="  space-y-2 mt-8">
                <span>Address</span>
                <br />

                <input
                  type="digit"
                  placeholder="Enter your Number"
                  className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black
              "
                />
                <br />
              </div>

              <div className=" mt-3">
                <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-20  md:mt-24 ml-0 md: ml- 4 mb-4 mt-24">
          <img src="/banner.jpg" className=" w-120 h-105 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
