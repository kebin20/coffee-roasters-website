import React, { useEffect } from "react";
import styles from "./Coffee.module.css";
import Wrapper from "../UI/Wrapper";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";

export default function Coffee(props) {
  const [coffee, setCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCoffee(data.results));
    setIsLoading(false);
  }, []);

  console.log(coffee);

  let message = <p>Oops! no coffee found</p>;

  if (coffee.length > 0) {
    message = (
      <li>
        <h2>{data.results}</h2>
        <p>Test</p>
      </li>
    );
  }

  if (error) {
    message = <p>{error}</p>;
  }

  if (isLoading) {
    message = <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <NavBar />
      {/* {!isLoading && coffee.length > 0 && (
        <li>
          <h2>{data.results}</h2>
          <p>Test</p>
        </li>
      )}
      {!isLoading && coffee.length === 0 && !error && <p>No coffeee</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>} */}
      {message}
      <Footer />
    </Wrapper>
  );
}
