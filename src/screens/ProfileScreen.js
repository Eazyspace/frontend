import {
  Badge,
  Button,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { HomeView, Content } from "./HomeScreen.styled";
import {
  ProfileDialog,
  ProfileInf,
  ProfileTab,
  StyledDialog,
} from "./ProfileScreen.styled";
import useWindowDimensions from "../components/Windowdimension";
import ProfileInfo from "../components/ProfileInfo";
import Header from "../components/Header";
import userAPI from "../api/user";
import ProfileAvatar from "../components/ProfileAvatar";
import authAPI from "../api/auth";
import { useNavigate } from "react-router-dom";
import { ezShadow1_low } from "../utils/shadows";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({ userId: 2 });
  const [newAvatarFile, setNewAvatarFile] = useState(null);
  const [openEditAvatarDialog, setOpenEditAvatarDialog] = useState(false);
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  // console.log(height);
  const getUserInfo = async () => {
    try {
      let res = await userAPI.getAllUserInfo();

      if (res.status === "OK") {
        // console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const handleNewAvatarChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (event) => {
      console.log(event.target.result);
    };
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
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  aria-label="Change avatar"
                  sx={{ backgroundColor: "white", boxShadow: ezShadow1_low }}
                  size="small"
                  disableRipple
                  onClick={() => {
                    setOpenEditAvatarDialog(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
              }
              sx={{
                alignSelf: "center",
              }}
            >
              <ProfileAvatar
                name={userInfo.name}
                sx={{
                  alignSelf: "center",
                  height: "4em",
                  width: "4em",
                }}
              />
            </Badge>
            <Typography variant="h6" sx={{ alignSelf: "center" }}>
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
      {openEditAvatarDialog && (
        <StyledDialog
          open={openEditAvatarDialog}
          onBackdropClick={() => {
            setOpenEditAvatarDialog(false);
          }}
          scroll="body"
        >
          <DialogContent>
            <input
              type="file"
              value={newAvatarFile}
              onChange={handleNewAvatarChange}
            />
          </DialogContent>
        </StyledDialog>
      )}
    </HomeView>
  );
};
export default ProfileScreen;
