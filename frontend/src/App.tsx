import './App.css';
import {useEffect, useState} from 'react'
import Loader from './pages/Authflow/Loader';
import Login from './pages/Authflow/Login';
import Signup from './pages/Authflow/Signup';
import Forgotpassword from './pages/Authflow/Forgotpassword';

const spotify_client_id = '012a6e8fe6d04bb187c14add7af395f0'
const spotify_client_secret = '82690458d09147fc9e2dee78b0b8fe51'

const googleAuth_client_id = '410017503349-tb5b39su17on90chvids0mjkinu1djqi.apps.googleusercontent.com';
const googleAuth_client_secret = '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';

function App() {
  const [genres, setGenres] = useState<string[]>([])
  useEffect(() => {
    const getToken = (async () => {
      let authParams = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + spotify_client_id + '&client_secret=' + spotify_client_secret
      }
      const result = await fetch('https://accounts.spotify.com/api/token', authParams)
      const data = await result.json()
      return data.access_token
    })()

    const getGenres = (async () => {
      let token = await getToken
      let credentials = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type' : 'application/json',
          'Authorization' : `Bearer ${token}` 
        }
     }
     const result = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', credentials)
     const data = await result.json()
     setGenres(data.genres)
    })()
  }, [])
  return (
    <div className="App">
        {/* <Forgotpassword/> */}
        {/* <Login /> */}
        <Signup />
    </div> 
  );
}

export default App;
