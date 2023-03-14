import React from "react";
import styles from "./Registration.module.css";

import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import RegistrationForm from "../components/RegistrationForm";

function Registration() {
  return (
    <>
      <NavBar />
      <h1 className={styles.registration__title}>Register with us today</h1>
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default Registration;
