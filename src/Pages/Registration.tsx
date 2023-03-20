import React from "react";
import styles from "./Registration.module.css";

import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import RegistrationForm from "../components/RegistrationForm";
import Wrapper from "../UI/Wrapper";

function Registration() {
  return (
    <>
      <NavBar />
      <main>
        <Wrapper>
          <div className={styles.registrationHero}>
            <h1 className={styles.registrationHeroTitle}>
              Register with us today
            </h1>
            <p className={styles.registrationHeroText}>
              Register with us today to keep track of your orders and
              subscription as well as receive special news and offers weekly.
            </p>
          </div>
          <RegistrationForm />
        </Wrapper>
        <Footer />
      </main>
    </>
  );
}

export default Registration;
