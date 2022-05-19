import {
  AppBar,
  Button,
  Divider,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Box,
  CircularProgress,
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
  DateTimePickersGroup,
} from "./BookingScreen.styled";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import requestAPI from "../api/request";
import { ezBlack, ezGrey } from "../utils/colors";
import ProfileAvatar from "../components/ProfileAvatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RoomAvatar from "../components/RoomAvatar";
import { useLocation, useNavigate } from "react-router-dom";
import userAPI from "../api/user";
import Header from "../components/Header";

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
        <DateTimePickersGroup>
          <TextField
            type="datetime-local"
            name="startTime"
            value={startTime}
            required
            onChange={onChange}
          />
          <TextField
            type="datetime-local"
            name="endTime"
            value={endTime}
            required
            onChange={onChange}
          />
        </DateTimePickersGroup>
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
          <FormControl fullWidth>
            <InputLabel id="organization-select-label">Organization</InputLabel>
            <Select
              labelId="organization-select-label"
              id="organization-select"
              inputProps={{ name: "organization" }}
              value={organization}
              label="Organization"
              onChange={onChange}
            >
              <MenuItem value="VNXK">VNXK</MenuItem>
              <MenuItem value="SAB">SAB</MenuItem>
              <MenuItem value="FAC">FAC</MenuItem>
            </Select>
          </FormControl>
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
  const { userInfo, roomId, userInput, switchStep, onSubmit } = props;
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
        <ProfileAvatar
          name={userInfo.name}
          src={userInfo.avatar}
          sx={{
            width: "4rem",
            height: "4rem",
          }}
        />
        <MoreHorizIcon sx={{ color: ezGrey }} />
        <RoomAvatar
          roomId={roomId}
          sx={{
            width: "2rem",
            height: "2rem",
          }}
        />
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
              {organization}
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

const SuccessForm = () => {
  return (
    <StyledForm>
      <SuccessTitle>
        <Typography variant="h3" sx={{ width: "100%", textAlign: "center" }}>
          Congratulations
        </Typography>
        <Typography variant="body1">
          You have successfully sent a booking request! <br />
          Please give us some time to process.
        </Typography>
      </SuccessTitle>
      <AccessAlarmRoundedIcon
        sx={{ fontSize: "10rem" }}
        style={{ alignSelf: "center", color: "#FF8F79" }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <StyledLink to="/user">
          <StyledButton variant="contained">
            View the request status
          </StyledButton>
        </StyledLink>
        <StyledLink to="/">
          <StyledButton variant="text">Back to browsing rooms</StyledButton>
        </StyledLink>
      </div>
    </StyledForm>
  );
};

const BookingScreen = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { roomId } = state;
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
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  /** EVENT HANDLERS */
  const handleSwitchStep = (e) => {
    let value = e.target.value;
    console.log(userInputForm);
    if (value === "next") {
      switch (step) {
        case 1: {
          let { startTime, endTime } = userInputForm;

          if (!startTime || !endTime)
            alert("Please choose a start time and an end time");
          else if (new Date(startTime).getTime() >= new Date(endTime).getTime())
            alert("The start time cannot be later than the end time");
          else setStep(step + 1);

          break;
        }
        case 2: {
          let { eventName, numOfAttendants, description } = userInputForm.info;

          if (!eventName) alert("Please enter event name");
          else if (!numOfAttendants)
            alert("Please enter the number of attendants");
          else if (!description)
            alert("Please explain your event in the description");
          else setStep(step + 1);

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
    if (name === "startTime")
      setUserInputForm({ ...userInputForm, startTime: value, endTime: value });
    else if (name === "endTime")
      setUserInputForm({ ...userInputForm, endTime: value });
    else
      setUserInputForm({
        ...userInputForm,
        info: { ...userInputForm.info, [name]: value },
      });
  };
  const handleSubmit = async (e) => {
    setLoading(true);

    console.log(userInputForm);
    if (await sendRequest())
      navigate("/booking/success", { state: { roomId: roomId } });
    else alert("Cannot submit form");

    setLoading(false);
  };

  /** UTILS */
  const sendRequest = async () => {
    console.group("sendRequest()");
    try {
      const response = await requestAPI.sendBookingRequest({
        userId: userInfo.userId,
        roomId: roomId,
        ...userInputForm,
        ...userInputForm.info,
        startTime: new Date(userInputForm.startTime).toISOString(),
        endTime: new Date(userInputForm.endTime).toISOString(),
      });

      if (response && response.status === "OK") {
        console.log("SUCCESSFULLY SEND BOOKING REQUEST");
        console.groupEnd();
        return true;
      } else {
        console.error(response);
        console.groupEnd();
        return false;
      }
    } catch (error) {
      console.error(error);
      console.groupEnd();
      return false;
    }
  };

  const getUserInfo = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        let userInfo = res.data;
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log("BOOKING ROOM " + roomId);
    getUserInfo();
  }, []);

  if (loading)
    return (
      <StyledBookingScreen>
        <div style={{ width: "100%" }}>
          <Header />
        </div>
        <ContentSection>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        </ContentSection>
      </StyledBookingScreen>
    );

  return (
    <StyledBookingScreen>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
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
            userInfo={userInfo}
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
