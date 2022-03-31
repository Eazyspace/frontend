import styled from "styled-components";
import { ezBlue, ezGrey } from "../../utils/colors";

export const StyledBrandTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Brand = styled.h1`
  color: ${ezBlue};
  font-size: 120px;
  font-weight: 800;
  line-height: 146px;
  letter-spacing: 0.05em;
  margin: 0px;
`;

export const Motto = styled.h3`
  color: ${ezGrey};
  font-size: 40px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: 0em;
`;
