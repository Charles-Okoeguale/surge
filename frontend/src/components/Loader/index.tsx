import { makeStyles } from '@mui/styles'
import { Theme, Typography } from "@mui/material";
import { Box } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import {useState, useEffect} from 'react'


const Loader = () => {
    const classes  = useStyles();
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress : number) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 100);

        return () => {
        clearInterval(timer);
        };
    }, [])
  return (
    <Box className={classes.root}>
        <Box className={classes.loaderBox}>
            <Typography variant='h6'>Setting Up Your Profile...</Typography>
            <LinearProgress variant="determinate" value={progress}/>
        </Box>
    </Box>
  )
}

const useStyles : any = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        margin: "auto",
        width: "100%",
        height: '100vh',
        background: "#111827",
        "& .MuiLinearProgress-colorPrimary" : {
            backgroundColor: 'rgba(16, 185, 112, 0.1)',
       },
       "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: '#10B970',
        },
        "& .MuiLinearProgress-root": {
            width: '30em',
            margin: 'auto',
            height: '10px',
            borderRadius: '9999px'
        },
    },
    loaderBox: {
        width: "45%",
        margin: "auto",
        "& h6": {
            fontWeight: 900,
            color: '#FFFFFF',
            margin: '0.5em auto',
            fontStyle: 'normal',
            fontSize: '23px',
        },
    },
}))

export default Loader;


