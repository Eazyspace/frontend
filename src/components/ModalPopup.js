import { Typography } from '@mui/material'
import React, { Component } from 'react'
import styled from 'styled-components'
import { ezShadow2_high, ezShadow2_low } from '../utils/shadows'
import ProfileAvatar from './ProfileAvatar'
import { Boundbox } from './ProfileInfo'
import RoomAvatar from './RoomAvatar'
import useWindowDimensions from "../components/Windowdimension"
import { ezBlue,ezGreen } from "../utils/colors";
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

const ModalPopup=()=>{
    const { height, width } = useWindowDimensions();
    return(
      <Pop contents={width*0.4}>
          <div style={{display:'flex',flexDirection:'column',margin:'2rem'}}>
             <Row variant="header">
                <div style={{margin:'0.5rem'}}><ProfileAvatar></ProfileAvatar></div>
                <Boundbox variant="status"><Typography variant='h5'margin={'0.5rem'} >Approved</Typography></Boundbox>
                <div style={{margin:'0.5rem'}}><RoomAvatar roomId={32} ></RoomAvatar></div>
             </Row>
             <div style={{display:'flex',flexDirection:'column',background:ezGreen,borderRadius:'10px',marginBottom:'2rem',marginTop:'2rem'}}>
                <Typography variant='h4' margin={'0.5rem'}>Response note</Typography>
                <Typography variant='h5' margin={'0.5rem'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare malesuada luctus. Donec sed aliquet urna.</Typography>
             </div>
             <Row>
               <Typography color={'#808080'}>Date</Typography>
               <Typography color={'#808080'}>Friday, 1/4/2022</Typography>
             </Row>
             <Row>
               <Typography color={'#808080'}>Time</Typography>
               <Typography color={'#808080'}>1:49 - 2:49 PM</Typography>
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
                <Typography variant='h4' margin={'0.5rem'}>Response note</Typography>
                <Typography variant='h5' margin={'0.5rem'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare malesuada luctus. Donec sed aliquet urna.</Typography>
             </div>
          </div>
      </Pop>
    )
}
export default ModalPopup;