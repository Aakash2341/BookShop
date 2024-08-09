import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Footer_ from "./Footer";
const Detail = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="  h-screen flex bg-white ">
        <div className="w-[600px] h-[600px] ml-52 mt-3 bg-sky-50 ">
          <div className=" container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
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
                    type="text"
                    placeholder="Enter your Address"
                    className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black
              "
                  />
                  <br />
                </div>
                <div className="  space-y-2 mt-8">
                  <span>Add Book</span>
                  <br />

                  <input
                    type="Text"
                    placeholder="Enter Book Name"
                    className="w-80 px-3 py-1 border rounded-md  bg-stone-200  text-black
              "
                  />
                  <br />
                </div>

                <div className=" mt-3">
                  <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-slate-500">
        <Footer_></Footer_>
      </div>
    </>
  );
};

export default Detail;
