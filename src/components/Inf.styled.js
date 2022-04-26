import { Button } from "@mui/material";
import styled from "styled-components";

export const InfoForm = styled.div`
  display: flex;
  margin-top: 7em;
  margin-left: 5em;
  flex-direction: column;
  justify-content: stretch;
  height: 70%;
`;

export const Rowline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  flex: 1;
`;
export const ButtonChoose = styled(Button)`
  height: 40px;
  border-radius: 10px;
  width: 400px;
`;
