import React from "react";
import Navbar from "./Navbar";
import Course from "./course/Course";
import Footer from "./Footer";

const Coursemain = () => {
  return (
    <>
      <div className=" ">
        <Navbar></Navbar>
        <div>
          <Course></Course>
        </div>
      </div>
    </>
  );
};

export default Coursemain;
