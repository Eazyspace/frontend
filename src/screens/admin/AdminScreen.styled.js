import { AppBar, Box, Drawer } from "@mui/material";
import styled from "styled-components";

export const drawerWidth = 200;
const appBarHeight = 70;

export const StyledAdminScreen = styled(Box)`
  padding-top: ${appBarHeight}px;
  height: calc(100vh - ${appBarHeight}px);
`;

export const StyledAppBar = styled(AppBar)`
  height: ${appBarHeight}px;
  z-index: 999;
`;

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  z-index: 1;
  &.MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Main = styled.main`
  flex-grow: 1;
  z-index: 2;
  padding: 20px;
  ${(props) =>
    props.open ? `margin-left: 50px;` : `margin-left: -${drawerWidth}px;`};
`;

export const FloorButton = styled.button`
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