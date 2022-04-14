import React, { Component } from 'react'
import { Typography } from '@mui/material';
import styled from 'styled-components';
const InfoForm=styled.div`
    display: flex;
    margin-top: 3rem;
    margin-left:40%;
    margin-right: 1rem;
    flex-direction: column;
    align-self: flex-end;
    height: 50%;
`
const Rowline=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex: 1;
`
const ButtonChoose=styled.button`
   height: 40px;
   border-radius: 10px;
   width: 100%;
   border:none;
   outline:none;
   color:#fff;
   visibility: ${props => props.variant =="hidden" ? "hidden": "visible" };
   background: #1F75FF;
   &:hover{
      color:#1F75FF; 
      background: #000;
    }

`

const Inf=({RoomInfo})=>{
    
      return(
         <InfoForm>
             <Typography fontWeight="fontWeightBold" variant="h4" flex={1} marginBottom={5} >{RoomInfo!=""? ("Room: "+RoomInfo.roomId): "Please select your room" }</Typography>
             <Rowline >
               <Typography variant="h6">{RoomInfo!=""? "Room size:":""}</Typography>
               <Typography variant="h6">{RoomInfo!=""?(RoomInfo?.roomLength+"x"+RoomInfo?.roomWidth):""}</Typography>
             </Rowline>
             <Rowline>
               <Typography variant="h6">{RoomInfo!=""? "Capacity:": ""}</Typography>
               <Typography variant="h6">{RoomInfo!=""? RoomInfo?.maxCapacity:""}</Typography>
             </Rowline>
             <Typography variant="h6" flex={1}>{RoomInfo!=""? "Description:":""}</Typography>
             <Typography variant="body1" width={410} flex={4}>{RoomInfo.description}</Typography>
             <ButtonChoose  alignSelf={'center'} variant={RoomInfo==""? "hidden":""}  >{"Book this room"}</ButtonChoose>
         </InfoForm>
      )
}
export default Inf;