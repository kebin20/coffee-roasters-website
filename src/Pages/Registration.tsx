import React from "react";
import styles from "./Registration.module.css";

import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import RegistrationForm from "../components/RegistrationForm";

function Registration() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles.registrationHero}>
          <h1 className={styles.registrationHeroTitle}>
            Register with us today
          </h1>
        </div>
        <RegistrationForm />
        <Footer />
      </main>
    </>
  );
}

export default Registration;
