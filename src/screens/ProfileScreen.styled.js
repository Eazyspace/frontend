import styled from "styled-components";
import { ezShadow2_high } from "../utils/shadows";

export const ProfileTab = styled.div`
  flex: 1;
  box-shadow: ${ezShadow2_high};
  display: flex;
  flex-direction: column;
  height: ${(props) => props.contents}px;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 12px;
`;
export const ProfileInf = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
`;
