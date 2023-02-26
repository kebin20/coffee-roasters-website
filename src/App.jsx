import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Subscribe from './Pages/Subscribe';
import Coffee from './Pages/Coffee';

export default function App() {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => {
        return response.json();
      })
      .then((data) => setCoffee(data.results));
  }, []);

  console.log(coffee);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/coffee" element={<Coffee coffee={coffee} />} />
      </Routes>
    </BrowserRouter>
  );
}
