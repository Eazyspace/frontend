import { StyledRegisterScreen,RegisterForm,RegisterContent, RegisterTitle,Stepcircle, Stepbar } from "./RegisterScreen.styled";
import { Navbar,HomeLogo, HomeView, FloorBtn, Content,UserTitleButton} from "./HomeScreen.styled";
import { Typography,TextField,Button } from "@mui/material";
import useWindowDimensions from "../components/Windowdimension"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ezBlue,ezGrey } from "../utils/colors";

function RegisterScreen() {
  const { height, width } = useWindowDimensions();
  const [step, setStep]=useState(0)
  const [direct, setDirect]=useState(false)
  console.log(step);

  const nextStep=()=>{
    setDirect(true);
    setStep(step+1)
  }
  const backStep=()=>{
    setDirect(false);
    setStep(step-1);
  }
  const Regist1=()=>{
    return(
      <motion.div
      initial={direct? {x:200, opacity:0} :  {x:-200, opacity:0}}
      animate={{ x: 0,opacity:1}}
      transition={{ duration: 0.5 }}
      >
          <RegisterForm>
            <Typography variant="h4" textAlign={'center'} marginTop={'2vh'} >Enter your basic Info</Typography>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'25vh',marginLeft:'3rem',marginRight:'3rem'}}>
                <TextField label="Full name" />
                <TextField label="Birthday" />
                <TextField label="Phone Number" />
            </div>
            <Button variant="contained" style={{marginLeft:'3rem',marginRight:'3rem'}} component={Link} to="/" 
                onClick={()=>nextStep()}
            >
            <Typography>Next</Typography>
            </Button>
          </RegisterForm>
        </motion.div>
    )
  }
  const Regist2=()=>{
    return(
      <motion.div
             initial={direct? {x:200, opacity:0} :  {x:-200, opacity:0}}
             animate={{ x: 0,opacity:1}}
             transition={{ duration:  0.5 }}
        >
        <RegisterForm>
            <Typography variant="h4" textAlign={'center'} marginTop={'2vh'} >Enter your academic Info</Typography>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'35vh',marginLeft:'3rem',marginRight:'3rem'}}>
                <TextField label="Student ID" />
                <TextField label="Academic email" />
                <TextField label="Falcuty" />
                <TextField label="Club" />
            </div>
            <div style={{display:"flex",flexDirection:'row'}}>
             <Button variant="contained" style={{marginLeft:'3rem',marginRight:'3rem', width:'50vw'}} component={Link} to="/" 
                onClick={()=>backStep()}
              >
              <Typography>Back</Typography>
              </Button>
              <Button variant="contained" style={{marginLeft:'3rem',marginRight:'3rem', width:'50vw'}} component={Link} to="/" 
                onClick={()=>nextStep()}
              >
              <Typography>Next</Typography>
              </Button>
            </div>
        </RegisterForm>

      </motion.div>
    )
  }
  const Regist3=()=>{
    return(
      <motion.div
             initial={direct? {x:200, opacity:0} :  {x:-200, opacity:0}}
             animate={{ x: 0,opacity:1}}
             transition={{ duration:  0.5 }}
        >
        <RegisterForm>
            <Typography variant="h4" textAlign={'center'} marginTop={'2vh'} >Enter your acount Info</Typography>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'35vh',marginLeft:'3rem',marginRight:'3rem'}}>
                <TextField label="Username" />
                <TextField label="Password" />
                <TextField label="Confirm Password" />
            </div>
            <div style={{display:"flex",flexDirection:'row'}}>
             <Button variant="contained" style={{marginLeft:'3rem',marginRight:'3rem', width:'50vw'}} component={Link} to="/" 
                onClick={()=>backStep()}
              >
              <Typography>Back</Typography>
              </Button>
              <Button variant="contained" style={{marginLeft:'3rem',marginRight:'3rem', width:'50vw'}} component={Link} to="/" 
                onClick={()=>nextStep()}
              >
              <Typography>Next</Typography>
              </Button>
            </div>
        </RegisterForm>

      </motion.div>
    )
  }
  const Regist4=()=>{
   return( <motion.div
             initial={direct? {x:200, opacity:0} :  {x:-200, opacity:0}}
             animate={{ x: 0,opacity:1}}
             transition={{ duration:  0.5 }}
        >
         <RegisterForm>
            <Typography variant="h5" textAlign={'center'} margin={'2vh'} >We have sent an activation link to your email v***@gmail.com. 
            Please activate in order to fully explore all of our features.</Typography>
          
            <div style={{display:"flex",flexDirection:'row',marginLeft:'7vh',marginRight:'7vh',justifyContent:'space-evenly'}}>
              <Typography>Didn’t see the link? Resend Email</Typography>
            </div>
        </RegisterForm>
    </motion.div>
   )
  }
  return (
    <StyledRegisterScreen>
      <Navbar height={height*0.1}>
        <HomeLogo variant="h1">EazySpace</HomeLogo>
        <UserTitleButton
          onClick={() => {
            console.log("click");
          }}
        >
          <Typography variant="h5">Log in</Typography>
        </UserTitleButton>
      </Navbar>

      <RegisterContent>
        <div style={{display:'flex',flexDirection:'row', marginTop:'3rem'}}>
          <Stepcircle contents={ezBlue}/>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Stepbar  contents={step>0? ezBlue:ezGrey}/>
          </div>
          <Stepcircle contents={step>0? ezBlue:ezGrey}/>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Stepbar contents={step>1? ezBlue:ezGrey}/>
          </div>
          <Stepcircle contents={step>1? ezBlue:ezGrey}/>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Stepbar contents={step>2? ezBlue:ezGrey}/>
          </div>
          <Stepcircle  contents={step>2? ezBlue:ezGrey}/>
        </div>
         {step===0? <Regist1/> :step==1? <Regist2/>:step==2? <Regist3/> :step==3? <Regist4/>:<div/> }
      </RegisterContent>
    </StyledRegisterScreen>
  );
}

export default RegisterScreen;
