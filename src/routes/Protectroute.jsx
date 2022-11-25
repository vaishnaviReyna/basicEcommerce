import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const Protectroute = () => {
  const auth = localStorage.getItem("logedin");
  return auth ? <Outlet /> : <Navigate to={"/login_page"} />;
};

export default Protectroute;
