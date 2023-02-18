import './App.css';
import {useEffect} from 'react'
import {AppContext} from './context';
import Navigation from './navigation';
import { getToken } from './utils';

function App() {
  useEffect(() => {
    getToken()
  }, [])
  return (
    <AppContext>
      <Navigation/>
    </AppContext> 
  );
}

export default App;
