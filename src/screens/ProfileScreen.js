import { Typography } from "@mui/material";
import React from "react";
import { Navbar,HomeLogo, HomeView, FloorBtn, Content } from "./HomeScreen.styled";
import { ProfileInfo, ProfileTab } from "./ProfileScreen.styled";
import useWindowDimensions from "../components/Windowdimension"


const ProfileScreen=()=>{
    const { wheight, wwidth } = useWindowDimensions();
    return(
      <HomeView>
          <Navbar>
              <HomeLogo variant="h2">EazySpace</HomeLogo>
              <FloorBtn>
                  <Typography variant="h5" >Vu Duc Huy</Typography>
              </FloorBtn>
          </Navbar>
          <Content >
              <ProfileTab hValue={wheight}>
                  <Typography>Name</Typography>
                  <Typography>Title</Typography>
              </ProfileTab>
              <ProfileInfo>

              </ProfileInfo>

          </Content>

      </HomeView>
  )

}
export default ProfileScreen;