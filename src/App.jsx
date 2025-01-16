import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navber from "./components/sub-components/Navber";
import Home from "./components/Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navber />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
