import React from "react";
import styles from "./Coffee.module.css";
import Wrapper from "../UI/Wrapper";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";

export default function Coffee(props) {
  const [coffee, setCoffee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCoffee(data.results));
    setIsLoading(false);
  }, []);

  console.log(coffee);

  return (
    <Wrapper>
      <NavBar />
      {!isLoading && coffee.length > 0 && (
        <li>
          <h2>{data.results}</h2>
          <p>Test</p>
        </li>
      )}
      {!isLoading && coffee.length === 0 && <p>No coffeee</p>}
      {isLoading && <p>Loading...</p>}
      <Footer />
    </Wrapper>
  );
}
