import React from "react";
import styles from "./CoffeeList.module.css";
import Wrapper from "../UI/Wrapper";
import Coffee from "../components/Coffee";
import { CoffeeItemProps } from "src/interfaces";

export default function CoffeeList({
  coffees,
}: {
  coffees: CoffeeItemProps[];
}) {
  console.log(coffees.length);

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
            <ul className={styles.coffeeList} role="list">
              {coffees.map((coffee) => {
                return (
                  <Coffee
                    key={coffee.id}
                    title={coffee.title}
                    description={coffee.description}
                    image={coffee.image}
                    ingredients={coffee.ingredients}
                  />
                );
              })}
            </ul>
          </section>
        </Wrapper>
      </main>
    </>
  );
}
