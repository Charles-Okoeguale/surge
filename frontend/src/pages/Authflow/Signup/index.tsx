import React from "react";
import { Box, Typography} from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles";
import { AppleSvg, GoogleSvg, LogoSVG } from '../../../components/Svg';
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";

function Signup() {

    const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Box className={classes.container}>
             <Box className={classes.logo}>
                <LogoSVG/>
             </Box>
            <Box className={classes.content}>
                <Box className={classes.typography}> 
                <Typography 
                style={{
                color: "white", 
                fontSize: "2rem", 
                fontWeight: "700"}
                }>
                    Get Started With Muuiew
                </Typography>
                <Typography className={classes.theBest}>Get the best out of music everyday and anyday or today with reviews too.</Typography>
                </Box>

                    <Button className={classes.button}>
                    <Box className={classes.googleSvg}>
                        <GoogleSvg />
                    </Box>
                    <Typography 
                    style={{
                    color: 'white',
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19px"
                    }}>
                        CONTINUE WITH GOOGLE
                    </Typography>
                </Button>
                <Button className={classes.button}>
                    <Box className={classes.appleSvg}>
                        <AppleSvg />
                    </Box>
                    <Typography 
                    style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19px"
                    }}>
                        CONTINUE WITH Apple
                    </Typography>
                </Button>
            
                
                <Typography style={{
                    color: "rgba(255, 255, 255, 0.4)"
                }} >By logging in you accept our <span style={{color: "white"}}>Terms & Conditions</span></Typography>
            </Box>
        </Box>
        <Box className={classes.aside}/>
    </Box>
   
  )
}

export default Signup;

const useStyles = makeStyles((theme: Theme)=>
    ({
    root:{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: '100vh',
        background: "#111827"
    },

    logo:{
        marginLeft: "2rem",
        width: "6.1em",
        height: "3.1em"
    },

    container:{
        width: "50%",
        
    },

    content:{
       position: "relative",
       top: "200px",
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       gap:'20px'
    },

    typography:{
        display: "flex",
        flexDirection: "column",
        gap: "10px"

    },

    getStarted:{
        fontFamily: 'Barlow',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "100px",
        lineHeight: "48px",
        letterSpacing: "-0.05em",
        color: "#FFFFFF"
    },

    theBest:{
        // fontFamily: 'Barlow',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "10px",
        lineHeight: "17px",
        letterpacing: "-0.05em",
        color: "rgba(255, 255, 255, 0.4)"
    },

    

    button:{
        width: "520px",
        height: "60px",
        background: "rgba(255, 225, 225, 0.05)",
        borderRadius: "16px"

    },
    googleSvg:{
        position: "relative",
        right: "139px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px"
    },

    appleSvg:{
        position: "relative",
        right: "147px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "16px"
    },

    aside:{
        width: "50%",
        backgroundColor:"#172135"
    }

}))
