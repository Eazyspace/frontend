import React from "react";
import {
  StyledLoginScreen,
  Motto,
  StyledLoginForm,
  LoginTitle,
  RegisterLine,
  RegisterNow,
  BrandAndMotto,
} from "./LoginScreen.styled";
import { Button, TextField } from "@mui/material";
import Brand from "../components/Brand";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <LoginTitle>Welcome back!</LoginTitle>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained">Log in</Button>
      <RegisterLine>
        Don't have an account? <RegisterNow to="/">Register here</RegisterNow>
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
