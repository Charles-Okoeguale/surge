import { Button, Box, Typography, OutlinedInput } from '@mui/material';
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

function Selectgenre({genres} : any) {
  const classes = useStyles()
  return (
      <Box className={classes.body}>
        <Box className={classes.container}>
            <Typography variant='h4'>Select your favorite genre</Typography>
            <OutlinedInput className={classes.searchInput} placeholder='Search for genre'/>
            <Box className={classes.genreContainer}>
            {genres.slice(0, 11).map((item : string, index : number) => 
              <Box className={classes.genre}>
                <Typography margin='auto'fontFamily='Barlow Condensed'>{item}</Typography>
              </Box>
              )}
            </Box>
            <Button className={classes.button}>Next</Button>
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
      display: 'flex'
    },
    container: {
      width: "50%",
      height: "80%",
      margin: "auto",
      "& h4" : {
        fontSize: '2em',
        fontWeight: "700",
        color: "white",
        fontFamily: "Barlow Condensed",
        marginBottom: '1em'
      },
    },
    searchInput: {
      width: '32em',
      height: '3.5em',
      color: 'white',
      border: '1px solid green',
    },
    genreContainer: {
      display: 'flex',
      width: '80%',
      flexWrap: 'wrap',
      margin: 'auto',
      marginTop: '3em',
      justifyContent: 'center'
    },
    genre: {
      display: 'flex',
      width: '6.5em',
      height: '2.5em',
      marginLeft: 6,
      marginRight: 6,
      marginTop: '1.6em',
      background: '#172135',
      color: '#FFFFFF',
      justifyContent: 'center',
      borderRadius: '624.9em',
    },
    button : {
      marginTop: '9em',
      width: '27em',
      height: '3em',
      background: 'rgba(16, 185, 112, 0.1)',
      color: '#10B970',
      fontSize: '1.25em',
      borderRadius: '1em',
      fontFamily: 'Barlow condensed'
    }
  })
);

export default Selectgenre;



 
