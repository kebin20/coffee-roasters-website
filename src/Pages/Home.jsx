import React from "react";
import styles from "./Home.module.css";
import MainButton from "../UI/MainButton";
import NavBar from "../UI/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles.homeHeroContainer}>
          <h1 className={styles.homeHeroTitle}>Great coffee made simple.</h1>
          <p className={styles.homeHeroText}>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <MainButton>Create your plan</MainButton>
        </div>
      </main>
    </>
  );
}
