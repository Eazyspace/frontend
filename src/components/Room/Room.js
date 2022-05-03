import React, { useState, useEffect } from "react";
import { Drawer, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Inf from "../Inf";
import roomAPI from "../../api/room";
import BackdropLoading from "../utils/backdrop-loading";
import { ezBlue } from "../../utils/colors";
const ButtonBox = styled.button`
  height: 80px;
  width: 200px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  &:hover {
    color: #fff;
    background: #1f75ff;
  }
`;

const ActiveButtonBox = styled(ButtonBox)`
  color: #fff;
  background: ${ezBlue};
`;
const Info = styled.div`
  flex: ${(props) => (props.variant == "info" ? 2 : 3)};
  align-items: center;
`;
//   height: 800px;

const RoomContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Room = ({ floorNum }) => {
  const [roomList, setRoomList] = useState([]);
  const [loading, setLoading] = useState(true);
  // useState(initialValue)
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    // init command
  }, []);
  // useCallBack
  useEffect(() => {
    fetchRoomList();
  }, [floorNum]);

  const fetchRoomList = async () => {
    setLoading(true);
    try {
      const response = await roomAPI.getListRoom({ floorId: floorNum });
      if (response.status === "OK") setRoomList(response.data);
      // snackbar
      else console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };
  const showRoom = (room) => {
    setSelectedRoom(room);
  };
  useEffect(() => console.log(selectedRoom), [selectedRoom]);
  return loading ? (
    <BackdropLoading showBackdrop={true} />
  ) : roomList?.length ? (
    <RoomContent>
      <Info>
        <Grid container spacing={2}>
          {roomList?.length
            ? roomList.map((room) => (
                <Grid key={room.roomId} item xs={12} md={3} lg={3}>
                  {selectedRoom?.roomId !== room.roomId ? (
                    <ButtonBox onClick={() => showRoom(room)}>
                      <Typography variant="h5">{room.roomName}</Typography>
                    </ButtonBox>
                  ) : (
                    <ActiveButtonBox>
                      <Typography variant="h5">{room.roomName}</Typography>
                    </ActiveButtonBox>
                  )}
                </Grid>
              ))
            : "Chưa có dữ liệu phòng"}
        </Grid>
      </Info>
      {!!selectedRoom?.roomId && (
        <Drawer
          style={{ zIndex: 999 }}
          open={true}
          anchor="right"
          onClose={() => showRoom(null)}
        >
          <Info variant="info">
            <Inf RoomInfo={selectedRoom} />
          </Info>
        </Drawer>
      )}
    </RoomContent>
  ) : (
    <Typography>Không tìm thấy dữ liệu phòng</Typography>
  );
};
export default Room;
