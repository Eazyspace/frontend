import styled from "styled-components";
import { ezBlack, ezGreyLight } from "../../utils/colors";
import { ezShadow2_high } from "../../utils/shadows";

export const Pop = styled.div`
  box-shadow: ${ezShadow2_high};
  border-radius: 10px;
  background-color: white;
  width: ${(props) => props.contents}px;
  max-height: calc(100vh);
  overflow-y: auto;
`;
export const Row = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: ${(props) => (props.variant === "header" ? "auto" : "70px")};
  color: ${ezBlack};
  border-bottom: 2px
    ${(props) => (props.variant === "header" ? "none" : "solid")} ${ezGreyLight};
  align-items: center;
`;
