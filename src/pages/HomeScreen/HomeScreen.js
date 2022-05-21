import { TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../api/auth";
import floorAPI from "../../api/floor";

import Header from "../../components/Header/Header";
import Room from "../../components/Room/Room";
import { ezBlue } from "../../utils/colors";
import {
  Content,
  FloorBtn,
  HomeView,
  Navfloor,
  Roomfloor,
} from "./HomeScreen.styled";

var domain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomeScreen = () => {
  const navigate = useNavigate();
  const [floorNum, setFloorNum] = useState(1);
  const [floorData,setFloorData]=useState([])
  const handleSetFloor = (flr) => {
    setFloorNum(flr);
  };
  const fetchFloor = async () => {
    const response = await floorAPI.getAllFloors();
    console.log(response.data)
    setFloorData(response.data)
  };

  useEffect(() => {
    // console.log(userAPI.getAllUserInfo().data);
    if (!authAPI.checkLoggedIn()) navigate("/login");
    fetchFloor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeView>
      <Header />
      <Content>
        <Navfloor>
          <TextField label="Search" />
          <div
            style={{ maxHeight: "70vh", overflow: "scroll", marginTop: "2em" }}
          >
            {floorData.map((flr) => (
              <div
                style={{
                  display: "block",
                }}
              >
                <FloorBtn
                  style={{
                    color: floorNum === flr.floorId ? ezBlue : "inherit",
                    marginBottom: "1em",
                  }}
                  key={flr.floorId}
                  onClick={() => handleSetFloor(flr.floorId)}
                >
                  <Typography variant="h5">
                    {flr.floorName}
                  </Typography>
                </FloorBtn>
              </div>
            ))}
          </div>
        </Navfloor>
        {/* !! <=> Boolean(floorNum) */}
        <Roomfloor>
          {!!(floorNum > -1) ? <Room floorNum={floorNum} /> : <></>}
        </Roomfloor>
      </Content>
    </HomeView>
  );
};
export default HomeScreen;
