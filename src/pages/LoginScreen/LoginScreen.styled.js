import { Link } from "react-router-dom";
import styled from "styled-components";
import { ezBlue, ezGrey } from "../../utils/colors";
import { ezShadow2_high } from "../../utils/shadows";

export const StyledLoginScreen = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5em;
  display: flex;
  padding: 2em;
`;

export const BrandAndMotto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Motto = styled.h3`
  color: ${ezGrey};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0em;
  margin: 0px;
`;

export const StyledLoginForm = styled.div`
  min-width: 20em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 30px;
  gap: 30px;
  border-radius: 12px;
  box-shadow: ${ezShadow2_high};
`;

export const LoginTitle = styled.h4`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
`;

export const RegisterLine = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const RegisterLink = styled(Link)`
  color: ${ezBlue};
  text-decoration: none;
`;
