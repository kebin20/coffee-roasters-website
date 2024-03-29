import React from "react";
import MainButton from "../UI/MainButton";
import useInput from "../hooks/use-input";
import styles from "./RegistrationForm.module.css";

function notEmpty(value: string) {
  return value.trim() !== "";
}

function isEmail(value: string) {
  return value.trim() !== "" && value.includes("@");
}

//https://stackoverflow.com/questions/72462253/how-to-set-password-validation-in-react
function isPassword(value: string) {
  return (
    value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[^a-zA-Z]/.test(value) &&
    /[0-9]/.test(value)
  );
}

function RegistrationForm() {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(notEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(notEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);

  //Form validation check
  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  function formSubmissionHandler(event) {
    event.preventDefault();

    if (!formIsValid) return;

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  }

  const firstNameInputClasses = firstNameInputHasError
    ? styles.formControlInvalid
    : "";

  const lastNameInputClasses = lastNameInputHasError
    ? styles.formControlInvalid
    : "";

  const emailInputClasses = emailInputHasError ? styles.formControlInvalid : "";

  const passwordInputClasses = passwordInputHasError
    ? styles.formControlInvalid
    : "";

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <div className={styles.formInputGroup}>
        <p className={styles.formDescription}>
          Please fill the form below. Fields marked with * are required.
        </p>
        <div className={`${firstNameInputClasses} ${styles.formControl}`}>
          <label htmlFor="first-name">First Name*:</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className={styles.errorText}>First name must not be empty.</p>
          )}
        </div>
        <div className={`${lastNameInputClasses} ${styles.formControl}`}>
          <label htmlFor="last-name">Last Name*:</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className={styles.errorText}>Last name must not be empty.</p>
          )}
        </div>
        <div className={`${emailInputClasses} ${styles.formControl}`}>
          <label htmlFor="email">Email*:</label>
          <input
            type="text"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={styles.errorText}>
              Email must not be empty and must contain an @ symbol.
            </p>
          )}
        </div>
        <div className={`${passwordInputClasses} ${styles.formControl}`}>
          <label htmlFor="first-name">Password*:</label>
          <input
            type="text"
            id="password"
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordInputHasError && (
            <p className={styles.errorText}>
              Password must contain: <br />
              - One capital letter one special character
              <br />
              - One number
              <br />- Minimum length of 8 characters
            </p>
          )}
        </div>
      </div>
      <div>
        <MainButton disabled={!formIsValid}>Register</MainButton>
      </div>
    </form>
  );
}

export default RegistrationForm;
