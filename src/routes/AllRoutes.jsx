import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        }
      />
      <Route
        path="/services"
        element={
          <PrivateRoutes>
            <Services />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
