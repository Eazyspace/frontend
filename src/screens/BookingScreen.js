import {
  AppBar,
  Button,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  StyledBookingScreen,
  StyledBookingForm,
  ButtonGroup,
  StyledButton,
  AdditionalInformation,
  FormTitle,
  StyledLink,
  SuccessTitle,
} from "./BookingScreen.styled";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import bookingRequestAPI from "../api/bookingRequestAPI";

const BookingForm = (props) => {
  const { step, switchStep, onSubmit, onChange, userInput } = props;
  const {
    startTime,
    endTime,
    info: { eventName, organization, numOfAttendants, description },
  } = userInput;

  return (
    <StyledBookingForm onSubmit={onSubmit}>
      <FormTitle>
        {step === 1
          ? "Firstly, we need the date and time"
          : step === 2
          ? "Almost there"
          : ""}
      </FormTitle>
      {step === 1 && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <input
            type="datetime-local"
            name="startTime"
            value={startTime}
            required
            onChange={onChange}
          />
          <input
            type="datetime-local"
            name="endTime"
            value={endTime}
            required
            onChange={onChange}
          />
        </div>
      )}
      {step === 2 && (
        <AdditionalInformation>
          <TextField
            label="Name of event"
            required
            id="event-name"
            name="eventName"
            value={eventName}
            autoComplete="off"
            onChange={onChange}
          />
          <TextField
            label="Organization"
            select
            inputProps={{ name: "organization" }}
            value={organization}
            onChange={onChange}
          >
            <MenuItem key={1} value="VNXK">
              VNXK
            </MenuItem>
            <MenuItem key={2} value="SAB">
              SAB
            </MenuItem>
            <MenuItem key={3} value="FAC">
              FAC
            </MenuItem>
          </TextField>
          <TextField
            label="Number of attendants"
            required
            name="numOfAttendants"
            value={numOfAttendants}
            onChange={onChange}
          />
          <TextField
            label="Description"
            multiline
            required
            name="description"
            value={description}
            onChange={onChange}
          />
        </AdditionalInformation>
      )}
      {step === 1 ? (
        <ButtonGroup>
          <StyledButton variant="outlined" value="back" onClick={switchStep}>
            Back
          </StyledButton>
          <StyledButton variant="contained" value="next" onClick={switchStep}>
            Next
          </StyledButton>
        </ButtonGroup>
      ) : (
        <StyledLink to="/booking/success">
          <StyledButton variant="contained" value="finish" onClick={onSubmit}>
            Finish
          </StyledButton>
        </StyledLink>
      )}
    </StyledBookingForm>
  );
};

const BookingScreen = (props) => {
  const userId = 1;
  const roomId = 31;
  const [step, setStep] = useState(1);
  const [userInputForm, setUserInputForm] = useState({
    date: "",
    startTime: "",
    endTime: "",
    info: {
      eventName: "",
      organization: "",
      numOfAttendants: "",
      description: "",
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSwitchStep = (e) => {
    if (e.target.value === "next") {
      if (step < 3) setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (name === "startTime" || name === "endTime")
      setUserInputForm({ ...userInputForm, [name]: value });
    else
      setUserInputForm({
        ...userInputForm,
        info: { ...userInputForm.info, [name]: value },
      });
  };

  const sendRequest = async (params) => {
    try {
      const response = await bookingRequestAPI.sendBookingRequest({
        userId: userId,
        roomId: roomId,
        ...params,
        ...params.info,
      });

      console.log(response);
    } catch (error) {
      alert("ERROR: " + error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputForm);
    userInputForm.startTime = new Date(userInputForm.startTime).toISOString();
    userInputForm.endTime = new Date(userInputForm.endTime).toISOString();

    setSubmitted(true);

    sendRequest(userInputForm);
    setUserInputForm(userInputForm);
  };

  useEffect(() => {
    if (submitted) console.log("SEND REQUEST");
  }, [submitted]);

  return (
    <StyledBookingScreen>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ padding: "15px 0px" }}
          >
            EazySpace
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {props.success ? (
        <StyledBookingForm>
          <SuccessTitle>
            <h3>Congratulations</h3>
            <h4>
              You have successfully sent a booking request! <br />
              Please give us some time to process.
            </h4>
          </SuccessTitle>
          <AccessAlarmRoundedIcon
            sx={{ fontSize: "100px" }}
            style={{ alignSelf: "center", color: "#FF8F79" }}
          />
          <StyledLink to="/">
            <StyledButton variant="contained">
              View the request status
            </StyledButton>
          </StyledLink>
          <StyledLink to="/">
            <StyledButton variant="text">Back to browsing rooms</StyledButton>
          </StyledLink>
        </StyledBookingForm>
      ) : (
        <BookingForm
          step={step}
          switchStep={handleSwitchStep}
          onSubmit={handleSubmit}
          onChange={handleChange}
          userInput={userInputForm}
        />
      )}
    </StyledBookingScreen>
  );
};

export default BookingScreen;
