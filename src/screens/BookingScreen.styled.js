import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { shadow2_low } from "../utils/shadows";

export const StyledBookingScreen = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledBookingForm = styled.form`
  min-width: 333px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2em;
  box-shadow: ${shadow2_low};
`;

export const FormTitle = styled.h3`
  font-family: "Montserrat";
  text-align: center;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
`;

export const StyledButton = styled(Button)`
  flex-grow: 1;
  align-self: stretch;
`;
export const StyledLink = styled(Link)`
  flex-grow: 1;
  display: flex;
  text-decoration: none;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 26px;
`;

export const SuccessTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
