import {
  StyledRegisterScreen,
  RegisterForm,
  RegisterContent,
  RegisterTitle,
  Stepcircle,
  Stepbar,
} from "./RegisterScreen.styled";
import {
  Navbar,
  HomeLogo,
  HomeView,
  FloorBtn,
  Content,
  UserTitleButton,
} from "./HomeScreen.styled";
import { Typography, TextField, Button } from "@mui/material";
import useWindowDimensions from "../components/Windowdimension";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ezBlue, ezGrey } from "../utils/colors";
import { Header } from "../components/Header";

function RegisterScreen() {
  const { height, width } = useWindowDimensions();
  const [step, setStep] = useState(0);
  const [direct, setDirect] = useState(false);
  const [click, setClick] = useState(false);
  const [userInputForm, setUserInputForm] = useState({
    // Regist1
    name: "",
    birthday: "",
    phoneNumber: "",
    // Regist2
    academicId: "",
    email: "",
    faculty: "",
    organization: "",
    // Regist3
    username: "",
    password: "",
    passwordConfirm: "",
  });
  console.log(width);

  console.log(step);
  const nextStep = () => {
    setDirect(true);
    setClick(true);
    setStep(step + 1);
  };
  const backStep = () => {
    setDirect(false);
    setClick(true);
    setStep(step - 1);
  };
  const handleChange = (e) => {
    let target = e.target;

    setUserInputForm({ ...userInputForm, [target.name]: target.value });
  };

  useEffect(() => {
    console.table(userInputForm);
  }, [userInputForm]);

  const Regist1 = () => {
    return (
      <motion.div
        initial={
          click && direct
            ? { x: 200, opacity: 0 }
            : click && !direct
            ? { x: -200, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RegisterForm onMouseEnter={() => setClick(false)}>
          <Typography variant="h4" textAlign={"center"} marginTop={"2vh"}>
            Enter your basic Info
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "25vh",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <TextField
              label="Full name"
              name="name"
              onChange={handleChange}
              value={userInputForm.name}
            />
            <TextField
              label="Birthday"
              name="birthday"
              onChange={handleChange}
              value={userInputForm.birthday}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              value={userInputForm.phoneNumber}
            />
          </div>
          <Button
            variant="contained"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
            component={Link}
            to="/"
            onClick={() => nextStep()}
          >
            <Typography>Next</Typography>
          </Button>
        </RegisterForm>
      </motion.div>
    );
  };
  const Regist2 = ({ academicId, email, faculty, organization }) => {
    return (
      <motion.div
        initial={
          click && direct
            ? { x: 200, opacity: 0 }
            : click && !direct
            ? { x: -200, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RegisterForm onMouseEnter={() => setClick(false)}>
          <Typography variant="h4" textAlign={"center"} marginTop={"2vh"}>
            Enter your academic Info
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "35vh",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <TextField
              label="Student ID"
              name="academicId"
              onChange={handleChange}
              value={userInputForm.academicId}
            />
            <TextField
              label="Academic email"
              name="email"
              onChange={handleChange}
              value={userInputForm.email}
            />
            <TextField
              label="Faculty"
              name="faculty"
              onChange={handleChange}
              value={userInputForm.faculty}
            />
            <TextField
              label="Club"
              name="organization"
              onChange={handleChange}
              value={userInputForm.organization}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
              component={Link}
              to="/"
              onClick={() => backStep()}
            >
              <Typography>Back</Typography>
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
              component={Link}
              to="/"
              onClick={() => nextStep()}
            >
              <Typography>Next</Typography>
            </Button>
          </div>
        </RegisterForm>
      </motion.div>
    );
  };
  const Regist3 = ({ username, password, passwordConfirm }) => {
    return (
      <motion.div
        initial={
          click && direct
            ? { x: 200, opacity: 0 }
            : click && !direct
            ? { x: -200, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RegisterForm onMouseEnter={() => setClick(false)}>
          <Typography variant="h4" textAlign={"center"} marginTop={"2vh"}>
            Enter your acount Info
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "35vh",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <TextField
              label="Username"
              name="username"
              onChange={handleChange}
              value={userInputForm.username}
            />
            <TextField
              label="Password"
              name="password"
              onChange={handleChange}
              value={userInputForm.password}
            />
            <TextField
              label="Confirm Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={userInputForm.passwordConfirm}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
              component={Link}
              to="/"
              onClick={() => backStep()}
            >
              <Typography>Back</Typography>
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
              component={Link}
              to="/"
              onClick={() => nextStep()}
            >
              <Typography>Next</Typography>
            </Button>
          </div>
        </RegisterForm>
      </motion.div>
    );
  };
  const Regist4 = () => {
    return (
      <motion.div
        initial={
          click && direct
            ? { x: 200, opacity: 0 }
            : click && !direct
            ? { x: -200, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RegisterForm onMouseEnter={() => setClick(false)}>
          <Typography variant="h5" textAlign={"center"} margin={"2vh"}>
            We have sent an activation link to your email v***@gmail.com. Please
            activate in order to fully explore all of our features.
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "7vh",
              marginRight: "7vh",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Didn't see the link? Resend Email</Typography>
          </div>
        </RegisterForm>
      </motion.div>
    );
  };
  return (
    <StyledRegisterScreen>
      <Header />
      <RegisterContent>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "3rem" }}
        >
          <Stepcircle contents={ezBlue} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stepbar contents={step > 0 ? ezBlue : ezGrey} />
          </div>
          <Stepcircle contents={step > 0 ? ezBlue : ezGrey} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stepbar contents={step > 1 ? ezBlue : ezGrey} />
          </div>
          <Stepcircle contents={step > 1 ? ezBlue : ezGrey} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Stepbar contents={step > 2 ? ezBlue : ezGrey} />
          </div>
          <Stepcircle contents={step > 2 ? ezBlue : ezGrey} />
        </div>
        {step === 0 ? (
          <Regist1 />
        ) : step == 1 ? (
          <Regist2 />
        ) : step == 2 ? (
          <Regist3 />
        ) : step == 3 ? (
          <Regist4 />
        ) : (
          <div />
        )}
      </RegisterContent>
    </StyledRegisterScreen>
  );
}

export default RegisterScreen;
