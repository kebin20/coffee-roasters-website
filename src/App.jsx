import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Subscribe from "./Pages/Subscribe";
import Coffee from "./Pages/Coffee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
    </BrowserRouter>
  );
}
