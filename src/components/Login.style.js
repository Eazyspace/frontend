import styled from "styled-components";
import {NavLink as Link } from 'react-router-dom'

export const Blankspace=styled.div`
   margin-top:3rem;
`
export const LoginView=styled.div`
  
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 10rem;
  flex-direction: row;
  justify-content: space-between;
  display:flex;
  
`
export const LoginForm=styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 1.95px 1.95px 4px;
  align-items: center;
  height: 400px;
  flex:1;

`
export const LoginBox=styled.div`
   margin-left: 1rem;
   margin-right: 1rem;
   margin-top: 1rem;
   height:40px;
   border-radius: 10px;
   border: 1px solid black;
`
export const Input=styled.input`
   margin-left: 20px;
   margin-top:10px;
   width: 100%;
   border:none;
   background-color: transparent;
   outline:none;
   font-size: 16px;
  
`
export const LoginBoxNoBorder=styled.div`
   margin-left: 1rem;
   margin-right: 1rem;
   margin-top: 1rem;
   text-align: center;
   flex:2.5;
`
export const Click=styled.button`
   width: 100%;
   height: 100%;
   height:40px;
   border-radius: 10px;
   border:none;
   outline:none;
   background: #0057D9;
   font-size: 16px;
   &:hover{
       background:#15cdfc; 
    }
 
`
export const NavLink=styled(Link)`
    align-items:center;
    padding:0 1rem;
    height:100%;
    cursor:pointer;
    text-decoration: none ;
    &.active{
        color:#15cdfc;
    }
`
export const TextLogo=styled.div`
  align-items: center;
  height:${(props)=>props.variant === 'header'? '100px': '50px' };
  font-family: 'Montserrat', sans-serif;
  font-size: ${(props)=>props.variant === 'header'? '100px': '50px' };
  color: ${(props)=>props.variant === 'header'? '#0057D9': '#808080' };

  margin-top: 3rem;
  text-align: center;
  
`