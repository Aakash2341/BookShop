import React from "react";
import Home from "./component/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Coursemain from "./component/Coursemain";
import Signup from "./component/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";
const Index = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/course"
          element={
            authUser ? (
              <Coursemain></Coursemain>
            ) : (
              <Navigate to={"/signup"}></Navigate>
            )
          }
        ></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default Index;
