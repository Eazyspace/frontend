
import React, { Component,useState } from 'react'
import { Navbar,HomeLogo,Usertitle,Navfloor,HomeView,FloorBtn,Content, Roomfloor, Info} from './HomeScreen.styled'
import {TextField,Button} from '@mui/material'
import Room from '../components/Room';

var domain = [
  "Ground",
  "Floor 1",
  "Floor 2",
  "Floor 3",
  "Floor 4",
  "Floor 5",
  "Floor 6",
  "Floor 7",
  "Floor 8",
  "Floor 9",
  "Floor 10",
  "Floor 11",
  "Floor 12",

];
const HomeScreen=()=>{
   const [floorNum,SetFloor]=useState("");

   const setFloor=(flr)=>{
       SetFloor(flr)
   }
   
   return(
         <HomeView>
            <Navbar>
              <HomeLogo>
                 EazySpace
              </HomeLogo>
              <Usertitle>
                 Vu Duc Huy
              </Usertitle>
            </Navbar>
            <Content>
               <Navfloor>
                  {domain.map((flr)=>(
                     <FloorBtn onClick={()=>setFloor(flr)}>
                        {flr}
                     </FloorBtn>
                  ))}
               </Navfloor>
              <Roomfloor>
                 <Room FloorNum={floorNum} />
              </Roomfloor>
            </Content>
         </HomeView>

   )
}
export default HomeScreen;