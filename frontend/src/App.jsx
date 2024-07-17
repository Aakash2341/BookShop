import React from "react";
import Home from "./component/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Coursemain from "./component/Coursemain";
import Signup from "./component/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/course" element={<Coursemain></Coursemain>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
};

export default App;
