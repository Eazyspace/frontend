import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonChoose, InfoForm, Rowline } from "./Inf.styled";

export const Inf = ({ RoomInfo: roomInfo }) => {
  const navigate = useNavigate();

  const handleBookThisRoom = () => {
    navigate(`/booking`, { state: { roomId: roomInfo.roomId } });
  };

  return (
    <InfoForm>
      <Typography
        variant="h2"
        style={{ alignSelf: "center", marginBottom: "2rem" }}
      >
        {"Room " + (roomInfo?.roomId || "")}
      </Typography>
      <Rowline>
        <Typography variant="h5">{"Room size:"}</Typography>
        <Typography variant="h5">
          {roomInfo.roomLength !== "undefined" &&
            roomInfo?.roomLength +
              "x" +
              roomInfo?.roomWidth +
              roomInfo?.roomLength}
        </Typography>
      </Rowline>
      <Rowline>
        <Typography variant="h5">{"Capacity:"}</Typography>
        <Typography variant="h5">{roomInfo?.maxCapacity}</Typography>
      </Rowline>
      <div style={{ width: "80%", alignSelf: "center", marginBottom: "2rem" }}>
        <Typography variant="h5">{"Description:"}</Typography>
      </div>
      <div style={{ width: "80%", alignSelf: "center" }}>
        <Typography variant="body1" width={'25vw'}>
          {roomInfo.description}
        </Typography>
      </div>
      <ButtonChoose
        style={{
          position: "fixed",
          bottom: 10,
          width: "23vw",
          alignSelf: "center",
        }}
        variant="contained"
        onClick={handleBookThisRoom}
      >
        <Typography>Book this Room</Typography>
      </ButtonChoose>
    </InfoForm>
  );
};
