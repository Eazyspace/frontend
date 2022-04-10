import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import styled from "styled-components";
import Inf from "../components/Inf";
import { getRoomClient } from "../api/room";
const { default: axios } = require("axios");
const ButtonBox = styled.button`
  height: 80px;
  width: 200px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  &:hover {
    color: #fff;
    background: #1f75ff;
  }
`;
const Info = styled.div`
  flex: ${(props) => (props.variant == "info" ? 2 : 3)};
  align-items: center;
  height: 800px;
`;
const RoomContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Room = ({ FloorNum }) => {
  var RoomList = [];
  const [RoomInf, SetRoom] = useState("");
  const [roomclient, setRoomClient] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await getRoomClient.getListRoom();
        setRoomClient(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  });
  roomclient.data?.map((roomdata) => {
    if (roomdata.floorId == FloorNum) RoomList.push(roomdata);
  });
  const showRoom = (room) => {
    SetRoom(room);
  };
  return (
    <RoomContent>
      <Info>
        <Grid container spacing={3}>
          {RoomList.map((room) => (
            <Grid item xs={12} sm={6} md={4}>
              <ButtonBox onClick={() => showRoom(room)}>
                {room.roomName}
              </ButtonBox>
            </Grid>
          ))}
        </Grid>
      </Info>
      <Info variant="info">
        <Inf RoomInfo={RoomInf} />
      </Info>
    </RoomContent>
  );
};
export default Room;
