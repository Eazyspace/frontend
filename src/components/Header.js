import { Typography } from "@mui/material";
import { HomeLogo, Navbar, UserTitleButton } from "../components/Header.styled";

function Header() {
  return (
    <Navbar>
      <HomeLogo variant="h1">EazySpace</HomeLogo>
      <UserTitleButton
        onClick={() => {
          console.log("click");
        }}
      >
        <Typography variant="h5">Vu Duc Huy</Typography>
      </UserTitleButton>
    </Navbar>
  );
}

export default Header;
