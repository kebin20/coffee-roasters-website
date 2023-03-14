import React from "react";
import styles from "./RegistrationForm.module.css";

function RegistrationForm() {
  return (
    <form>
      <div className={styles.form__input}>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="firstname" />
      </div>
      <div className={styles.form__input}>
        <label htmlFor="first-name">LastName:</label>
        <input type="text" id="lastname" />
      </div>
    </form>
  );
}

export default RegistrationForm;
