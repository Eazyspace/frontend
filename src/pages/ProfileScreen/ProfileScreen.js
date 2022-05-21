import EditIcon from "@mui/icons-material/Edit";
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  DialogContent,
  FormHelperText,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../api/auth";
import userAPI from "../../api/user";
import Header from "../../components/Header/Header";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import useWindowDimensions from "../../hooks/Windowdimension";
import { ezShadow1_low } from "../../utils/shadows";
import { Content, HomeView } from "../HomeScreen/HomeScreen.styled";
import {
  ChangeAvatarButtonGroup,
  ProfileDialog,
  ProfileInf,
  ProfileTab,
  StyledDialog,
} from "./ProfileScreen.styled";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newUploadedAvatar, setNewUploadedAvatar] = useState("");
  const [openEditAvatarDialog, setOpenEditAvatarDialog] = useState(false);
  const [warnNoAvatarUploaded, setWarnNoAvatarUploaded] = useState(false);
  const [loadingNewAvatar, setLoadingNewAvatar] = useState(false);
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
  const handleNewAvatarChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (event) => {
      setNewUploadedAvatar(event.target.result);
    };

    if (warnNoAvatarUploaded) setWarnNoAvatarUploaded(false);
  };
  const handleSignOut = async (e) => {
    try {
      await authAPI.logOut();
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  const updateNewAvatarToUser = async () => {
    if (!newUploadedAvatar) {
      setWarnNoAvatarUploaded(true);
    } else {
      setLoadingNewAvatar(true);
      setWarnNoAvatarUploaded(false);
      try {
        let res = await userAPI.setNewAvatar(newUploadedAvatar);

        if (res.status === "OK") {
          console.log(res.data);
          setNewUploadedAvatar(null);
          setOpenEditAvatarDialog(false);
          getUserInfo();
        }
      } catch (error) {
        console.error(error);
      }
      setLoadingNewAvatar(false);
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
                name={userInfo?.name}
                srcSet={userInfo?.avatar}
                sx={{
                  alignSelf: "center",
                  height: "6em",
                  width: "6em",
                }}
              />
            </Badge>
            <Typography variant="h6" sx={{ alignSelf: "center" }}>
              {userInfo?.name}
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
            setNewUploadedAvatar("");
            setOpenEditAvatarDialog(false);
          }}
          scroll="body"
        >
          {loadingNewAvatar ? (
            <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            </DialogContent>
          ) : (
            <DialogContent>
              {newUploadedAvatar && (
                <img
                  src={newUploadedAvatar}
                  style={{
                    display: "block",
                    maxWidth: "20em",
                    maxHeight: "20em",
                    width: "auto",
                    height: "auto",
                    alignSelf: "center",
                  }}
                  alt="Please upload a new file"
                />
              )}
              <TextField
                id="new-avatar"
                type="file"
                onChange={handleNewAvatarChange}
                error={warnNoAvatarUploaded}
              />
              {warnNoAvatarUploaded && (
                <FormHelperText error>No file detected</FormHelperText>
              )}
              <ChangeAvatarButtonGroup>
                <Button
                  variant="text"
                  style={{ flex: 1 }}
                  onClick={() => {
                    setNewUploadedAvatar(null);
                    setWarnNoAvatarUploaded(false);
                    setOpenEditAvatarDialog(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ flex: 1 }}
                  onClick={updateNewAvatarToUser}
                >
                  Upload new avatar
                </Button>
              </ChangeAvatarButtonGroup>
            </DialogContent>
          )}
        </StyledDialog>
      )}
    </HomeView>
  );
};
export default ProfileScreen;
