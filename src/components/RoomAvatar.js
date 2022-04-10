import { Avatar } from "@mui/material";
import { ezBlue } from "../utils/colors";

function RoomAvatar({ roomId, ...props }) {
  return (
    <Avatar sx={{ backgroundColor: ezBlue, padding: "10px" }}>I.{roomId}</Avatar>
  );
}

export default RoomAvatar;
