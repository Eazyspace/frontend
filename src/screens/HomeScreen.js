import React, {  useState } from "react";
import {
  Navbar,
  HomeLogo,
  Usertitle,
  Navfloor,
  HomeView,
  FloorBtn,
  Content,
  Roomfloor,
  Info,
} from "./HomeScreen.styled";
import Room from "../components/Room";

var domain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomeScreen = () => {
  const [floorNum, SetFloor] = useState("");

  const setFloor = (flr) => {
    SetFloor(flr);
  };

  return (
    <HomeView>
      <Navbar>
        <HomeLogo>EazySpace</HomeLogo>
        <Usertitle>Vu Duc Huy</Usertitle>
      </Navbar>
      <Content>
        <Navfloor>
          {domain.map((flr) => (
            <FloorBtn onClick={() => setFloor(flr)}>
              {flr != 0 ? "Floor " + flr : "Ground"}
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
