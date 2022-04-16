import { Chip } from "@mui/material";
import styled from "styled-components";

const StyledChip = styled(Chip)`
  &.MuiChip-root {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.15px;
    padding: 20px 10px;
  }
`;

function StatusChip(props) {
  return <StyledChip {...props} />;
}

export default StatusChip;
