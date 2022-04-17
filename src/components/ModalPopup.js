import { Typography } from '@mui/material'
import React, { Component } from 'react'
import styled from 'styled-components'
import { ezShadow2_high, ezShadow2_low } from '../utils/shadows'
import ProfileAvatar from './ProfileAvatar'
import { Boundbox } from './ProfileInfo'
import RoomAvatar from './RoomAvatar'
import useWindowDimensions from "../components/Windowdimension"
import { ezBlue,ezGreen,ezYellow,ezRed } from "../utils/colors";
const Pop=styled.div`
    box-shadow: ${ezShadow2_high};
    border-radius: 10px;
    background-color: white;
    width: ${props => props.contents}px; 
    max-height: calc(100vh );
    overflow-y: auto;
 
`
const Row=styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    height:${(props) => (props.variant == "header" ? 'auto': '70px' )}; ;
    border-bottom: ${(props) => (props.variant == "header" ? 'none' : 'solid')} #808080;
    align-items: center;
`
var Datestr=(time)=>{
  var dt = new Date(time);
    var year1  = dt.getFullYear();
    var month1 = (dt.getMonth() + 1).toString().padStart(2, "0");
    var day1   = dt.getDate().toString().padStart(2, "0");
    return day1+"/"+month1+"/"+year1;
}
var Timestr=(start,end)=>{
  var dt = new Date(start);
  var dt2 =new Date(end);
  var hour1  = dt.getHours().toString().padStart(2, "0");
  var minute1  = dt.getMinutes().toString().padStart(2, "0");
  var hour2  = dt2.getHours().toString().padStart(2, "0");
  var minute2  = dt2.getMinutes().toString().padStart(2, "0");
  return hour1+":"+ minute1+" - "+ hour2+":"+ minute2
}

const ModalPopup=({requestData})=>{
    const { height, width } = useWindowDimensions();
    console.log(requestData.status)
    return(
      <Pop contents={width*0.4}>
          <div style={{display:'flex',flexDirection:'column',margin:'2rem'}}>
             <Row variant="header">
                <div style={{margin:'0.5rem'}}><ProfileAvatar></ProfileAvatar></div>
                <Boundbox variant={requestData.status}><Typography variant='h5'margin={'0.5rem'} textAlign={'center'}>{requestData.status==1? "Approved": requestData.status==2 ?"Pending" : requestData.status==3 ?"Decline": "Approved"}</Typography></Boundbox>
                <div style={{margin:'0.5rem'}}><RoomAvatar roomId={32} ></RoomAvatar></div>
             </Row>
             <div style={{display:'flex',flexDirection:'column',background:requestData.status==1? ezGreen: requestData.status==2 ?ezYellow : requestData.status==3 ?ezRed: ezGreen,borderRadius:'10px',marginBottom:'2rem',marginTop:'2rem'}}>
                <Typography variant='h4' margin={'0.5rem'}>Response note</Typography>
                <Typography variant='h5' margin={'0.5rem'}>{requestData.responseNote}</Typography>
             </div>
             <Row>
               <Typography color={'#808080'}>Date</Typography>
               <Typography color={'#808080'}>{Datestr(requestData.startTime)}</Typography>
             </Row>
             <Row>
               <Typography color={'#808080'}>Time</Typography>
               <Typography color={'#808080'}>{Timestr(requestData.startTime,requestData.endTime)}</Typography>
             </Row>
             <Row>
               <Typography color={'#808080'}>Event Name</Typography>
               <Typography color={'#808080'}>Dawn of the Wibus</Typography>
             </Row>
             <Row>
               <Typography color={'#808080'}>Organization</Typography>
               <Typography color={'#808080'}>Wibu tra hinh</Typography>
             </Row>
             <div style={{display:'flex',flexDirection:'column',marginBottom:'2rem',marginTop:'2rem'}}>
                <Typography variant='h4' margin={'0.5rem'}>Description</Typography>
                <Typography variant='h5' margin={'0.5rem'}>{requestData.description}</Typography>
             </div>
          </div>
      </Pop>
    )
}
export default ModalPopup;