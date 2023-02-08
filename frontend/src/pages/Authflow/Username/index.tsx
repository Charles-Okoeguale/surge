import { Box, Typography, OutlinedInput} from "@mui/material"
import { makeStyles } from "@mui/styles";
import {  LogoSVG } from '../../../components/Svg';
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";



function Username() {
    const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Box className={classes.container}>
             <Box className={classes.logo}>
                <LogoSVG/>
             </Box>
            <Box className={classes.content}>
            <Box>
                <Typography 
                variant="h4" 
                style={{
                color: "white",
                fontWeight: "700"
                }}>
                    Set Username
                </Typography>
                <Typography 
                variant="body2"
                style={{
                color: "rgba(255, 255, 255, 0.4)"
                }}>
                Setup your username of your liking e.g gegeoflagos
                </Typography>
            </Box>
            <OutlinedInput className={classes.input} placeholder="Enter Username"/>
            <Button className={classes.button}>Next</Button>
            </Box>
               
        </Box>
        <Box className={classes.aside}/>
    </Box>
   
  )
}

export default Username;

const useStyles = makeStyles((theme: Theme) => ({
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
       gap:'20px',
    },

    button:{
        width: "520px",
        height: "60px",
        background: "rgba(16, 185, 112, 0.1)",
        borderRadius: "16px",
        color: "#10B970"
    },

    input:{
      width: '32em',
      height: '3.5em',
      color: 'white',
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.05)"
    },

    aside:{
        width: "50%",
        backgroundColor:"#172135"
    }

}))
