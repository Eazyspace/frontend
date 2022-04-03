import { Typography } from "@mui/material";
import styled from "styled-components";
import {TextField,Button} from '@mui/material';

export const Navbar = styled.nav`
    background: #fff;
    height: 80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgb(0,0,128,0.1) 0px 8px 10px;
   

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
    box-shadow: rgb(0,0,128,0.1) 10px 1px 10px;
    flex:1;
    height: 100%;
    display:flex;
    flex-direction: column;
`
export const HomeView=styled.div`
   display: flex;
   flex-direction: column;
`
export const Content=styled.div`
    display: flex;
    flex-direction: row;
    height:900px;
`
export const Roomfloor=styled.div`
    flex:4;
    margin-top: 30px;
    margin-left: 30px;

`
export const Info=styled.div`
    flex:4;
    align-items: center;
`
export const FloorBtn=styled.button`
   margin-left:1rem;
   margin-top:1rem;
   margin-right:7rem;
   font-size: 20px;
   height: 40px;
   width: 100px;
   border-radius: 10px;
   border:none;
   outline:none;
   background: #fff;
   &:hover{
      color:#1F75FF; 
      background: #E8E9EB;
    }

`