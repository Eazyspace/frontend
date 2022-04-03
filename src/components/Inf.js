import React, { Component } from 'react'
import { Typography } from '@mui/material';
import styled from 'styled-components';
const InfoForm=styled.div`
    display: flex;
    margin-top: 3rem;
    margin-left: 10rem;
    flex-direction: column;
    height: 70%;
`
const Rowline=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    flex: 1;
`
const ButtonChoose=styled.button`
   height: 40px;
   border-radius: 10px;
   width: 400px;
   border:none;
   outline:none;
   color:#fff;
   background: #1F75FF;
   &:hover{
      color:#1F75FF; 
      background: #000;
    }

`

var domain=[
    {
        RoomID:"I11",
        RoomSize:"11X12",
        Capacity:"40",
        Description:"s triggering a re-render. This will call the event callback again and causes React to stop and throw the 'Too many re-renders.' error.",
    },
    {
        RoomID:"I22",
        RoomSize:"11X21",
        Capacity:"40",
        Description:"Quite frequently you might want to use a component, but change it slightly for a single case. Now, you could pass in an interpolated function and change them based on some props, but that's quite a lot of effort for overriding the styles once.    ",
    },
    {
        RoomID:"I33",
        RoomSize:"21X11",
        Capacity:"40",
        Description:"To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor.",
    },
    {
        RoomID:"I12",
        RoomSize:"11X31",
        Capacity:"40",
        Description:"Here we use the button from the last section and create a special one, extending it with some color-related styling: ",
    },
    
]
const Inf=({RoomInfo})=>{
    var RoomI="";
    //console.log(RoomInfo)
    for(let i=0;i< domain.length;i++){
        if(RoomInfo==domain[i].RoomID){
            RoomI=domain[i];
            //console.log(domain[i])
        } 
    }
      return(
         <InfoForm>
             <Typography fontWeight="fontWeightBold" variant="h4" flex={1} marginBottom={5} >{"Room "+(RoomI?.RoomID||"")}</Typography>
             <Rowline >
               <Typography variant="h6">{"Room size:"}</Typography>
               <Typography variant="h6">{RoomI.RoomSize}</Typography>
             </Rowline>
             <Rowline>
               <Typography variant="h6">{"Capacity:"}</Typography>
               <Typography variant="h6">{RoomI.Capacity}</Typography>
             </Rowline>
             <Typography variant="h6" flex={1}>{"Description:"}</Typography>
             <Typography variant="body1" width={410} flex={4}>{RoomI.Description}</Typography>
             <ButtonChoose  alignSelf={'center'}>Book This Room</ButtonChoose>
         </InfoForm>
      )
}
export default Inf;