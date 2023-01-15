import React, {useEffect, useState} from 'react'
import './App.css';
import Selectgenre from './pages/Authflow/Selectgenre';
import Signup from './pages/Authflow/Signup';
import Username from './pages/Authflow/Username';


const client_id = '012a6e8fe6d04bb187c14add7af395f0'
const client_secret = '82690458d09147fc9e2dee78b0b8fe51'

function App() {
  const [accessToken, setAccessToken] = useState('')
  useEffect(() => {
      var authParams = {
          method: 'POST',
          headers: {
              'Content-type' : 'application/x-www-form-urlencoded'
          },
          body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
      }

      fetch ('https://accounts.spotify.com/api/token', authParams)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])
  return (
    <div className="App">
      <Selectgenre/>
    </div>
  );
}

export default App;
