import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {useEffect} from 'react';
import {useStateProvider} from './utils/StateProvider';
import {reducerCases} from './utils/Constants';
import Spotify from './components/Spotify';
import './components/spotify.css';
function App() {
  // const[{token},dispatch] = useStateProvider();
  const [{ token }, dispatch] = useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type:reducerCases.SET_TOKEN,token});
    } 
  },[token,dispatch]);
  return (
    <div className="body">
    {
      token?<Spotify />:<Login/>
    }
  
    </div>
  );
}

export default App;
