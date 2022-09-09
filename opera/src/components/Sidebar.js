import React from 'react';
import './sidebar.css';
import logo from './img/Spotify_Logo_RGB_Green.png';
import { FaHome } from 'react-icons/fa';
import { IoIosAlbums } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { RiPlayListAddLine } from 'react-icons/ri';
export default function Sidebar()  {
  
  return (
    <div className="side-container">
    <div className="options">
        <div className="side-nav">
        <div className="logo">

            <li><img src={logo} width="180px" alt="logo"></img></li>
            </div>

            <div className="options-side">
            <span><a href="#"><FaHome className="icon" size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</a></span>
            <span><a href="#"><BsFillMicFill className="icon" size={30}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Artists</a></span>
            <span><a href="/albums"><IoIosAlbums className="icon" size={30}/> &nbsp;&nbsp; Albums</a></span>
            <span><a href="#"><RiPlayListAddLine className="icon" size={30}/> &nbsp;&nbsp;  Playlists</a></span>
            </div>
        </div>
    </div>
    </div>
  )
}
