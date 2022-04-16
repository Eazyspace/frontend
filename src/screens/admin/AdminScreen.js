import {
  ArrowLeftRounded,
  ArrowRightRounded,
  CalendarTodayRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProfileAvatar from "../../components/ProfileAvatar";
import RoomAvatar from "../../components/RoomAvatar";
import StatusChip from "../../components/StatusChip";
import {
  appBarHeight,
  StyledAdminScreen,
  StyledAppBar,
  StyledMainContent,
  StyledDrawer,
  DrawerHeader,
  FloorButton,
  OpeningDrawerButton,
  StyledRequestCard,
  FloorList,
  DeadlineChip,
  VerticalLine,
} from "./AdminScreen.styled";

function RequestCard({ roomId, userId, startTime, endTime }) {
  return (
    <StyledRequestCard>
      <RoomAvatar roomId={roomId} sx={{ padding: "1em" }} />
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs="auto">
          <DeadlineChip label="2 days" size="small" />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex", gap: 1 }}>
          <CalendarTodayRounded />
          <Typography variant="h5">Sun. Apr 3rd, 2022</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">NẺD VS WIBU: DAWN OF THE LAME</Typography>
        </Grid>
        <Grid
          item
          xs="auto"
          sx={{ display: "flex", gap: 2, alignItems: "center" }}
        >
          <ProfileAvatar sx={{ width: 20, height: 20 }}>H</ProfileAvatar>
          <Typography variant="p" sx={{ margin: "auto 0px" }}>
            Vu Duc Huy
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <VerticalLine />
        </Grid>
        <Grid item xs={7} alignSelf="center">
          <Typography
            variant="p"
            sx={{ margin: "auto 0px", fontWeight: "bold" }}
          >
            Council of Wibus
          </Typography>
        </Grid>
      </Grid>
    </StyledRequestCard>
  );
}

function MainContent({ openedDrawer, floorId }) {
  

  return (
    <StyledMainContent openedDrawer={openedDrawer}>
      <Typography variant="h2" color="primary">
        Room requests
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <StatusChip
            label="Pending"
            variant="outlined"
            color="primary"
            clickable
            onClick={() => {
              console.log("Pending filter");
            }}
          />
        </Grid>
        <Grid item>
          <StatusChip
            label="Approved"
            variant="outlined"
            color="primary"
            clickable
            onClick={() => {
              console.log("Approved filter");
            }}
          />
        </Grid>
        <Grid item>
          <StatusChip
            label="Declined"
            variant="outlined"
            color="primary"
            clickable
            onClick={() => {
              console.log("Declined filter");
            }}
          />
        </Grid>
      </Grid>
      <RequestCard />
    </StyledMainContent>
  );
}

function AdminScreen() {
  const [openedDrawer, setOpenedDrawer] = useState(true);
  const [floorList, setFloorList] = useState([]);
  const [currentFloorId, setCurrentFloorId] = useState(0);

  const openingDrawer = () => {
    setOpenedDrawer(true);
  };
  const closingDrawer = () => {
    setOpenedDrawer(false);
  };

  useEffect(() => {
    setFloorList([
      {
        floorId: 1,
        floorName: "Tầng trệt",
        description: "Có hội trường, rộng...",
      },
      {
        floorId: 2,
        floorName: "Tầng 2",
        description: "Có gì đó hong nhớ...",
      },
      {
        floorId: 3,
        floorName: "Tầng 3",
        description: "Có phòng học của APCS + CLC",
      },
    ]);
  }, []);

  return (
    <StyledAdminScreen>
      <StyledAppBar>
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ padding: "15px 0px" }}
          >
            EazySpace
          </Typography>
          <Button sx={{ backgroundColor: "transparent", color: "white" }}>
            Login
          </Button>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ display: "flex", height: "100%" }}>
        <StyledDrawer variant="persistent" anchor="left" open={openedDrawer}>
          <Grid
            container
            direction="column"
            sx={{
              height: "100%",
              padding: `${appBarHeight - 45}px 10px 10px 10px`,
            }}
          >
            <Grid item xs={1} />
            <Grid item xs={10}>
              <DrawerHeader>
                <IconButton aria-label="close-drawer" onClick={closingDrawer}>
                  <ArrowLeftRounded />
                </IconButton>
              </DrawerHeader>
              <TextField label="Search" />
              <FloorList>
                {floorList.map(({ floorId, floorName, description }) => (
                  <FloorButton key={floorId}>
                    <Typography variant="h5">{floorName}</Typography>
                  </FloorButton>
                ))}
              </FloorList>
            </Grid>
          </Grid>
        </StyledDrawer>
        <OpeningDrawerButton
          aria-label="open-drawer"
          onClick={openingDrawer}
          open={openedDrawer}
          sx={{ ...(openedDrawer && { display: "none" }) }}
        >
          <ArrowRightRounded />
        </OpeningDrawerButton>
        <MainContent openedDrawer={openedDrawer} floorId={currentFloorId} />
      </Box>
    </StyledAdminScreen>
  );
}

export default AdminScreen;
