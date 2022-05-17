import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CalendarTodayRounded,
  CheckRounded,
  ClearRounded,
  MoreHorizRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import floorAPI from "../../api/floor";
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
  UserAndRoom,
  RowLine,
  DescriptionField,
  ApproveButton,
  DeclineButton,
  StyledDialog,
  ResponseNoteBox,
  RequestStatusIcon,
} from "./AdminScreen.styled";
import { ezBlack, ezGrey } from "../../utils/colors";
import requestAPI from "../../api/request";
import userAPI from "../../api/user";
import { useNavigate } from "react-router-dom";
import { ezShadow1_low } from "../../utils/shadows";

// Enum
const statusList = {
  1: "Pending",
  2: "Approved",
  3: "Declined",
};

function RequestCard({
  request: { requestId, roomId, userId, eventName, startTime, endTime },
  onClickCard,
}) {
  return (
    <StyledRequestCard
      onClick={() => {
        onClickCard(requestId);
      }}
    >
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
          <Typography variant="h4" noWrap sx={{ textAlign: "left" }}>
            {!eventName ? "NẺD VS WJBU: DAWN OF THE LAME" : eventName}
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

function MainContent({
  openedDrawer,
  requestList,
  status,
  onChangeStatus,
  onShowRequestDetail,
  loadingRequestList,
}) {
  return (
    <StyledMainContent openedDrawer={openedDrawer}>
      <Typography variant="h2" color="primary">
        Room requests
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(statusList).map(([key, value]) => (
          <Grid item key={parseInt(key)}>
            <StatusChip
              label={value}
              // eslint-disable-next-line eqeqeq
              variant={key == status ? "filled" : "outlined"}
              color="primary"
              clickable
              onClick={() => {
                // eslint-disable-next-line eqeqeq
                if (key != status) onChangeStatus(key);
              }}
            />
          </Grid>
        ))}
      </Grid>
      {!requestList ? (
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: ezGrey }}>
            No requests
          </Typography>
        </Box>
      ) : !loadingRequestList ? (
        requestList.map((req) => (
          <Grid container item spacing={2}>
            <Grid item key={req.requestId}>
              <RequestCard request={req} onClickCard={onShowRequestDetail} />
            </Grid>
          </Grid>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </StyledMainContent>
  );
}

function AdminScreen() {
  /** LOCAL STATES */
  const [openedDrawer, setOpenedDrawer] = useState(true);
  const [openRequestDetail, setOpenRequestDetail] = useState(false);
  const [currentFloorId, setCurrentFloorId] = useState(1);
  const [status, setStatus] = useState(1);
  // Loaders' states
  const [loading, setLoading] = useState(true);
  const [loadingRequestList, setLoadingRequestList] = useState(false);
  // Data-related states
  const [adminInfo, setAdminInfo] = useState(null);
  const [requestList, setRequestList] = useState([]);
  const [floorList, setFloorList] = useState([]);
  const [currentRequest, setCurrentRequest] = useState(null);
  // Controlled component
  const [responseNote, setResponseNote] = useState("");
  // Other hooks
  const navigate = useNavigate();

  /** EVENT HANDLERS */
  // Drawer openers
  const openingDrawer = () => {
    setOpenedDrawer(true);
  };
  const closingDrawer = () => {
    setOpenedDrawer(false);
  };

  // Filter request list by Floor
  const changeFloor = async (newFloorId) => {
    setLoadingRequestList(true);

    console.log(`Set floor ID to ${newFloorId}`);
    setCurrentFloorId(newFloorId);
    await loadRequestList(newFloorId, status);

    setLoadingRequestList(false);
  };
  // Filter request list by status
  const changeStatus = async (newStatus) => {
    setLoadingRequestList(true);

    console.log(`Set status to ${newStatus}`);
    setStatus(newStatus);
    await loadRequestList(currentFloorId, newStatus);

    setLoadingRequestList(false);
  };

  // Show popup dialog for a request's detail
  const handleOnShowRequestDetail = (requestId) => {
    console.log("Clicked on a request card!");
    console.table(requestList.find((ele) => ele.requestId === requestId));
    setCurrentRequest(requestList.find((ele) => ele.requestId === requestId));
    setOpenRequestDetail(true);
  };

  // Controlling input-component
  const handleResponseNoteChange = (e) => {
    setResponseNote(e.target.value);
  };
  const handleResponseSubmit = (e) => {
    if (e.target.name === "approve") {
      requestAPI.approveRequest({
        requestId: currentRequest.requestId,
        responseNote: responseNote,
      });
    } else if (e.target.name === "decline") {
      requestAPI.declineRequest({
        requestId: currentRequest.requestId,
        responseNote: responseNote,
      });
    }
    setOpenRequestDetail(false);
  };

  // Fetch data from API
  const loadAdminInfo = async () => {
    try {
      let response = await userAPI.getAllUserInfo();

      if (response.status === "OK") setAdminInfo(response.data);
      else console.warn(response.message);
    } catch (er) {
      console.error(er);
    }
  };
  const loadFloorList = async () => {
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
  const loadRequestList = async (floorId, status) => {
    try {
      console.log(`Get request list: Floor ${floorId} + Status ${status}`);
      let response = await requestAPI.getRequestList({ floorId, status });

      if (response) {
        if (response.status === "OK") {
          console.log("Request list got from API: ");
          console.table(response.data);
          setRequestList(response.data);
        } else {
          setRequestList(null);
          console.error(response.message);
        }
      } else {
        setRequestList(null);
        console.log("No response");
      }
    } catch (error) {
      setRequestList(null);
      console.error(error);
    }
  };

  // Loading all necessary data
  useEffect(() => {
    setLoading(true);
    setLoadingRequestList(true);
    loadAdminInfo();
    loadFloorList();
    loadRequestList(currentFloorId, status);
    setLoading(false);
    setLoadingRequestList(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loader
  if (loading)
    return (
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
    );

  return (
    <StyledAdminScreen>
      <StyledAppBar>
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ padding: "15px 0px" }}
            onClick={() => {
              navigate("/admin");
            }}
          >
            EazySpace Admin
          </Typography>
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "white",
              padding: "10px 15px",
            }}
          >
            {adminInfo !== null ? adminInfo.name : "Log in"}
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
                <TextField label="Search" size="small" />
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
            sx={{
              ...(openedDrawer && { display: "none" }),
              boxShadow: ezShadow1_low,
            }}
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
            onShowRequestDetail={(requestId) => {
              handleOnShowRequestDetail(requestId);
            }}
            loadingRequestList={loadingRequestList}
            onReloadRequestList={setLoadingRequestList}
          />
        </Box>
      ) : (
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
      )}
      {openRequestDetail && (
        <StyledDialog
          open={openRequestDetail}
          onBackdropClick={() => {
            setOpenRequestDetail(false);
          }}
          scroll="body"
        >
          <DialogContent>
            <UserAndRoom>
              <ProfileAvatar>H</ProfileAvatar>
              <MoreHorizRounded sx={{ color: ezGrey }} />
              <RoomAvatar roomId={currentRequest.roomId} />
            </UserAndRoom>
            {currentRequest.status !== 1 && (
              <>
                <RequestStatusIcon
                  variant={currentRequest.status === 2 ? "approve" : "decline"}
                >
                  {currentRequest.status === 2 ? (
                    <CheckRounded fontSize="large" />
                  ) : (
                    <ClearRounded fontSize="large" />
                  )}
                </RequestStatusIcon>
                <ResponseNoteBox
                  variant={currentRequest.status === 2 ? "approve" : "decline"}
                >
                  <Typography variant="h5">Response note</Typography>
                  <Typography variant="body">
                    {currentRequest.responseNote}
                  </Typography>
                </ResponseNoteBox>
              </>
            )}
            <Grid
              container
              direction="column"
              rowSpacing={2}
              sx={{ padding: "30px 0px" }}
            >
              <Grid item>
                <RowLine>
                  <Typography variant="body1" color={ezGrey}>
                    Date
                  </Typography>
                  <Typography variant="body1" color={ezBlack}>
                    {new Date(currentRequest.startTime).toDateString()}
                  </Typography>
                </RowLine>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <RowLine>
                  <Typography variant="body1" color={ezGrey}>
                    Time
                  </Typography>
                  <Typography variant="body1" color={ezBlack}>
                    {new Date(currentRequest.startTime).toLocaleTimeString([], {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    -{" "}
                    {new Date(currentRequest.endTime).toLocaleTimeString([], {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                </RowLine>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <RowLine>
                  <Typography variant="body1" color={ezGrey}>
                    Event name
                  </Typography>
                  <Typography variant="body1" color={ezBlack} noWrap>
                    {!currentRequest.eventName
                      ? "NẺD VS WJBU: DAWN OF THE LAME"
                      : currentRequest.eventName}
                  </Typography>
                </RowLine>
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              {currentRequest.hasOwnProperty("organization") &&
                currentRequest.organization !== "" && (
                  <>
                    <Grid item>
                      <RowLine>
                        <Typography variant="body1" color={ezGrey}>
                          Organization
                        </Typography>
                        <Typography variant="body1" color={ezBlack}>
                          {currentRequest.organization}
                        </Typography>
                      </RowLine>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                  </>
                )}
              <Grid item>
                <RowLine>
                  <Typography variant="body1" color={ezGrey}>
                    Number of attendants
                  </Typography>
                  <Typography variant="body1" color={ezBlack}>
                    {currentRequest.numOfAttendants}
                  </Typography>
                </RowLine>{" "}
              </Grid>
              <Grid item>
                <Divider />{" "}
              </Grid>
              <Grid item>
                <DescriptionField>
                  <Typography variant="body1" color={ezGrey}>
                    Description
                  </Typography>
                  <Typography variant="body1" color={ezBlack}>
                    {currentRequest.description}
                  </Typography>
                </DescriptionField>
              </Grid>
            </Grid>
            {currentRequest.status === 1 && (
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{ padding: "0px 2em" }}
              >
                <Grid
                  container
                  item
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Grid item>
                    <DeclineButton
                      variant="contained"
                      name="decline"
                      onClick={handleResponseSubmit}
                    >
                      Decline
                    </DeclineButton>
                  </Grid>
                  <Grid item>
                    <ApproveButton
                      variant="contained"
                      name="approve"
                      onClick={handleResponseSubmit}
                    >
                      Approve
                    </ApproveButton>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    label="Note for the user"
                    multiline
                    required
                    name="responseNote"
                    value={responseNote}
                    onChange={handleResponseNoteChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            )}
          </DialogContent>
        </StyledDialog>
      )}
    </StyledAdminScreen>
  );
}

export default AdminScreen;
