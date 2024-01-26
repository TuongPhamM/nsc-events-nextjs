import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

// Interface for props 
// Function to handle first name change
// Function to handle first name error
interface FirstNameFieldProps {
  handleFirstNameChange: (newFirstName: string) => void;
  handleFirstNameError: (hasError: boolean) => void;
}

const FirstNameField = ({
  handleFirstNameChange,
  handleFirstNameError,
}: FirstNameFieldProps) => {
  const [firstName, setFirstName] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
    handleFirstNameChange(newFirstName);
  };

  // Validate first name
  const handleBlur = () => {
    let newError = false;
    let newErrorMessage = "";

    if (firstName === "") {
      newError = true;
      newErrorMessage = "First Name is required";
    } else if (firstName.length < 2) {
      newError = true;
      newErrorMessage = "First Name must be at least 2 characters";
    } else if (firstName.length > 30) {
      newError = true;
      newErrorMessage = "First Name must be less than 30 characters";
    } else {
      newError = false;
      newErrorMessage = "";
    }

    setError(newError);
    setErrorMessage(newErrorMessage);
    handleFirstNameError(newError);
  };

  return (
    <TextField
      id="firstName"
      label="First Name"
      variant="outlined"
      value={firstName}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      helperText={errorMessage}
      margin="normal"
      fullWidth
      required
      autoComplete="firstName"
      aria-label="first name input"
      sx={{ flexGrow: 1 }}
    />
  );
};

export default FirstNameField;
