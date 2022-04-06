
import React, { Component,useState } from 'react'
import { Navbar,HomeLogo,Usertitle,Navfloor,HomeView,FloorBtn,Content, Roomfloor, Info} from './HomeScreen.styled'
import {TextField,Button} from '@mui/material'
import Room from '../components/Room';
import { Grid,Paper } from '@mui/material';
var domain = [
  1,2,3,4,5,6,7,8,9,10,11,12

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
            <Grid container >
               <Grid item  xs={0} sm={0} md={1.5} lg={1} >
                  <Navfloor>
                  {domain.map((flr)=>(
                    <FloorBtn onClick={()=>setFloor(flr)}>
                        {flr!=1? ("Floor "+flr): "Ground"}
                     </FloorBtn> 
                  ))}
                  </Navfloor>
               </Grid>
               <Grid item  xs={12} sm={12} md={10.5} lg={11}>
                  <Room FloorNum={floorNum} />
               </Grid>
           </Grid>
         </HomeView>

   )
}
export default HomeScreen;