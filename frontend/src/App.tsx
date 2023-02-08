import './App.css';
import Selectgenre from './pages/Authflow/Selectgenre';
import {useEffect, useState} from 'react'
import Signup from './pages/Authflow/Signup';
import Username from './pages/Authflow/Username';
import Loader from './pages/Authflow/Loader';

const client_id = '012a6e8fe6d04bb187c14add7af395f0'
const client_secret = '82690458d09147fc9e2dee78b0b8fe51'

function App() {
  const [genres, setGenres] = useState<string[]>([])
  useEffect(() => {
    const getToken = (async () => {
      let authParams = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
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
        <Loader/>
    </div> 
  );
}

export default App;
