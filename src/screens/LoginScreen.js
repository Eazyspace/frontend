import React, { useState } from "react";
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
import authAPI from "../api/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ username, password, onChange, onLogIn }) => {
  return (
    <StyledLoginForm>
      <LoginTitle>Welcome back!</LoginTitle>
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onLogIn(e);
          }
        }}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onLogIn(e);
          }
        }}
      />
      <Button variant="contained" onClick={onLogIn}>
        Log in
      </Button>
      <RegisterLine>
        Don't have an account?{" "}
        <RegisterLink to="/register">Register here</RegisterLink>
      </RegisterLine>
    </StyledLoginForm>
  );
};

const LoginScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logInInputAccount = async () => {
    console.group("Log in account");
    let res = await authAPI.logIn(username, password);
    console.log(res);
    if (res.status === "OK") {
      sessionStorage.setItem("jwtToken", res.data.token);
      console.groupEnd();
      return true;
    } else {
      console.error("Cannot log in");
      console.groupEnd();
      return false;
    }
  };
  const handleOnLogIn = async (e) => {
    e.preventDefault();
    if (await logInInputAccount()) {
      navigate("/user");
    } else {
      // Handle log in failed
    }
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
        onLogIn={handleOnLogIn}
      />
    </StyledLoginScreen>
  );
};

export default LoginScreen;
