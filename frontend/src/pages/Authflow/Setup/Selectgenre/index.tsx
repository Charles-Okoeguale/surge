import { Button, Box, Typography, OutlinedInput, ToggleButtonGroup, ToggleButton } from '@mui/material';
import {Theme} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import {useContext, useState} from 'react';
import {Appcontext} from '../../../../context';


function Selectgenre({genres} : any) {
  const classes = useStyles()
  const {setStage, userprofile, setUserprofile} = useContext(Appcontext)
  const [formats, setFormats] = useState<string[]>([])

  const handleFormat = (e : React.MouseEvent<HTMLElement>, newFormats : string []) => {
    setFormats(newFormats)
  }

  const addGenres = () => {
    setUserprofile({...userprofile, genres : [...formats]})
  }

  return (
      <Box className={classes.body}>
        <Box className={classes.container}>
            <Typography variant='h4'>Select your favorite genre</Typography>
            <OutlinedInput placeholder='Search for genre'/>
            <ToggleButtonGroup value={formats} onChange={handleFormat} color="primary">
            {genres?.slice(0, 11).map((item : string, index : number) => 
            <ToggleButton key={index} value={item} sx={{"&.MuiToggleButtonGroup-grouped": {
                borderRadius: "3rem !important",
                mx: 1.5,
                border: "1px !important",
              }
            }}>
              {item}
            </ToggleButton>
            )}
            </ToggleButtonGroup>
          <Button variant="contained" onClick={addGenres}>NEXT</Button>
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
      "& .MuiToggleButtonGroup-root" : {
        display: 'flex',
        width: '60%',
        flexWrap: 'wrap',
        margin: 'auto',
        marginTop: '3rem',
        justifyContent: 'center',
      },

      "& .MuiOutlinedInput-root" : {
        width: '80%',
        height: '4rem',
        borderRadius: '2rem',
        color: 'white',
        border: '1px solid none',
        margin: 'auto',
        background: '#172135;'
      },
      "& .MuiButton-contained" : {
        width: "70%",
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
      "& .MuiToggleButton-root": {
        fontFamily : "Barlow Condensed",
        fontSize: '1.2rem',
        margin: "auto",
        background: '#172135',
        color: '#FFFFFF',
        borderRadius: '624.9rem',
        marginLeft: 6,
        marginRight: 6,
        marginTop: '1.6rem',
      }
    },
    container: {
      width: "50%",
      height: "80%",
      margin: "auto",
      textAlign : 'center'
    },
  })
);

export default Selectgenre;



 
