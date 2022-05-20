import { Typography } from "@mui/material";
import React from "react";
import useWindowDimensions from "../../hooks/Windowdimension";
import { ezBlack, ezGreen, ezGrey, ezRed, ezYellow } from "../../utils/colors";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { Boundbox } from "../ProfileInfo/ProfileInfo.styled";
import RoomAvatar from "../RoomAvatar/RoomAvatar";
import { Pop, Row } from "./ModalPopup.styled";

var Datestr = (time) => {
  var dt = new Date(time);
  var year1 = dt.getFullYear();
  var month1 = (dt.getMonth() + 1).toString().padStart(2, "0");
  var day1 = dt.getDate().toString().padStart(2, "0");
  return day1 + "/" + month1 + "/" + year1;
};
var Timestr = (start, end) => {
  var dt = new Date(start);
  var dt2 = new Date(end);
  var hour1 = dt.getHours().toString().padStart(2, "0");
  var minute1 = dt.getMinutes().toString().padStart(2, "0");
  var hour2 = dt2.getHours().toString().padStart(2, "0");
  var minute2 = dt2.getMinutes().toString().padStart(2, "0");
  return hour1 + ":" + minute1 + " - " + hour2 + ":" + minute2;
};

var returnColor = (requestData) => {
  return requestData.status === 2
    ? "#fff"
    : requestData.status === 1
    ? ezBlack
    : requestData.status === 3
    ? "#fff"
    : "#fff";
};

const ModalPopup = ({ requestData, userInfo }) => {
  const { width } = useWindowDimensions();

  return (
    <Pop contents={width * 0.4}>
      <div style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
        <Row variant="header">
          <div style={{ margin: "0.5rem" }}>
            <ProfileAvatar name={userInfo.name} />
          </div>
          <Boundbox variant={requestData.status}>
            <Typography
              variant="h5"
              margin={"0.5rem"}
              textAlign={"center"}
              color={returnColor(requestData)}
            >
              {requestData.status === 2
                ? "Approved"
                : requestData.status === 1
                ? "Pending"
                : requestData.status === 3
                ? "Decline"
                : "Pending"}
            </Typography>
          </Boundbox>
          <div style={{ margin: "0.5rem" }}>
            <RoomAvatar roomId={requestData.roomId}></RoomAvatar>
          </div>
        </Row>
        {requestData.status !== 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background:
                requestData.status === 2
                  ? ezGreen
                  : requestData.status === 3
                  ? ezRed
                  : ezYellow,
              borderRadius: "12px",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Typography
              variant="h4"
              margin={"0.5rem"}
              color={returnColor(requestData)}
            >
              Response note
            </Typography>
            <Typography
              variant="h5"
              margin={"0.5rem"}
              color={returnColor(requestData)}
            >
              {requestData.responseNote}
            </Typography>
          </div>
        )}
        <Row>
          <Typography variant="body1" sx={{ color: ezGrey }}>
            Date
          </Typography>
          <Typography variant="body1">
            {Datestr(requestData.startTime)}
          </Typography>
        </Row>
        <Row>
          <Typography variant="body1" sx={{ color: ezGrey }}>
            Time
          </Typography>
          <Typography variant="body1">
            {Timestr(requestData.startTime, requestData.endTime)}
          </Typography>
        </Row>
        <Row>
          <Typography variant="body1" sx={{ color: ezGrey }}>
            Event Name
          </Typography>
          <Typography variant="body1">{requestData.eventName}</Typography>
        </Row>
        <Row>
          <Typography variant="body1" sx={{ color: ezGrey }}>
            Organization
          </Typography>
          <Typography variant="body1">{requestData.organizationId}</Typography>
        </Row>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "2rem",
            marginTop: "2rem",
            color: ezBlack,
          }}
        >
          <Typography variant="body1" sx={{ color: ezGrey }}>
            Description
          </Typography>
          <Typography variant="body1">{requestData.description}</Typography>
        </div>
      </div>
    </Pop>
  );
};
export default ModalPopup;
