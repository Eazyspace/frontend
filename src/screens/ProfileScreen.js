import { Typography } from "@mui/material";
import React from "react";
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

const ProfileScreen = () => {
  const { height, width } = useWindowDimensions();
  console.log(height);
  return (
    <HomeView>
      <Header />
      <Content contents={height * 0.9}>
        <ProfileTab contents={height * 0.2}>
          <Typography textAlign={"center"}>{height}</Typography>
          <Typography textAlign={"center"}>Title</Typography>
        </ProfileTab>
        <ProfileInf>
          <ProfileInfo></ProfileInfo>
        </ProfileInf>
      </Content>
    </HomeView>
  );
};
export default ProfileScreen;
