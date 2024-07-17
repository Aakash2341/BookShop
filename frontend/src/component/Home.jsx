import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className=" bg-white min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
};

export default Home;
