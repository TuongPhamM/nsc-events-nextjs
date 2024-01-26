"use client";import { ChangeEventHandler, FormEventHandler, useState } from "react";import styles from "./signup-page.module.css";import Image from "next/image";import signUpFormValidationRules from "./formValidation";import { styled } from "@mui/material/styles";import NorthSeattleLogo from "../../NorthSeattleLogo.png";import FirstNameField from "./FirstNameField";

import {
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material"; 

const SignUp = () => {

  const Logo = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  }));

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const handleFirstNameChange = (newFirstName: string) => {
      setFirstName(newFirstName);
    };
    
    const handleFirstNameError = (hasError: boolean) => {
      setFirstNameError(hasError);
    };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Set initial state for user info and errors
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const { lastName, email, password, confirmPassword } = userInfo;


  // handle submit only fires when user clicks sign up
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();
    console.log("First Name:", firstName);

    // TODO: handle role better - probably need a different route for users vs admins
    const payload = {
      name: firstName + " " + lastName,
      email,
      password,
      role: "user",
    };
    // send request to backend api then log the response
    // TODO: Move this to a service file
    // TODO: Use correct URL
    // TODO: Check email is unique first then send request
    const URL = "http://159.223.203.135:3000/api/auth/signup";
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        console.log("Response from server:", data);
      }
      // TODO Should this be a token or a cookie or something else?
      localStorage.setItem("token", data.token);
      console.log("Token:", data.token);
      alert("Sign up successful!");
      // TODO redirect to profile page or home page
      // QUESTION: Are we using next.js routing or something else?
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Sign up failed!");
    }
  };

  return (
    /* Outer container */
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: styles.backgroundColor,
        px: 4,
      }}
    >
      {/* Inner container */}
      <Grid
        container
        spacing={2}
        component="main"
        justifyContent="center"
        alignItems="center"
      >
        {/* Middle element */}
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card
            elevation={8}
            sx={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              mt: 2,
              mb: 2,
            }}
          >
            <CardContent>
              <Logo>
                <Image
                  src={NorthSeattleLogo}
                  alt="North Seattle Logo"
                  width={240}
                  aria-label="North Seattle Logo"
                />
              </Logo>
              <Box
                component="form"
                onSubmit={handleSubmit}
                aria-label="Sign Up Form"
                sx={{ width: "100%", mt: 1 }}
              >
                {/* TODO: Add error handling */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <Typography
                        component="h1"
                        variant="h3"
                        sx={{ textAlign: "center", color: "#005aa7", m: 2 }}
                      >
                        Sign Up
                      </Typography>
                      <hr></hr>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 2,
                        }}
                      >
                        <FirstNameField
                          handleFirstNameChange={handleFirstNameChange}
                          handleFirstNameError={handleFirstNameError}
                        />
                        <TextField
                          fullWidth
                          margin="normal"
                          required
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lastName"
                          sx={{ flexGrow: 1 }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} margin={1}>
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <TextField
                        fullWidth
                        margin="normal"
                        required
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        style={{
                          backgroundColor: "#005aa7",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                        sx={{ mt: 2, mb: 1 }}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
