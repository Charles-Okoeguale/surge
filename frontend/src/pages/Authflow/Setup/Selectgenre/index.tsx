import { Button, Box, Typography, OutlinedInput } from '@mui/material';
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


function Selectgenre({genres} : any) {
  const classes = useStyles()

  return (
      <Box className={classes.body}>
        <Box className={classes.container}>
            <Typography variant='h4'>Select your favorite genre</Typography>
            <OutlinedInput placeholder='Search for genre'/>
            <Box className={classes.genreContainer}>
            {genres?.slice(0, 18).map((item : string, index : number) => 
              <Box className={classes.genre}>
                <Typography variant='body1'>{item}</Typography>
              </Box>
              )}
            </Box>
          <Button variant="contained">NEXT</Button>
        </Box>
      </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      "& .MuiTypography-h4" : {
        fontSize: '3rem',
        fontWeight: "700",
        color: "white",
        fontFamily: "Barlow Condensed",
        marginBottom: '2rem',
      },
      "& .MuiOutlinedInput-root" : {
        width: '80%',
        height: '4rem',
        borderRadius: '2rem',
        color: 'white',
        border: '1px solid green',
        margin: 'auto'
      },
      "& .MuiButton-contained" : {
        width: "27rem",
        height: "3.75rem",
        background: "rgba(16, 185, 112, 0.1);",
        borderRadius: "1rem",
        color: " #10B970",
        marginTop: '9rem',
        fontWeigth: '900',
        fontSize: '1.5rem',
        lineHeight: '24px',
        fontFamily: 'Barlow condensed'
      },
      "& .MuiTypography-body1" : {
        fontFamily : "Barlow Condensed",
        margin: "auto",
        fontSize: '1.25rem'
      }
    },
    container: {
      width: "50%",
      height: "80%",
      margin: "auto",
      textAlign : 'center'
    },

    genreContainer: {
      display: 'flex',
      width: '80%',
      flexWrap: 'wrap',
      margin: 'auto',
      marginTop: '3rem',
      justifyContent: 'center'
    },
    genre: {
      display: 'flex',
      width: '8rem',
      height: '2.5rem',
      marginLeft: 6,
      marginRight: 6,
      marginTop: '1.6rem',
      background: '#172135',
      color: '#FFFFFF',
      justifyContent: 'center',
      borderRadius: '624.9rem',
    },
  })
);

export default Selectgenre;



 
