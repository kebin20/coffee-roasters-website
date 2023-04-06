import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Layout/NavBar";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Subscribe from "./Pages/Subscribe";
import CoffeeList from "./Pages/CoffeeList";
import Registration from "./Pages/Registration";

export default function App() {
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoffeeHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      if (!response.ok) {
        throw new Error("Oops! Something went wrong!");
      }
      const data = await response.json();
      setCoffees(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);

    // Wait for 1 second before making the next request
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }, []);

  useEffect(() => {
    fetchCoffeeHandler();
  }, [fetchCoffeeHandler]);

  let coffeeContent = <p>No coffee found</p>;

  if (coffees.length > 0) {
    coffeeContent = <CoffeeList coffees={coffees} />;
  }

  if (error) {
    coffeeContent = <p>{error}</p>;
  }

  if (isLoading) {
    coffeeContent = <p>Loading...</p>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/coffee" element={coffeeContent} />
      </Routes>
    </BrowserRouter>
  );
}
