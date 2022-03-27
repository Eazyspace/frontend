import React, { Component } from 'react';
import { LoginForm, LoginView,TextLogo,LoginBox,Input,LoginBoxNoBorder,
         Click,NavLink,Blankspace

} from './Login.style';

const LoginScreen=()=>{
    return(
       <LoginView>
         <LoginBoxNoBorder>
         <TextLogo variant='header'>
           EazySpace
         </TextLogo>
         <TextLogo>
         Gathering has never been easier
         </TextLogo>
         </LoginBoxNoBorder>

        
         <LoginForm>

            <LoginBoxNoBorder>
                <b><font size = "5">Welcome back!</font></b>
            </LoginBoxNoBorder>
            <Blankspace/>
            <LoginBox >
                 <Input placeholder='Username'/>
            </LoginBox>
            <LoginBox>
                 <Input placeholder='Password'/>
            </LoginBox>
             <Blankspace/>
            <LoginBoxNoBorder>
                <Click> <font size = "16px" color='#fff'>LOG IN</font></Click>
            </LoginBoxNoBorder>
            <LoginBoxNoBorder>
                 <font size = "20px">Don't have an account?</font>
                 <NavLink to='/NavLink'>
                    <font size = "20px">Register here</font>
                 </NavLink>
            </LoginBoxNoBorder>
         </LoginForm>
       </LoginView>
    )
}
export default LoginScreen;