import styled from "styled-components";
import { ezBlue } from "../utils/colors";

const StyledBrand = styled.h1`
  color: ${ezBlue};
  font-size: 120px;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin: 0px;
`;

function Brand(props) {
  return <StyledBrand>{props.children}</StyledBrand>;
}

export default Brand;
