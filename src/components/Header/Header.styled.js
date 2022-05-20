import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ezBlack, ezBlue } from "../../utils/colors";
import { ezShadow2_high } from "../../utils/shadows";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const Navbar = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${ezShadow2_high};
  padding: 12px 25px;
  z-index: 1000;
`;
export const HomeLogo = styled(Typography)`
  margin: 0px;
  letter-spacing: 0.3rem;
  color: ${ezBlue};
  text-align: center;
`;
export const UserTitleButton = styled.button`
  display: flex;
  gap: 15px;
  padding: 11px 18px;
  font-size: 20px;
  color: ${ezBlack};
  background-color: transparent;
  border: none;
  border-radius: 110px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: rgba(102, 102, 102, 0.2);
  }
`;
