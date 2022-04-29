import { Typography } from "@mui/material";
import {
  HomeLogo,
  Navbar,
  UserTitleButton,
  StyledLink,
} from "../components/Header.styled";

function Header() {
  return (
    <Navbar>
      <StyledLink to="/">
        <HomeLogo variant="h1">EazySpace</HomeLogo>
      </StyledLink>
      <StyledLink to="profile">
        <UserTitleButton>
          <Typography variant="h5">Vu Duc Huy</Typography>
        </UserTitleButton>
      </StyledLink>
    </Navbar>
  );
}

export default Header;
