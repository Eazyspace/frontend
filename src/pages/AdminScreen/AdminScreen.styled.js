import {
  AppBar,
  Box,
  Button,
  Chip,
  Dialog,
  Drawer,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import {
  ezBlack,
  ezBlue,
  ezBlue_blurred,
  ezGreen,
  ezGreen_blurred,
  ezGreyLight,
  ezRed,
  ezRed_blurred,
  ezYellow,
} from "../../utils/colors";
import "../../utils/shadows";
import { ezShadow1_low } from "../../utils/shadows";

/** Some const values */
export const drawerWidth = 200;
export const appBarHeight = 70;

/** Screen */
export const StyledAdminScreen = styled(Box)`
  padding-top: ${appBarHeight}px;
  height: calc(100vh - ${appBarHeight}px);
`;
export const StyledAppBar = styled(AppBar)`
  height: ${appBarHeight}px;
  z-index: 999;
  background-color: ${ezBlue};
  color: white;
`;
export const OpeningDrawerButton = styled(IconButton)`
  align-self: flex-start;
  z-index: 2;
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
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
    min-width: ${drawerWidth + 10}px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    background: transparent;
    color: ${ezBlack};
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    &:hover {
      background: ${ezBlue_blurred};
    }
  }
  &.MuiButton-contained {
    background: ${ezBlue_blurred};
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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
    padding: 20px 30px;
    color: ${ezBlack};
    min-height: 8em;
    border-radius: 12px;
    box-shadow: ${ezShadow1_low};
  }
`;
export const DeadlineChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${(props) => {
      if (props.remainingDays < 3) return ezRed;
      else if (props.remainingDays < 7) return ezYellow;
      else return ezGreen;
    }};
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

/** REQUEST DETAIL DIALOG */
export const StyledDialog = styled(Dialog)`
  & .MuiDialogContent-root {
    min-width: 333px;
    padding: 40px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1em;
  }
  & .MuiDialog-paper {
    border-radius: 12px;
  }
`;
export const UserAndRoom = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export const RequestStatusIcon = styled(Box)`
  align-self: center;
  height: 52px;
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.variant === "approve" ? ezGreen : ezRed};
  color: white;
`;
export const ResponseNoteBox = styled(Box)`
  min-width: 20em;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 25px;
  border-radius: 15px;
  color: white;
  background-color: ${(props) =>
    props.variant === "approve" ? ezGreen_blurred : ezRed_blurred};
`;
export const RowLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
`;
export const DescriptionField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;
export const ApproveButton = styled(Button)`
  &.MuiButton-root {
    padding: 1em 2em;
    background-color: ${ezGreen};
    color: white;
    &:hover {
      background-color: ${ezGreen_blurred};
    }
  }
`;
export const DeclineButton = styled(Button)`
  &.MuiButton-root {
    padding: 1em 2em;
    background-color: ${ezRed};
    color: white;
    &:hover {
      background: ${ezRed_blurred};
    }
  }
`;
