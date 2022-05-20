import { Typography } from "@mui/material";
import { StyledAvatar } from "./ProfileAvatar.styled";

function ProfileAvatar({ name, ...props }) {
  return (
    <StyledAvatar {...props}>
      <Typography variant="h5">
        {!name
          ? props.children
          : name
              .split(" ")
              .map((ele) => ele.charAt(0))
              .join("")}
      </Typography>
    </StyledAvatar>
  );
}

export default ProfileAvatar;
