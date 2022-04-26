import { Typography } from "@mui/material";
import React from "react";
import { Navbar,HomeLogo, HomeView, FloorBtn, Content } from "./HomeScreen.styled";
import { ProfileInf, ProfileTab } from "./ProfileScreen.styled";
import useWindowDimensions from "../components/Windowdimension"
import ProfileInfo from "../components/ProfileInfo"


const ProfileScreen=()=>{
    const { height, width } = useWindowDimensions();
    console.log(height);
    return(
      <HomeView>
          <Navbar contents={height*0.1}>
              <HomeLogo variant="h2">EazySpace</HomeLogo>
              <FloorBtn>
                  <Typography variant="h5" >Vu Duc Huy</Typography>
              </FloorBtn>
          </Navbar>
          <Content contents={height*0.9} >
              <ProfileTab contents={height*0.2}>
                  <Typography textAlign={'center'}>{height}</Typography>
                  <Typography textAlign={'center'}>Title</Typography>
              </ProfileTab>
              <ProfileInf>
                   <ProfileInfo></ProfileInfo>
              </ProfileInf>

          </Content>

      </HomeView>
  )

}
export default ProfileScreen;