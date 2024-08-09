import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Banner from "./Banner";
import Footer_ from "./Footer";

const Home = () => {
  return (
    <div className=" bg-white min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
      <Cart></Cart>
      <Footer_></Footer_>
    </div>
  );
};

export default Home;
