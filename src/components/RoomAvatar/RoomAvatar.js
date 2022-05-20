import { Typography } from "@mui/material";
import { StyledAvatar } from "./RoomAvatar.styled";

function RoomAvatar({ roomId, ...props }) {
  return (
    <StyledAvatar {...props}>
      <Typography variant="h4">I.{roomId}</Typography>
    </StyledAvatar>
  );
}

export default RoomAvatar;
