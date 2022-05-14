import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HomeView, Content } from "./HomeScreen.styled";
import { ProfileDialog, ProfileInf, ProfileTab } from "./ProfileScreen.styled";
import useWindowDimensions from "../components/Windowdimension";
import ProfileInfo from "../components/ProfileInfo";
import Header from "../components/Header";
import userAPI from "../api/user";
import ProfileAvatar from "../components/ProfileAvatar";
import authAPI from "../api/auth";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({ userId: 2 });
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  // console.log(height);
  const getUserInfo = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignOut = async (e) => {
    try {
      await authAPI.logOut();
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <HomeView>
      <Header loggedIn />
      <Content contents={height * 0.9}>
        <ProfileTab contents={height * 0.2}>
          <ProfileDialog>
            <ProfileAvatar
              name={userInfo.name}
              sx={{
                alignSelf: "center",
                height: "4em",
                width: "4em",
              }}
            />
            <Typography variant="h5" sx={{ alignSelf: "center" }}>
              {userInfo.name}
            </Typography>
          </ProfileDialog>
          <Button variant="outlined" color="error" onClick={handleSignOut}>
            Sign out
          </Button>
        </ProfileTab>
        <ProfileInf>
          <ProfileInfo userInfo={userInfo}></ProfileInfo>
        </ProfileInf>
      </Content>
    </HomeView>
  );
};
export default ProfileScreen;
