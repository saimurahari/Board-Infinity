import React from 'react'
import './navbar.css';
import {CgProfile} from 'react-icons/cg';
import {useStateProvider} from '../utils/StateProvider';
import Spotify from './Spotify';
export default function Navbar() {
    const [{userInfo}]  = useStateProvider();
    console.log({userInfo},"from nav bar");
  return (
    <div className="navhome">
    <nav className="profile">
    <div className="profilesec">
        <CgProfile size={30}/>
        
    </div>
    </nav>
    </div>
  )
}
