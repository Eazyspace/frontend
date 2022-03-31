import { Link } from "react-router-dom";
import styled from "styled-components";
import { ezBlue } from "../../utils/colors";

export const StyledLoginForm = styled.div`
  min-width: 393px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 30px;
  gap: 30px;
  border-radius: 12px;
  box-shadow: 6px 2px 16px 0px rgb(136, 165, 191, 0.4),
    -6px -2px 16px rgba(255, 255, 255, 0.2);
`;

export const Title = styled.h4`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;

export const RegisterLine = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const RegisterNow = styled(Link)`
  color: ${ezBlue};
  text-decoration: none;
`;
