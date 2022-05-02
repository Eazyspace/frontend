import {
  AppBar,
  Button,
  Divider,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  StyledBookingScreen,
  StyledForm,
  ButtonGroup,
  StyledButton,
  AdditionalInformation,
  FormTitle,
  StyledLink,
  SuccessTitle,
  RowLine,
  UserAndRoom,
  ContentSection,
  DescriptionField,
} from "./BookingScreen.styled";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import requestAPI from "../api/request";
import { ezBlack, ezGrey } from "../utils/colors";
import ProfileAvatar from "../components/ProfileAvatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RoomAvatar from "../components/RoomAvatar";
import { useLocation } from "react-router-dom";
import userAPI from "../api/user";

const BookingForm = (props) => {
  const { step, switchStep, onSubmit, onChange, userInput } = props;
  const {
    startTime,
    endTime,
    info: { eventName, organization, numOfAttendants, description },
  } = userInput;

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormTitle>
        {step === 1
          ? "Firstly, we need the date and time"
          : step === 2
          ? "Almost there"
          : ""}
      </FormTitle>
      {step === 1 ? (
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
      ) : step === 2 ? (
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
      ) : (
        <></>
      )}
      {step !== 3 && (
        <ButtonGroup>
          {step !== 1 && (
            <StyledButton variant="text" value="back" onClick={switchStep}>
              Back
            </StyledButton>
          )}
          <StyledButton variant="contained" value="next" onClick={switchStep}>
            Next
          </StyledButton>
        </ButtonGroup>
      )}
    </StyledForm>
  );
};

const SummaryAndConfirmForm = (props) => {
  const { roomId, userInput, switchStep, onSubmit } = props;
  const {
    startTime,
    endTime,
    info: { eventName, organization, numOfAttendants, description },
  } = userInput;

  return (
    <StyledForm variant="summary">
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        We made it! Here is a small recap.
      </Typography>
      <UserAndRoom>
        <ProfileAvatar />
        <MoreHorizIcon sx={{ color: ezGrey }} />
        <RoomAvatar roomId={roomId} />
      </UserAndRoom>
      <RowLine>
        <Typography variant="body1" color={ezGrey}>
          Date
        </Typography>
        <Typography variant="body1" color={ezBlack}>
          {new Date(startTime).toDateString()}
        </Typography>
      </RowLine>
      <Divider />
      <RowLine>
        <Typography variant="body1" color={ezGrey}>
          Time
        </Typography>
        <Typography variant="body1" color={ezBlack}>
          {new Date(startTime).toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {new Date(endTime).toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </RowLine>
      <Divider />
      <RowLine>
        <Typography variant="body1" color={ezGrey}>
          Event name
        </Typography>
        <Typography variant="body1" color={ezBlack}>
          {eventName}
        </Typography>
      </RowLine>
      <Divider />
      {organization !== "" && (
        <>
          <RowLine>
            <Typography variant="body1" color={ezGrey}>
              Organization
            </Typography>
            <Typography variant="body1" color={ezBlack}>
              {eventName}
            </Typography>
          </RowLine>
          <Divider />
        </>
      )}
      <RowLine>
        <Typography variant="body1" color={ezGrey}>
          Number of participants
        </Typography>
        <Typography variant="body1" color={ezBlack}>
          {numOfAttendants}
        </Typography>
      </RowLine>
      <Divider />
      <DescriptionField>
        <Typography variant="body1" color={ezGrey}>
          Description
        </Typography>
        <Typography variant="body1" color={ezBlack}>
          {description}
        </Typography>
      </DescriptionField>
      <ButtonGroup>
        <StyledButton value="back" onClick={switchStep}>
          Back to filling
        </StyledButton>
        <StyledButton variant="contained" onClick={onSubmit}>
          Confirm booking
        </StyledButton>
      </ButtonGroup>
    </StyledForm>
  );
};

const SuccessForm = (props) => {
  return (
    <StyledForm>
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
        <StyledButton variant="contained">View the request status</StyledButton>
      </StyledLink>
      <StyledLink to="/">
        <StyledButton variant="text">Back to browsing rooms</StyledButton>
      </StyledLink>
    </StyledForm>
  );
};

const BookingScreen = (props) => {
  const { state } = useLocation();
  const { roomId } = state; // ? Not sure if it works ?
  const userId = -1;
  const [step, setStep] = useState(1);
  const [userInputForm, setUserInputForm] = useState({
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
    let value = e.target.value;
    console.log(userInputForm);
    if (value === "next") {
      switch (step) {
        case 1: {
          let { startTime, endTime } = userInputForm;

          if (startTime !== "" && endTime !== "") setStep(step + 1);
          else alert("ERROR: No datetime");

          break;
        }
        case 2: {
          let { eventName, numOfAttendants, description } = userInputForm;

          if (eventName !== "" && numOfAttendants !== "" && description !== "")
            setStep(step + 1);
          else alert("ERROR: No info");

          break;
        }
        default:
          break;
      }
    } else if (value === "back") {
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

  const sendRequest = async () => {
    try {
      const response = await requestAPI.sendBookingRequest({
        userId: userId,
        roomId: roomId,
        ...userInputForm,
        ...userInputForm.info,
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

    sendRequest();
    setUserInputForm(userInputForm);
  };

  const getUserId = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        console.log(res.data[0]);
        let userInfo = res.data[0];
        return userInfo.userId;
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (submitted) console.log("SEND REQUEST");
  }, [submitted]);

  useEffect(() => {
    userId = getUserId(); // TODO: Get the user ID and init userId
  }, []);

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
          <Button sx={{ backgroundColor: "transparent", color: "white" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <ContentSection>
        {props.success ? (
          <SuccessForm />
        ) : step !== 3 ? (
          <BookingForm
            step={step}
            switchStep={handleSwitchStep}
            onChange={handleChange}
            userInput={userInputForm}
          />
        ) : (
          <SummaryAndConfirmForm
            roomId={roomId}
            userInput={userInputForm}
            switchStep={handleSwitchStep}
            onSubmit={handleSubmit}
          />
        )}
      </ContentSection>
    </StyledBookingScreen>
  );
};

export default BookingScreen;
