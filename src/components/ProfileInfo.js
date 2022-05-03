import { Typography } from "@mui/material";
import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { ezShadow2_high, ezShadow2_low } from "../utils/shadows";
import "../utils/hideScrollbar.css";
import "../utils/Animation.css";
import { ezBlue, ezGreen, ezYellow, ezRed } from "../utils/colors";
import Popup from "reactjs-popup";
import ModalPopup from "./ModalPopup";
import zIndex from "@mui/material/styles/zIndex";
import RoomAvatar from "./RoomAvatar";
import { useScrollLock } from "./scrollLock";
import requestAPI from "../api/request";
const Bigbox = styled.div`
  box-shadow: ${ezShadow2_high};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
const FlatList = styled.button`
  box-shadow: ${ezShadow2_low};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: fixed;
  border: none;
  margin: 1rem;
`;
export const Boundbox = styled.div`
  border-radius: 10px;
  background: ${(props) =>
    props.variant == 1
      ? ezGreen
      : props.variant == 2
      ? ezYellow
      : props.variant == 3
      ? ezRed
      : ezGreen};
  margin: ${(props) => (props.variant == "status" ? "1.3rem" : "0.5rem")};
  width: 150px;
`;
var returnTime = (timeStart, timeEnd) => {
  var dt = new Date(timeStart);
  var dt2 = new Date(timeEnd);

  var year1 = dt.getFullYear();
  var month1 = (dt.getMonth() + 1).toString().padStart(2, "0");
  var day1 = dt.getDate().toString().padStart(2, "0");
  var hour1 = dt.getHours().toString().padStart(2, "0");
  var minute1 = dt.getMinutes().toString().padStart(2, "0");
  var year2 = dt2.getFullYear();
  var month2 = (dt2.getMonth() + 1).toString().padStart(2, "0");
  var day2 = dt2.getDate().toString().padStart(2, "0");
  var hour2 = dt2.getHours().toString().padStart(2, "0");
  var minute2 = dt2.getMinutes().toString().padStart(2, "0");
  return (
    hour1 +
    ":" +
    minute1 +
    " - " +
    hour2 +
    ":" +
    minute2 +
    ",  " +
    day1 +
    "/" +
    month1 +
    "/" +
    year1
  );
};

const ProfileInfo = () => {
  const [showpopUp, setPopUp] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const [requestList, setRequest] = useState([]);
  const [loading, setLoading] = useState(true);
  // useState(initialValue)
  const [selectedRequest, setSelectedRequest] = useState(null);
  const requestClient = requestAPI;

  var dt, year, month, day, hour, minute, ampm;

  const showPopUp = (state, request) => {
    lockScroll();
    setPopUp(state);
    setSelectedRequest(request);
    //console.log(selectedRequest);
  };
  useEffect(() => {
    // init command
  }, []);
  // useCallBack
  useEffect(() => {
    fetchRequest();
  }, []);
  const fetchRequest = async () => {
    setLoading(true);
    try {
      const response = await requestClient.getRequestList({ userId: 1 });
      if (response.status === "OK") setRequest(response.data);
      // snackbar
      else console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
    <Bigbox className="example">
      {requestList.map((request) => (
        <FlatList onClick={() => showPopUp(true, request)}>
          <div style={{ margin: "0.5rem" }}>
            <RoomAvatar roomId={request.roomId}></RoomAvatar>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "4",
              margin: "1rem",
            }}
          >
            <Typography textAlign={"start"} color={"#808080"}>
              {returnTime(request.startTime, request.endTime)}
            </Typography>
            <Typography textAlign={"start"}>{request.description}</Typography>
          </div>
          <Boundbox variant={request.status}>
            <Typography
              variant="h5"
              margin={"0.5rem"}
              color={
                request.status == 1
                  ? "#fff"
                  : request.status == 2
                  ? "#000"
                  : request.status == 3
                  ? "#fff"
                  : "#fff"
              }
            >
              {request.status == 1
                ? "Approved"
                : request.status == 2
                ? "Pending"
                : request.status == 3
                ? "Decline"
                : "Approved"}
            </Typography>
          </Boundbox>
        </FlatList>
      ))}
      <Popup
        modal
        open={showpopUp}
        onClose={() => showPopUp(false)}
        overlayStyle={{ background: "rgba(0,0,0,0.1)", zIndex: 1100 }}
        className="popup-content"
      >
        <ModalPopup requestData={selectedRequest} />
      </Popup>
    </Bigbox>
  );
};
export default ProfileInfo;
