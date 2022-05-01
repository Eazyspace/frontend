import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  HomeLogo,
  Navbar,
  UserTitleButton,
  StyledLink,
} from "../components/Header.styled";
import userAPI from "../api/user";

function Header({ loggedIn }) {
  const [userName, setUserName] = useState("Log in");

  const getUserInfo = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        console.log(res.data[0]);
        let userInfo = res.data[0];
        // setUserName(userInfo.name);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (loggedIn === true) getUserInfo();
  }, [loggedIn]);

  return (
    <Navbar>
      <StyledLink to="/">
        <HomeLogo variant="h1">EazySpace</HomeLogo>
      </StyledLink>
      <StyledLink to="profile">
        <UserTitleButton>
          <Typography variant="h5">{userName}</Typography>
        </UserTitleButton>
      </StyledLink>
    </Navbar>
  );
}

export default Header;
