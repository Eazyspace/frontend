import React, { useEffect, useState } from "react";
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
import userAPI from "../api/user";

const LoginForm = ({ username, password, onChange, onLogIn }) => {
  return (
    <StyledLoginForm>
      <LoginTitle>Welcome back!</LoginTitle>
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <Button
        variant="contained"
        onClick={() => {
          onLogIn();
        }}
      >
        Log in
      </Button>
      <RegisterLine>
        Don't have an account?{" "}
        <RegisterLink to="/register">Register here</RegisterLink>
      </RegisterLine>
    </StyledLoginForm>
  );
};

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logInInputAccount = () => {
    console.log("Log in account");
    // console.table({
    //   username: username,
    //   password: password,
    // });
    userAPI.postUsernameAndPassword({
      username: username,
      password: password,
    });
  };
  const handleChangeInput = (e) => {
    let target = e.target;

    switch (target.name) {
      case "username": {
        setUsername(target.value);
        break;
      }
      case "password": {
        setPassword(target.value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledLoginScreen>
      <BrandAndMotto>
        <Brand>EazySpace</Brand>
        <Motto>Gathering has never been easier</Motto>
      </BrandAndMotto>
      <LoginForm
        username={username}
        password={password}
        onChange={handleChangeInput}
        onLogIn={logInInputAccount}
      />
    </StyledLoginScreen>
  );
};

export default LoginScreen;
