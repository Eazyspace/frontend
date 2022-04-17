import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CalendarTodayRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import floorAPI from "../../api/floor";
import bookingRequestAPI from "../../api/bookingRequestAPI";
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

function RequestCard({
  request: { roomId, userId, eventName, startTime, endTime },
  onClickCard,
}) {
  return (
    <StyledRequestCard onClick={onClickCard}>
      <RoomAvatar roomId={roomId} sx={{ padding: "1em" }} />
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs="auto">
          <DeadlineChip
            label={
              Math.round(
                Math.abs(
                  (new Date() - new Date(startTime)) / (24 * 60 * 60 * 1000)
                )
              ).toString() + " days"
            }
            size="small"
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <CalendarTodayRounded />
          <Typography variant="h6" sx={{ margin: "auto 0px" }}>
            {new Date(startTime).toDateString()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" noWrap>
            NẺD VS WJBU: DAWN OF THE LAME
          </Typography>
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
        <Grid
          item
          xs={7}
          alignSelf="center"
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
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

const statusList = ["Pending", "Approved", "Declined"];
function MainContent({
  openedDrawer,
  requestList,
  status,
  onChangeStatus,
  onShowRequestDetail,
}) {
  return (
    <StyledMainContent openedDrawer={openedDrawer}>
      <Typography variant="h2" color="primary">
        Room requests
      </Typography>
      <Grid container spacing={2}>
        {statusList.map((ele, i) => (
          <Grid item key={i + 1}>
            <StatusChip
              label={ele}
              variant={i + 1 === status ? "filled" : "outlined"}
              color="primary"
              clickable
              onClick={() => {
                console.log("Approved filter");
                onChangeStatus(i + 1);
              }}
            />
          </Grid>
        ))}
      </Grid>
      {requestList.map((req) => (
        <RequestCard
          key={req.requestId}
          request={req}
          onClickCard={onShowRequestDetail}
        />
      ))}
    </StyledMainContent>
  );
}

function AdminScreen() {
  const [openedDrawer, setOpenedDrawer] = useState(true);
  const [floorList, setFloorList] = useState([]);
  const [currentFloorId, setCurrentFloorId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [requestList, setRequestList] = useState([]);
  const [status, setStatus] = useState(1);

  const openingDrawer = () => {
    setOpenedDrawer(true);
  };
  const closingDrawer = () => {
    setOpenedDrawer(false);
  };
  const changeFloor = (floorId) => {
    console.log(`Set floor ID to ${floorId}`);
    setCurrentFloorId(floorId);
    getRequestList(floorId, status);
  };
  const changeStatus = (newStatus) => {
    console.log(`Set status to ${newStatus}`);
    setStatus(newStatus);
    getRequestList(currentFloorId, newStatus);
  };
  const getFloorList = async () => {
    try {
      const response = await floorAPI.getAllFloors();

      if (response.status === "OK") {
        setFloorList(response.data);
        setLoading(false);
      } else console.error(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getRequestList = async (floorId, status) => {
    try {
      let response = await bookingRequestAPI.getRequestList(floorId, status);

      if (response.status === "OK") {
        console.log("Request list got from API: ");
        console.table(response.data);
        setRequestList(response.data);
      } else console.error(response.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    getFloorList();
    getRequestList(currentFloorId, status);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h1>Loading</h1>;

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
      {floorList.length > 0 ? (
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
                    <ArrowBackIosNewRounded />
                  </IconButton>
                </DrawerHeader>
                <TextField label="Search" />
                <FloorList>
                  {floorList.map(({ floorId, floorName }) => (
                    <FloorButton
                      key={floorId}
                      variant={
                        floorId === currentFloorId ? "contained" : "text"
                      }
                      onClick={() => {
                        changeFloor(floorId);
                      }}
                    >
                      <Typography variant="h5" value={floorId}>
                        {floorName}
                      </Typography>
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
            <ArrowForwardIosRounded />
          </OpeningDrawerButton>
          <MainContent
            openedDrawer={openedDrawer}
            requestList={requestList}
            status={status}
            onChangeStatus={(newStatus) => {
              changeStatus(newStatus);
            }}
          />
        </Box>
      ) : (
        <h1>Loading main content...</h1>
      )}
      <Modal open={true}>

      </Modal>
    </StyledAdminScreen>
  );
}

export default AdminScreen;
