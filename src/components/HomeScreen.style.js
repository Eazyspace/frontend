import { Typography } from "@mui/material";
import styled from "styled-components";
import {TextField,Button} from '@mui/material';

export const Navbar = styled.nav`
    background: #fff;
    height: 80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 1.95px 1.95px 4px;
   

`
export const HomeLogo=styled.div`
   font-size: 35px;
   font-family: 'Montserrat', sans-serif;
   color: #0000FF;
   margin-left: 1rem;
   letter-spacing: 0.3rem;


`
export const Usertitle=styled.div`
   font-size:20px;
   color: #000;
   margin-right: 1rem;
`
export const Navfloor=styled.nav`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 1.95px 1.95px 4px;
    margin-left: 1rem;
    margin-right: 80rem;
    height: 600px;
    display:flex;
    flex-direction: column;
`
export const HomeView=styled.div`
   display: flex;
   flex-direction: column;
  
`
export const FloorBtn=styled.button`
   margin-left:1rem;
   margin-top:1rem;
   margin-right:7rem;
   font-size: 20px;
   height: 30px;
   border-radius: 10px;
   border:none;
   outline:none;
   &:hover{
      color:#1F75FF; 
      background: #E8E9EB;
    }

`