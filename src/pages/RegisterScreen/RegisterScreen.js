import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import authAPI from "../../api/auth";
import Header from "../../components/Header/Header";
import { ezBlue, ezGrey, ezRed } from "../../utils/colors";
import {
  RegisterContent,
  RegisterForm,
  Stepbar,
  Stepcircle,
  StyledRegisterScreen,
} from "./RegisterScreen.styled";

const Regist1 = ({
  click,
  setClick,
  direct,
  onChange,
  userInputForm,
  userValidInput,
  nextStep,
  valid,
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
          {valid? <></>:<Typography style={{color:ezRed,marginTop:'0.5rem',marginLeft:'0.5rem'}} variant={"caption"}>
            Not enough information</Typography>}
        </div>
        <Button
          variant="contained"
          style={{ marginLeft: "3rem", marginRight: "3rem" }}
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
  valid
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
          {/* <TextField
            label="Club/Organization"
            name="organization"
            onChange={onChange}
            error={!userValidInput.organization}
            value={userInputForm.organization}
          /> */}
           {valid? <></>:<Typography style={{color:ezRed,marginTop:'0.5rem',marginLeft:'0.5rem'}} variant={"caption"}>
            Not enough information</Typography>}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
            onClick={() => backStep()}
          >
            <Typography>Back</Typography>
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
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
  valid
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
           {valid? <></>:<Typography style={{color:ezRed,marginTop:'0.5rem',marginLeft:'0.5rem'}} variant={"caption"}>
            Not enough information or password too short/wrong confirm password</Typography>}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
            onClick={() => backStep()}
          >
            <Typography>Back</Typography>
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "3rem", marginRight: "3rem", width: "50vw" }}
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
  const [isValid, setValid]= useState(true);
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
    //// organization: "",
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
    //// organization: true, 
    // Regist3
    username: true,
    password: true,
    passwordConfirm: true,
  });

  // console.log(step);
  const nextStep = () => {
    const namevalid=userInputForm.name!==""? true: false;
    const dobvalid=userInputForm.birthday!==""?true:false;
    const phonevalid=userInputForm.phoneNumber!==""?true:false;
    const idvalid=userInputForm.academicId!==""?true:false;
    const emailvalid=userInputForm.email!==""?true:false;
    const falvalid=userInputForm.faculty!==""?true:false;
    const usernamevalid=userInputForm.username!==""?true:false;
    const passwordvalid=userInputForm.password!==""&&userInputForm.password.length>=8?true:false;
    const passwordconfirmvalid=userInputForm.passwordConfirm!==""
    &&userInputForm.passwordConfirm===userInputForm.password                         
    ?true:false;

    switch(step){
      case 0:
        if(namevalid&&dobvalid&&phonevalid){
          setDirect(true);
          setClick(true);
          setStep(step + 1);
          setValid(true);
        }
        else setValid(false);
        break;
      case 1:
        if(idvalid&&emailvalid&&falvalid){
          setDirect(true);
          setClick(true);
          setStep(step + 1);
          setValid(true);
        }
        else setValid(false);
      case 2: 
        if(usernamevalid&&passwordvalid&&passwordconfirmvalid){
          setDirect(true);
          setClick(true);
          setStep(step + 1);
          setValid(true);
        }
        else setValid(false);
      default:
        break;

    }
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
              valid={isValid}
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
              valid={isValid}
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
              valid={isValid}
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
