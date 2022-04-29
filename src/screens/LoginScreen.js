import React from "react";
import {
  StyledLoginScreen,
  Motto,
  StyledLoginForm,
  LoginTitle,
  RegisterLine,
  RegisterLink,
  BrandAndMotto,
} from "./LoginScreen.styled";
import { Button, TextField } from "@mui/material";
import Brand from "../components/Brand";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <LoginTitle>Welcome back!</LoginTitle>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained" component={Link} to="/">
        Log in
      </Button>
      <RegisterLine>
        Don't have an account? <RegisterLink to="/register">Register here</RegisterLink>
      </RegisterLine>
    </StyledLoginForm>
  );
};

const LoginScreen = () => {
  return (
    <StyledLoginScreen>
      <BrandAndMotto>
        <Brand>EazySpace</Brand>
        <Motto>Gathering has never been easier</Motto>
      </BrandAndMotto>
      <LoginForm />
    </StyledLoginScreen>
  );
};

export default LoginScreen;
