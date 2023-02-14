import { Box, Typography, OutlinedInput} from "@mui/material"
import { makeStyles } from "@mui/styles";
import {  GoogleSvg, LogoSVG } from '../../../components/Svg';
import Button from "@mui/material/Button";
import { Theme } from "@mui/material";
import Customdivider from "../../../components/Divider";
import Checkbox from '@mui/material/Checkbox';
import BackgroundAnimation from "../../../components/Animation";
// import { useGoogleLogin } from '@react-oauth/google';


function Login() {
    const classes = useStyles();
    // const login = useGoogleLogin({
    //     onSuccess : (tokenresponse) => console.log(tokenresponse)
    // })
  return (
    <Box className={classes.root}>
        <Box className={classes.container}>
             <Box className={classes.logo}>
                <LogoSVG/>
             </Box>
            <Box className={classes.content}>   
            <Typography variant="h4">Hey, Welcome Back!</Typography>
            <Typography variant="body1">Get the best out of music everyday and anyday or today with reviews too.</Typography>
            <Button variant="text">
                <Box className={classes.googleSVG}>
                    <GoogleSvg />
                </Box>
                <Typography variant="h6">CONTINUE WITH GOOGLE</Typography>
            </Button>
            <Customdivider/>
            <Typography variant="h5">Email or Username</Typography>
            <OutlinedInput/>
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
            <Typography variant="h2">Password</Typography>
            <Typography variant="h1">Forgot Password</Typography>
            </Box>
            <OutlinedInput/>
            <Box className={classes.checkbox}>
            <Checkbox/>
            <Typography variant="caption">By signing in i agree to the <span style={{color: 'white'}}>TCs.</span></Typography>
            </Box>
            <Button variant="contained">LOGIN</Button>
            <Typography variant="body2">Dont have an account yet? <span style={{color: '#10B970'}}>Sign Up</span></Typography>
            </Box>
        </Box>
        <Box className={classes.aside}>
            <BackgroundAnimation/>
        </Box>
    </Box>
   
  )
}

export default Login;

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
            fontSize : '14px'
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

    checkbox: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.4);',
        letterSpacing: '-0.05rem',
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
       marginTop: "4.56rem",
       display: "flex",
       flexDirection: "column",
       "& .MuiButton-text" : {
        display: 'flex',
        width: '90%',
        borderRadius: "1rem",
        background: 'rgba(255, 255, 255, 0.05);',
        marginTop: '2.5rem',
        height: '3.75rem',
        "& h6": {
            margin: 'auto',
            fontSize : '1rem',
            color : 'rgba(255, 255, 255, 1)'
        }
    },
       "& h4" : {
        fontWeight: '600',
        alignSelf: 'start',
        letterSpacing: '-0.1rem',
        color: '#FFFFFF',
        fontSize : '40px'
       },
       "& h6" : {
        fontWeight: '600',
        fontSize: '0.8rem',
        color: ' rgba(255, 255, 255, 0.4);',
        fontStyle: 'normal',
        letterSpacing: '-0.02rem',
        lineHeight: '1rem',
        alignSelf: 'start',
        marginTop: '0.5em'
       },
       "& h5" : {
        alignSelf: 'start',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '1em',
        fontStyle: 'italic',
        letterSpacing: '-0.05rem',
        marginTop: '2.4rem',
        marginBottom: '0.75rem'
       }, 
       "& h2" : {
        alignSelf: 'start',
        fontWeight: '600',
        color: '#FFFFFF',
        fontSize: '16px',
        fontStyle: 'italic',
        letterSpacing: '-0.05rem',
        marginTop: '1.28rem',
        marginBottom: '0.85rem'
       }, 
       "& h1" : {
       alignSelf: 'center',
        fontWeight: '300',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.85rem',
        fontStyle: 'italic',
        letterSpacing: '-0.05rem',
        marginTop: '1.28rem',
       }
    },

    button:{
        width: "90%",
        height: "3.75rem",
        background: "green",
        borderRadius: "1rem",
        color: " #10B970",
        marginTop: '1.5rem'
    },

    aside:{
        width: "55%",
        backgroundColor:"#172135"
    },
    googleSVG: {
        display: "flex",
        width: "3.75rem",
        height: "3.75rem",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "1rem",
        marginLeft : '-0.5rem'
    },
}))
