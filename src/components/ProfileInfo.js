import { Typography} from '@mui/material'
import React, { Component,useState } from 'react'
import styled from 'styled-components'
import { ezShadow2_high, ezShadow2_low } from '../utils/shadows'
import "../utils/hideScrollbar.css";
import "../utils/Animation.css";
import { ezBlue,ezGreen } from "../utils/colors";
import Popup from "reactjs-popup";
import ModalPopup from './ModalPopup';
import zIndex from '@mui/material/styles/zIndex';
import RoomAvatar from './RoomAvatar';
import {useScrollLock} from './scrollLock'
const Bigbox=styled.div`
     box-shadow: ${ezShadow2_high};
     overflow: scroll;
     display:flex;
     flex-direction: column;
     margin-top: 1rem;
     margin-left: 1rem;
     margin-right: 1rem;
`
const FlatList=styled.button`
     box-shadow: ${ezShadow2_low};
     display:flex;
     flex-direction: row;
     justify-content: space-between;
     background: fixed;
     border: none;
     margin:1rem;
`
export const Boundbox=styled.div`
     border-radius: ${(props) => (props.variant == "status" ? '10px' : '50%')};
     background:${(props) => (props.variant == "status" ? ezGreen : ezBlue)};
     margin: ${(props) => (props.variant == "status" ? '1.3rem' : '0.5rem')};
   
`
var domain=[
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    },
    {
        roomId:32,
        startDate:12,
        endDate:13,
        Description:"nothing",
        status:"Approved",
    }
]

const ProfileInfo=()=>{
    const [showpopUp, setPopUp] = useState(false);
    const { lockScroll, unlockScroll } = useScrollLock();
    const showPopUp=(state)=>{
        lockScroll();
        setPopUp(state)
    }
    
    return(
        
        <Bigbox className='example'>
          {
              domain.map((line)=>(
                  <FlatList onClick={() => showPopUp(true)}>
                      <div style={{margin:'0.5rem'}}><RoomAvatar roomId={line.roomId}></RoomAvatar></div>
                     <div style={{display:'flex',flexDirection:'column',flex:'4',margin:'1rem'}}>
                         <Typography textAlign={'start'}>{line.startDate+" "+line.endDate}</Typography>
                         <Typography textAlign={'start'}>{line.Description}</Typography>
                     </div>
                     <Boundbox variant="status"><Typography variant='h5'margin={'0.5rem'} >{line.status}</Typography></Boundbox>
                  </FlatList>
              ))
          }
           <Popup modal open={showpopUp} onClose={() => showPopUp(false)} overlayStyle={ {background: "rgba(0,0,0,0.1)",zIndex:1100}} className='popup-content'>
             <ModalPopup/>
           </Popup>
        </Bigbox>
        
    )

}
export default ProfileInfo;