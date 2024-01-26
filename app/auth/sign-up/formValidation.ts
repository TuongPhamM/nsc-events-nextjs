// Provides form validation rules for the sign up form.
// =============================================================================
function signUpFormValidationRules () {
  return {
    name: [
      { required: true, message: 'Name is required' },
      { min: 4, message: 'Name must be at least 4 characters long' }
    ],
    email: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Email must be valid' }
    ],
    password: [
      { required: true, message: 'Password is required' },
      { min: 6, message: 'Password must be at least 6 characters long' }
    ]
  }
}
    
export default signUpFormValidationRules
/*
    // Assume no errors initially
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Validate inputs before form submission
    // TODO add more validation
    if (!firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password.length < 10) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (password.length > 20) {
      newErrors.password = "Password must be less than 20 characters";
    } else if (password.search(/[a-z]/i) < 0) {
      newErrors.password = "Password must contain at least one letter";
    } else if (password.search(/[0-9]/) < 0) {
      newErrors.password = "Password must contain at least one digit";
    } else if (password.search(/[!@#$%^&*]/) < 0) {
      newErrors.password =
        "Password must contain at least one special character";
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Update the state with the new errors
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(
      (errorMsg) => errorMsg !== ""
    );

    // If there are errors, prevent form submission
    if (hasErrors) {
      return;
    }
    */