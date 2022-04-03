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

const Inf=({RoomInfo})=>{
    
      return(
         <InfoForm>
             <Typography fontWeight="fontWeightBold" variant="h4" flex={1} marginBottom={5} >{"Room "+(RoomInfo?.roomId||"")}</Typography>
             <Rowline >
               <Typography variant="h6">{"Room size:"}</Typography>
               <Typography variant="h6">{RoomInfo?.roomLength+"x"+RoomInfo?.roomWidth+RoomInfo?.roomLength}</Typography>
             </Rowline>
             <Rowline>
               <Typography variant="h6">{"Capacity:"}</Typography>
               <Typography variant="h6">{RoomInfo?.maxCapacity}</Typography>
             </Rowline>
             <Typography variant="h6" flex={1}>{"Description:"}</Typography>
             <Typography variant="body1" width={410} flex={4}>{RoomInfo.description}</Typography>
             <ButtonChoose  alignSelf={'center'}>Book This Room</ButtonChoose>
         </InfoForm>
      )
}
export default Inf;