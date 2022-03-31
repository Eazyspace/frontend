import { Button, TextField } from "@mui/material";
import {
  StyledLoginForm,
  Title,
  RegisterLine,
  RegisterNow,
} from "./LoginForm.style";

function LoginForm() {
  return (
    <StyledLoginForm>
      <Title>Welcome back!</Title>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained">Log in</Button>
      <RegisterLine>
        Don't have an account? <RegisterNow to="/">Register here</RegisterNow>
      </RegisterLine>
    </StyledLoginForm>
  );
}

export default LoginForm;
