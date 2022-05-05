import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  HomeLogo,
  HomeView,
  FloorBtn,
  Content,
} from "./HomeScreen.styled";
import { ProfileInf, ProfileTab } from "./ProfileScreen.styled";
import useWindowDimensions from "../components/Windowdimension";
import ProfileInfo from "../components/ProfileInfo";
import Header from "../components/Header";
import userAPI from "../api/user";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({ userId: 2 });
  const { height, width } = useWindowDimensions();
  // console.log(height);
  const getUserInfo = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        console.log(res.data[0]);
        let userInfo = res.data[0];
        setUserInfo(userInfo);
      }
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
          <Typography textAlign={"center"}>
            {userInfo.userId}'s avatar
          </Typography>
          <Typography textAlign={"center"}>{userInfo.userId}</Typography>
        </ProfileTab>
        <ProfileInf>
          <ProfileInfo userId={userInfo.userId}></ProfileInfo>
        </ProfileInf>
      </Content>
    </HomeView>
  );
};
export default ProfileScreen;
