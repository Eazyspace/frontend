import { Drawer, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import roomAPI from "../../api/room";
import BackdropLoading from "../BackdropLoading";
import { Inf } from "../Inf/Inf";
import { ActiveButtonBox, ButtonBox, Info, RoomContent } from "./Room.styled";

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
    setRoomList([]);
    fetchRoomList();
  }, [floorNum]);

  const fetchRoomList = async () => {
    setLoading(true);
    try {
      const response = await roomAPI.getListRoom({ floorId: floorNum });
      console.log(response);
      if (response.status === "OK") setRoomList(response.data);
      // snackbar
      else{
        console.error(response.message);
      }
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
