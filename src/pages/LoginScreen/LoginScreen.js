import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../api/auth";
import userAPI from "../../api/user";
import Brand from "../../components/Brand/Brand";
import {
  BrandAndMotto,
  LoginTitle,
  Motto,
  RegisterLine,
  RegisterLink,
  StyledLoginForm,
  StyledLoginScreen,
} from "./LoginScreen.styled";

const LoginForm = ({
  academicId,
  password,
  onChange,
  onLogIn,
  onAccountIsInvalid,
}) => {
  const [loading, setLoading] = useState(false);

  const handleLogInClick = async (e) => {
    setLoading(true);
    await onLogIn(e);
    setLoading(false);
  };

  if (loading)
    return (
      <Box
        sx={{
          minWidth: "20em",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <StyledLoginForm>
      <LoginTitle>Welcome back!</LoginTitle>
      <TextField
        label="Academic ID"
        name="academicId"
        value={academicId}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogInClick(e);
          }
        }}
        error={onAccountIsInvalid}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogInClick(e);
          }
        }}
        error={onAccountIsInvalid}
      />
      <Button variant="contained" onClick={handleLogInClick}>
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
  const [academicId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountIsInvalid, setAccountIsInvalid] = useState(false);
  const navigate = useNavigate();

  const logIn = async () => {
    console.group("Log in account");
    let res = await authAPI.logIn(academicId, password);
    console.log(res);
    console.groupEnd();
    if (res.status === "OK") {
      sessionStorage.setItem("jwtToken", res.data.token);
      return true;
    } else {
      return false;
    }
  };
  const handleOnLogIn = async (e) => {
    e.preventDefault();
    if (await logIn()) {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        console.log(res.data);
        let userInfo = res.data;

        if (userInfo.role === 3) navigate("/admin");
        else navigate("/");
      }
    } else {
      // Handle log in failed
      setAccountIsInvalid(true);
      // alert("LOG IN FAILED");
    }
  };
  const handleChangeInput = (e) => {
    let target = e.target;
    switch (target.name) {
      case "academicId": {
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

  useEffect(() => {
    if (authAPI.checkLoggedIn()) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledLoginScreen>
      <BrandAndMotto>
        <Brand>EazySpace</Brand>
        <Motto>Gathering has never been easier</Motto>
      </BrandAndMotto>
      <LoginForm
        academicId={academicId}
        password={password}
        onChange={handleChangeInput}
        onLogIn={handleOnLogIn}
        onAccountIsInvalid={accountIsInvalid}
      />
    </StyledLoginScreen>
  );
};

export default LoginScreen;
