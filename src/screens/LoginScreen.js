import React from "react";
import { StyledLoginScreen } from "./LoginScreen.styled";
import LoginForm from "../components/login/LoginForm";
import BrandTitle from "../components/login/BrandTitle";

const LoginScreen = () => {
  return (
    <StyledLoginScreen>
      <BrandTitle />
      <LoginForm />
    </StyledLoginScreen>
  );
};
export default LoginScreen;
