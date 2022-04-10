import React from "react";
import { Typography } from "@mui/material";
import { ButtonChoose, InfoForm, Rowline } from "./Inf.styled";

const Inf = ({ RoomInfo }) => {
  return (
    <InfoForm>
      <Typography variant="h2" flex={1} marginBottom={5}>
        {"Room " + (RoomInfo?.roomId || "")}
      </Typography>
      <Rowline>
        <Typography variant="h5">{"Room size:"}</Typography>
        <Typography variant="h5">
          {RoomInfo.roomLength !== "undefined" &&
            RoomInfo?.roomLength +
              "x" +
              RoomInfo?.roomWidth +
              RoomInfo?.roomLength}
        </Typography>
      </Rowline>
      <Rowline>
        <Typography variant="h5">{"Capacity:"}</Typography>
        <Typography variant="h5">{RoomInfo?.maxCapacity}</Typography>
      </Rowline>
      <Typography variant="h5" flex={1}>
        {"Description:"}
      </Typography>
      <Typography variant="body1" width={410} flex={4}>
        {RoomInfo.description}
      </Typography>
      <ButtonChoose variant="contained">Book This Room</ButtonChoose>
    </InfoForm>
  );
};
export default Inf;
