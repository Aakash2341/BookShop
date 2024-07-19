import React from "react";
import { useAuth } from "../context/Authprovider";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handlelogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");
      //window.location.reload();
    } catch (error) {
      toast.error("error : " + error.messsage);
    }
    window.location.reload();
  };

  return (
    <button
      className="bg-red-500 text-white p-3 rounded-md cursor-pointer "
      onClick={handlelogout}
    >
      Logout
    </button>
  );
};

export default Logout;
