import { Box, Typography, OutlinedInput} from "@mui/material"
import { makeStyles } from "@mui/styles";
import {  GoogleSvg, LogoSVG } from '../../../components/Svg';
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import Customdivider from "../../../components/Divider";
import Checkbox from '@mui/material/Checkbox';
import BackgroundAnimation from "../../../components/Animation";



function Forgotpassword() {
    const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Box className={classes.container}>
             <Box className={classes.logo}>
                <LogoSVG/>
             </Box>
            <Box className={classes.content}>
            <Typography variant="h4">Forgot Password?</Typography>
            <Typography>Dont panic we got you covered!</Typography>  
            <Typography variant="h5">Email</Typography>
            <OutlinedInput/>
            <Button variant="contained">SEND RESET LINK</Button>
            </Box>
        </Box>
        <Box className={classes.aside}>
            <BackgroundAnimation/>
        </Box>
    </Box>
   
  )
}

export default Forgotpassword;

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        display: "flex",
        margin: "auto",
        width: "100%",
        height: '100vh',
        background: "#111827",
        "& .MuiTypography-body1" : {
            color: 'rgba(255, 255, 255, 0.4);',
            alignSelf : 'start',
            fontWeight: 400,
            letterSpacing: '-0.05em',
            fontSize : '14px',
            fontStyle : 'normal'
        },
        "& 	.MuiButton-contained" : {
            width: "90%",
            height: "3.75rem",
            background: "rgba(16, 185, 112, 0.1);",
            borderRadius: "1rem",
            color: " #10B970",
            marginTop: '1.5rem',
            fontWeigth: '900',
            fontSize: '1.25rem',
            lineHeight: '24px'
        },
        "& .MuiTypography-body2" : {
            marginTop : '1.5rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic'
        },
         "& .MuiOutlinedInput-root" : {
            borderRadius: '1rem', 
            background: 'rgba(255, 255, 255, 0.05);', 
            height: '3.75rem', 
            width: '90%', 
            color: 'white'
         }
    },
    logo:{
        marginLeft: "3.75rem",
        width: "6.1rem",
        height: "3.1rem"
    },

    container:{
        width: "45%",
    },

    content:{
       width: '90%',
       marginLeft: '3.75rem',
       marginTop: "17.76rem",
       display: "flex",
       flexDirection: "column",
       "& h4" : {
        fontWeight: '600',
        alignSelf: 'start',
        letterSpacing: '-0.1rem',
        color: '#FFFFFF',
        fontSize : '40px'
       },
       "& h5" : {
        alignSelf: 'start',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '1.3rem',
        fontStyle: 'italic',
        letterSpacing: '-0.05rem',
        marginTop: '2.4rem',
        marginBottom: '0.75rem'
       }
    },

    aside:{
        width: "55%",
        backgroundColor:"#172135"
    },
}))

