import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color : 'rgba(255, 193, 7, 1)'
        },
      },
    },
  },
  typography : {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: 'rgba(255, 193, 7, 1)',
    },
  },
});
const googleAuth_client_id = '410017503349-tb5b39su17on90chvids0mjkinu1djqi.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <GoogleOAuthProvider clientId={googleAuth_client_id}>
        <App />
      </GoogleOAuthProvider>
    </ThemeProvider>
);

reportWebVitals();
