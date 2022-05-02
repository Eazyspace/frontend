import React from "react";
import { Typography } from "@mui/material";
import { ButtonChoose, InfoForm, Rowline } from "./Inf.styled";
import { useNavigate } from "react-router-dom";

const Inf = ({ RoomInfo: roomInfo }) => {
  const navigate = useNavigate();

  const handleBookThisRoom = () => {
    navigate(`/booking`, { state: { roomId: roomInfo.roomId } });
  };

  return (
    <InfoForm>
      <Typography variant="h2" flex={1}>
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
      <Typography variant="h5">{"Description:"}</Typography>
      <Typography variant="body1" width={410}>
        {roomInfo.description}
      </Typography>
      <ButtonChoose
        style={{ position: "fixed", bottom: 0 }}
        variant="contained"
        onClick={handleBookThisRoom}
      >
        Book This Room
      </ButtonChoose>
    </InfoForm>
  );
};
export default Inf;
