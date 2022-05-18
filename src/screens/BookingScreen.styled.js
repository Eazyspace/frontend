import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ezShadow2_low } from "../utils/shadows";

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

export const ContentSection = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 4.4rem;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  min-width: 333px;
  max-width: 600px;
  margin-top: ${(props) => (props.variant === "summary" ? `10em` : "0em")};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2em;
  box-shadow: ${ezShadow2_low};
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
  gap: 20px;
`;

export const RowLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

export const UserAndRoom = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
