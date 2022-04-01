import styled from "styled-components";
import { ezBlue } from "../../utils/colors";

function Brand() {
  return styled.h1`
    color: ${ezBlue};
    font-size: 120px;
    font-weight: 800;
    letter-spacing: 0.05em;
    margin: 0px;
  `;
}

export default Brand;