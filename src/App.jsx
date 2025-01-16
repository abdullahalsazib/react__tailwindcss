import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navber from "./components/sub-components/Navber";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";
import Pages from "./components/Pages/Pages";
import ContactUs from "./components/Pages/ContactUs";
import NoPage from "./components/Pages/NoPage";
import Shop from "./components/Pages/Shop";
import Login from "./components/Pages/Login";
import Singup from "./components/Pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/" element={<Navber />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
