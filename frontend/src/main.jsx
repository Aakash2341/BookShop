import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Index></Index>
    </AuthProvider>
  </BrowserRouter>
);
