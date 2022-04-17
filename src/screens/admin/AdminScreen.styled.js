import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Card,
  Chip,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { ezBlack, ezBlue, ezGreyLight } from "../../utils/colors";
import "../../utils/shadows";
import { ezShadow1_low } from "../../utils/shadows";

/** Some const values */
export const drawerWidth = 200;
export const appBarHeight = 90;

/** Screen */
export const StyledAdminScreen = styled(Box)`
  padding-top: ${appBarHeight}px;
  height: calc(100vh - ${appBarHeight}px);
`;
export const StyledAppBar = styled(AppBar)`
  height: ${appBarHeight}px;
  z-index: 999;
`;
export const OpeningDrawerButton = styled(IconButton)`
  align-self: flex-start;
  z-index: 2;
  position: absolute;
  top: 20px;
  left: calc(10px - ${drawerWidth}px);
`;

/** DRAWER */
export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  z-index: 2;
  &.MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`;
export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0px;
`;
export const FloorList = styled.div`
  padding: 1em 0em;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const FloorButton = styled(Button)`
  &.MuiButton-root {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: ${ezBlack};
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    &:hover {
      background: rgba(31, 117, 255, 0.1);
    }
  }
  &.MuiButton-contained {
    background: rgba(31, 117, 255, 0.1);
    color: ${ezBlue};
    box-shadow: none;
  }
`;

/** MAIN CONTENT */
export const StyledMainContent = styled.main`
  max-height: 100%;
  overflow-y: auto;
  flex-grow: 1;
  z-index: 1;
  padding: 20px;
  ${(props) =>
    props.openedDrawer
      ? `margin-left: 50px;`
      : `margin-left: -${drawerWidth}px;`};
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

/** REQUEST CARD */
export const StyledRequestCard = styled(Button)`
  &.MuiButton-root {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
    padding: 20px;
    color: ${ezBlack};
    min-height: 8em;
    border-radius: 12px;
    box-shadow: ${ezShadow1_low};
  }
`;
export const DeadlineChip = styled(Chip)`
  &.MuiChip-root {
    background-color: orange;
    color: white;
    padding: 15px 5px;
    font-weight: 500;
    font-size: 0.8rem;
  }
`;
export const VerticalLine = styled.div`
  background-color: ${ezGreyLight};
  width: 1px;
  height: 100%;
`;
