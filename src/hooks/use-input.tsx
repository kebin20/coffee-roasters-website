import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
