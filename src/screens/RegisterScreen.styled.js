import { style } from "@mui/system";
import styled from "styled-components";
import { ezBlue } from "../utils/colors";
import { ezShadow2_high } from "../utils/shadows";
export const StyledRegisterScreen = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const RegisterForm = styled.div`
  width: 30vw;
  height: 60vh;
  margin-top: 15vh;
  box-shadow: ${ezShadow2_high};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 12px;
`;
export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Stepcircle = styled.div`
  border-radius: 50%;
  width: 3vh;
  height: 3vh;
  background: ${(props) => props.contents};
`;
export const Stepbar = styled.div`
  width: 10vw;
  height: 1vh;
  background: ${(props) => props.contents};
`;
