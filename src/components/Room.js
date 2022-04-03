import React,{useState} from 'react';
import { Grid,Paper } from '@mui/material';
import styled from "styled-components";
import Inf from '../components/Inf';
const ButtonBox=styled.button`
   height: 80px;
   width: 200px;
   border-radius: 10px;
   border:none;
   outline:none;
   background: #fff;
   box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
   &:hover{
      color:#fff; 
      background: #1F75FF;
    }
`
const Info=styled.div`
    flex:${props => props.variant =='info' ? 2:3 };
    align-items: center;
    height:800px;
`
const RoomContent=styled.div`
    display:flex;
    flex-direction: row;
    
`
var domain=[
    {
        FloorId: "Ground",
        RoomId:["I1","I2","I3",'I4']
    },
    {
        FloorId: "Floor 1",
        RoomId:["I11","I12","I13",'I14']
    }
    ,
    {
        FloorId: "Floor 2",
        RoomId:["I21","I22","I23",'I24']
    }
    ,
    {
        FloorId: "Floor 3",
        RoomId:["I31","I32","I33",'I34']
    }
]

const Room=({FloorNum})=>{
    var RoomList=[];
    //console.log(FloorNum)
    const [RoomInf,SetRoom]=useState("");
    for(let i=0;i< domain.length;i++){
        if(FloorNum==domain[i].FloorId) RoomList=domain[i].RoomId;
    }
    const showRoom=(room)=>{
        SetRoom(room)
        
    }
    return(
       <RoomContent>
         <Info >
            <Grid container spacing={3} >
            {RoomList.map((room)=>(
                <Grid item xs={12} sm={6} md={4}>
                        <ButtonBox onClick={()=>showRoom(room)}>{room}</ButtonBox>
                </Grid>
            ))}
            </Grid>
         </Info>
         <Info variant="info">
             <Inf RoomInfo={RoomInf}/>
         </Info>
       </RoomContent>
    )
}
export default Room;