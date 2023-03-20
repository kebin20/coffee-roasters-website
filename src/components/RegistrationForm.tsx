import React from "react";
import MainButton from "../UI/MainButton";
import useInput from "../hooks/use-input";
import styles from "./RegistrationForm.module.css";

function notEmpty(value) {
  value.trim() !== "";
}

function isEmail(value) {
  value.trim() !== "" && value.includes("@");
}

//https://stackoverflow.com/questions/72462253/how-to-set-password-validation-in-react
function isPassword(value) {
  value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[^a-zA-Z]/.test(value) &&
    /[0-9]/.test(value);
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
    : styles.formControl;

  const lastNameInputClasses = lastNameInputHasError
    ? styles.formControlInvalid
    : styles.formControl;

  const emailInputClasses = emailInputHasError
    ? styles.formControlInvalid
    : styles.formControl;

  const passwordInputClasses = passwordInputHasError
    ? styles.formControlInvalid
    : styles.formControl;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={styles.formInputGroup}>
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">First Name:</label>
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
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Last Name:</label>
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
        <div className={emailInputClasses}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={styles.errorText}>Email must not be empty.</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="first-name">Password:</label>
          <input
            type="text"
            id="password"
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordInputHasError && (
            <p className={styles.errorText}>Password must not be empty.</p>
          )}
        </div>
      </div>
      <div className={styles.submitFormButton}>
        <MainButton disabled={!formIsValid}>Register</MainButton>
      </div>
    </form>
  );
}

export default RegistrationForm;
