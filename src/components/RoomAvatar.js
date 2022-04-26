import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";
import { ezShadow1_low } from "../utils/shadows";
import { ezBlue } from "../utils/colors";

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    background-color: ${ezBlue};
    padding: 1em;
    box-shadow: ${ezShadow1_low};
  }
`;

function RoomAvatar({ roomId, ...props }) {
  return (
    <StyledAvatar {...props}>
      <Typography variant="h4">I.{roomId}</Typography>
    </StyledAvatar>
  );
}

export default RoomAvatar;
