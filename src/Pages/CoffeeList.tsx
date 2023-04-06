import React from "react";
import styles from "./CoffeeList.module.css";
import Wrapper from "../UI/Wrapper";
import Footer from "../Layout/Footer";
import Coffee from "../components/Coffee";
import { CoffeeItemType } from "src/interfaces";

export default function CoffeeList({ coffees }) {
  return (
    <>
      <main>
        <Wrapper>
          <section className={styles.coffeeHeroContainer}>
            <h1 className={styles.coffeeHeroTitle}>Common Coffee Drinks</h1>
            <p className={styles.coffeeHeroText}>
              Welcome to our guide on the many different types of coffee!
              Whether you're a seasoned coffee drinker or just starting out,
              there's always something new to learn about this popular beverage.
            </p>
          </section>
          <section className={styles.coffeeListContainer}>
            <h2 className={styles.coffeeListTitle}>
              What kind of coffees are there?
            </h2>
            <ul className={styles.coffeeList}>
              {coffees.map((coffee: CoffeeItemType) => {
                return (
                  <Coffee
                    key={coffee.id}
                    title={coffee.title}
                    description={coffee.description}
                    image={coffee.image}
                  />
                );
              })}
            </ul>
          </section>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
