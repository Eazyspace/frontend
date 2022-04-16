import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";
import { ezShadow1_low } from "../utils/shadows";

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    background-color: orange;
    padding: 10px;
    box-shadow: ${ezShadow1_low};
  }
`;

function ProfileAvatar({ name, ...props }) {
  return (
    <StyledAvatar {...props}>
      <Typography variant="h5">{props.children}</Typography>
    </StyledAvatar>
  );
}

export default ProfileAvatar;
