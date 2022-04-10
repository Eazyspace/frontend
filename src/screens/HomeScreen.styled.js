import { Typography } from "@mui/material";
import styled from "styled-components";
import { ezBlack, ezBlue } from "../utils/colors";
import { ezShadow2_high, ezShadow2_low } from "../utils/shadows";

export const Navbar = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${ezShadow2_high};
  padding: 12px 25px;
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
export const Navfloor = styled.nav`
  box-shadow: ${ezShadow2_low};
  gap: 13px;
  padding: 24px;
`;
export const HomeView = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 900px;
`;
export const Roomfloor = styled.div`
  flex: 4;
  margin-top: 30px;
  margin-left: 30px;
`;
export const Info = styled.div`
  flex: 4;
  align-items: center;
`;

export const FloorBtn = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    background: rgba(31, 117, 255, 0.1);
  }
`;
