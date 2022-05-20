import styled from "styled-components";
import { ezGreen, ezRed, ezYellow } from "../../utils/colors";
import { ezShadow2_high, ezShadow2_low } from "../../utils/shadows";

export const Bigbox = styled.div`
  box-shadow: ${ezShadow2_high};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 30px 10px;
  border-radius: 12px;
`;
export const FlatList = styled.button`
  box-shadow: ${ezShadow2_low};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: fixed;
  border: none;
  margin: 1rem;
  border-radius: 12px;
`;
export const Boundbox = styled.div`
  border-radius: 10px;
  background: ${(props) =>
    props.variant === 2
      ? ezGreen
      : props.variant === 1
      ? ezYellow
      : props.variant === 3
      ? ezRed
      : ezGreen};
  margin: ${(props) => (props.variant === "status" ? "1.3rem" : "0.5rem")};
  width: 150px;
`;
