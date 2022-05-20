import { Avatar } from "@mui/material";
import styled from "styled-components";
import { ezShadow1_low } from "../../utils/shadows";

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    background-color: orange;
    box-shadow: ${ezShadow1_low};
  }
`;
