import {
  StyledRegisterScreen,
  RegisterForm,
  RegisterContent,
  Stepcircle,
  Stepbar,
} from "./RegisterScreen.styled";
import {
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ezBlue, ezGrey } from "../utils/colors";
import Header from "../components/Header";
import authAPI from "../api/auth";

const Regist1 = ({
  click,
  setClick,
  direct,
  onChange,
  userInputForm,
  userValidInput,
  nextStep,
}) => {
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
            onChange={onChange}
            error={!userValidInput.name}
            value={userInputForm.name}
            required
          />
          <TextField
            label="Birthday"
            name="birthday"
            type="date"
            onChange={onChange}
            error={!userValidInput.birthday}
            value={userInputForm.birthday}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            onChange={onChange}
            error={!userValidInput.phoneNumber}
            value={userInputForm.phoneNumber}
            required
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
const Regist2 = ({
  click,
  setClick,
  direct,
  onChange,
  userInputForm,
  userValidInput,
  nextStep,
  backStep,
}) => {
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
            required
            onChange={onChange}
            error={!userValidInput.academicId}
            value={userInputForm.academicId}
          />
          <TextField
            label="Academic email"
            name="email"
            type="email"
            required
            onChange={onChange}
            error={!userValidInput.email}
            value={userInputForm.email}
          />
          <TextField
            label="Faculty"
            name="faculty"
            required
            onChange={onChange}
            error={!userValidInput.faculty}
            value={userInputForm.faculty}
          />
          <TextField
            label="Club/Organization"
            name="organization"
            onChange={onChange}
            error={!userValidInput.organization}
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
const Regist3 = ({
  click,
  setClick,
  direct,
  onChange,
  userInputForm,
  userValidInput,
  backStep,
  onSubmit,
}) => {
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
            required
            onChange={onChange}
            error={!userValidInput.username}
            value={userInputForm.username}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            required
            onChange={onChange}
            error={!userValidInput.password}
            value={userInputForm.password}
          />
          <TextField
            label="Confirm password"
            name="passwordConfirm"
            type="password"
            required
            onChange={onChange}
            error={!userValidInput.passwordConfirm}
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
            onClick={() => onSubmit()}
          >
            <Typography>Finish</Typography>
          </Button>
        </div>
      </RegisterForm>
    </motion.div>
  );
};
const Regist4 = ({ click, setClick, direct, userInputForm }) => {
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
          We have sent an activation link to your email {userInputForm.email}.
          Please activate in order to fully explore all of our features.
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

function RegisterScreen() {
  const [step, setStep] = useState(0);
  const [direct, setDirect] = useState(false);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const [userValidInput, setUserValidInput] = useState({
    // Regist1
    name: true,
    birthday: true,
    phoneNumber: true,
    // Regist2
    academicId: true,
    email: true,
    faculty: true,
    organization: true,
    // Regist3
    username: true,
    password: true,
    passwordConfirm: true,
  });

  // console.log(step);
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
  const validateInput = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    if (target.required && !value)
      setUserValidInput({ ...userValidInput, [name]: false });
    else setUserValidInput({ ...userValidInput, [name]: true });

    // switch (name) {
    // }
  };
  const handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    validateInput(e);

    setUserInputForm({ ...userInputForm, [name]: value });
  };
  const handleSubmit = async () => {
    // console.group("SUBMITTED");
    // console.table(userInputForm);
    // console.groupEnd();
    setLoading(true);
    try {
      let response = await authAPI.registerNewAccount(userInputForm);

      if (response.status === "OK") {
        console.group("Successfully created account");
        console.table(response.data);
        console.groupEnd();

        nextStep();
      }
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const Loader = () => (
    <Box
      sx={{
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
    <StyledRegisterScreen>
      <Header />
      {loading ? (
        <Loader />
      ) : (
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
            <Regist1
              click={click}
              setClick={setClick}
              direct={direct}
              onChange={handleChange}
              userInputForm={userInputForm}
              userValidInput={userValidInput}
              nextStep={nextStep}
            />
          ) : step === 1 ? (
            <Regist2
              click={click}
              setClick={setClick}
              direct={direct}
              onChange={handleChange}
              userInputForm={userInputForm}
              userValidInput={userValidInput}
              nextStep={nextStep}
              backStep={backStep}
            />
          ) : step === 2 ? (
            <Regist3
              click={click}
              setClick={setClick}
              direct={direct}
              onChange={handleChange}
              userInputForm={userInputForm}
              userValidInput={userValidInput}
              backStep={backStep}
              onSubmit={handleSubmit}
            />
          ) : step === 3 ? (
            <Regist4
              click={click}
              setClick={setClick}
              direct={direct}
              userInputForm={userInputForm}
            />
          ) : (
            <div />
          )}
        </RegisterContent>
      )}
    </StyledRegisterScreen>
  );
}

export default RegisterScreen;
