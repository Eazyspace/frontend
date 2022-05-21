import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import requestAPI from "../../api/request";
import { useScrollLock } from "../../hooks/scrollLock";
import "../../utils/Animation.css";
import { ezBlack, ezGrey } from "../../utils/colors";
import "../../utils/hideScrollbar.css";
import ModalPopup from "../ModalPopup/ModalPopup";
import RoomAvatar from "../RoomAvatar/RoomAvatar";
import { Bigbox, Boundbox, FlatList } from "./ProfileInfo.styled";

var returnTime = (timeStart, timeEnd) => {
  var dt = new Date(timeStart);
  var dt2 = new Date(timeEnd);

  var year1 = dt.getFullYear();
  var month1 = (dt.getMonth() + 1).toString().padStart(2, "0");
  var day1 = dt.getDate().toString().padStart(2, "0");
  var hour1 = dt.getHours().toString().padStart(2, "0");
  var minute1 = dt.getMinutes().toString().padStart(2, "0");
  // var year2 = dt2.getFullYear();
  // var month2 = (dt2.getMonth() + 1).toString().padStart(2, "0");
  // var day2 = dt2.getDate().toString().padStart(2, "0");
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

const ProfileInfo = ({ userInfo }) => {
  const [showpopUp, setPopUp] = useState(false);
  const { lockScroll } = useScrollLock();
  const [requestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(true);
  // useState(initialValue)
  const [selectedRequest, setSelectedRequest] = useState(null);

  const showPopUp = (state, request) => {
    lockScroll();
    setPopUp(state);
    setSelectedRequest(request);
    //console.log(selectedRequest);
  };

  useEffect(() => {
    fetchRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRequest = async () => {
    setLoading(true);
    try {
      const response = await requestAPI.getRequestList({
        userId: userInfo.userId,
      });
      console.log(response)
      if (response.status === "OK") setRequestList(response.data);
      // snackbar
      else console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  if (loading)
    return (
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
    <Bigbox className="example">
      {requestList.map((request, i) => (
        <FlatList key={i} onClick={() => showPopUp(true, request)}>
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
            <Typography textAlign={"start"} color={ezGrey}>
              {returnTime(request.startTime, request.endTime)}
            </Typography>
            <Typography textAlign={"start"}>{request.description}</Typography>
          </div>
          <Boundbox variant={request.status}>
            <Typography
              variant="h5"
              margin={"0.5rem"}
              color={
                request.status === 2
                  ? "white"
                  : request.status === 1
                  ? ezBlack
                  : request.status === 3
                  ? "white"
                  : "white"
              }
            >
              {request.status === 2
                ? "Approved"
                : request.status === 1
                ? "Pending"
                : request.status === 3
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
        <ModalPopup requestData={selectedRequest} userInfo={userInfo} />
      </Popup>
    </Bigbox>
  );
};
export default ProfileInfo;
