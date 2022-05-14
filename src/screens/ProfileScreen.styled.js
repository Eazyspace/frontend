import { Dialog } from "@mui/material";
import styled from "styled-components";
import { ezShadow2_high } from "../utils/shadows";

export const ProfileTab = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
  margin: 0 2rem;
`;
export const ProfileDialog = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1em;
  height: ${(props) => props.contents}px;
  min-width: 4rem;
  padding: 20px;
  border-radius: 12px;
  box-shadow: ${ezShadow2_high};
`;

export const ProfileInf = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

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

export const ChangeAvatarButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
`;
