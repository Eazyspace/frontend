import styled from "styled-components";
import { Avatar } from "@mui/material";
import { ezShadow1_low } from "../../utils/shadows";
import { ezBlue } from "../../utils/colors";

export const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    background-color: ${ezBlue};
    padding: 1em;
    box-shadow: ${ezShadow1_low};
  }
`;
