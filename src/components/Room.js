import React,{useState,useEffect} from 'react';
import { Grid,Paper } from '@mui/material';
import styled from "styled-components";
import Inf from '../components/Inf';
import Box from '@mui/material/Box';
import { getRoomClient } from '../api/room';
const { default: axios } = require("axios");
const ButtonBox=styled.button`
   height: 5rem;
   width: 100%;
   border-radius: 10px;
   border:none;
   outline:none;
   background: #fff;
   box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
   &:focus{
      color:#fff; 
      background: #1F75FF;
    }
`
const Info=styled.div`
    //align-items: center;
    margin-top:2rem;
    margin-left:2rem;
`



const Room=({FloorNum})=>{
    var RoomList=[];
    const [RoomInf,SetRoom]=useState("");
    const [roomclient, setRoomClient] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        ;(async () => {
            try {
                const response = await getRoomClient.getListRoom()
                setRoomClient(response.data)
            } catch (error) {
                console.log(error.message)
            }
            setLoading(false)
        })()
    })
    roomclient.data?.map((roomdata)=>{
        if(roomdata.floorId==FloorNum) RoomList.push(roomdata);
      }
    )
    const showRoom=(room)=>{
       SetRoom(room)
    }
    return(
       <Grid container >
            <Grid item  xs={12} sm={12} md={5}  >
                <Grid  container columns={{ xs: 4, sm: 8, md: 12 }} >
                  
                        {RoomList.map((room,index)=>(
                        <Grid item xs={12} sm={6} md={4} key={index}   >
                            <Info>
                                <ButtonBox onClick={()=>showRoom(room)}>{room.roomName}</ButtonBox>
                            </Info>
                        </Grid>
                        ))}
                   
                </Grid>
           </Grid>
           <Grid xs={0} sm={0} md={7} height={'800px'} alignItems={'center'} >
             <Inf RoomInfo={RoomInf}/>
           </Grid>
       </Grid>
    )
}
export default Room;