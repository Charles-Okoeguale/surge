import { Box} from '@mui/material'
import { makeStyles } from "@mui/styles";

const Customdivider = () => {
    const classes = useStyles();
  return (
    <Box className={classes.root}>
       <hr className={classes.line}/>
        <p style={{fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.2)', fontWeight: '600', margin: 'auto'}}>Or</p>
       <hr className={classes.line}/>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginTop: '2rem',
        width: '40rem',
        alignItems : 'center',
    },
    line : {
        width: '240px',
        height: '0px',
        border: '0.4px rgba(255, 255, 255, 0.2)',
    }
}))

export default Customdivider
