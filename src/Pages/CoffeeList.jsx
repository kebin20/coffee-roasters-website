import React from 'react';
import styles from './Coffee.module.css';
import Wrapper from '../UI/Wrapper';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Coffee from './Coffee';

export default function CoffeeList(props) {
  return (
    <Wrapper>
      <NavBar />
      <section>
        <h1>Common Coffees</h1>
        <ul className={styles.coffeeList}>
          {props.coffees.map((coffee) => {
            <Coffee
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              image={coffee.image}
            />;
          })}
        </ul>
      </section>
      <Footer />
    </Wrapper>
  );
}
