import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Subscribe from './Pages/Subscribe';
import Coffee from './Pages/Coffee';

export default function App() {
  const [coffee, setCoffee] = useState([]);

  function fetchCoffeeDescription() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }

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
