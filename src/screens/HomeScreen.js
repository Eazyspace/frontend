import React, { useState } from "react";
import {
  Navbar,
  HomeLogo,
  UsertitleButton,
  Navfloor,
  HomeView,
  FloorBtn,
  Content,
  Roomfloor,
} from "./HomeScreen.styled";
import Room from "../components/Room";
import { TextField, Typography } from "@mui/material";

var domain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomeScreen = () => {
  const [floorNum, SetFloor] = useState("");

  const setFloor = (flr) => {
    SetFloor(flr);
  };

  return (
    <HomeView>
      <Navbar>
        <HomeLogo variant="h1">EazySpace</HomeLogo>
        <UsertitleButton
          onClick={() => {
            console.log("click");
          }}
        >
          <Typography variant="h5">Vu Duc Huy</Typography>
        </UsertitleButton>
      </Navbar>
      <Content>
        <Navfloor>
          <TextField label="Search" />
          {domain.map((flr) => (
            <FloorBtn onClick={() => setFloor(flr)}>
              <Typography variant="h5">
                {flr !== 0 ? "Floor " + flr : "Ground"}
              </Typography>
            </FloorBtn>
          ))}
        </Navfloor>
        <Roomfloor>
          <Room FloorNum={floorNum} />
        </Roomfloor>
      </Content>
    </HomeView>
  );
};
export default HomeScreen;
