import styled from "styled-components";
import { ezBlue } from "../../utils/colors";

export const ButtonBox = styled.button`
  height: 80px;
  width: 200px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  &:hover {
    color: #fff;
    background: #1f75ff;
  }
`;

export const ActiveButtonBox = styled(ButtonBox)`
  color: #fff;
  background: ${ezBlue};
`;
export const Info = styled.div`
  flex: ${(props) => (props.variant === "info" ? 2 : 3)};
  align-items: center;
`;
//   height: 800px;

export const RoomContent = styled.div`
  display: flex;
  flex-direction: row;
`;
