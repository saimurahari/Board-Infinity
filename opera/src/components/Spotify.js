import React,{useEffect} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body.js';
import {useStateProvider} from '../utils/StateProvider';
import axios from 'axios';
import './Home.css';
import Albums from './Albums';

export default function Spotify(){
    const[{token},dispatch] = useStateProvider();

    useEffect(()=>{
        const getUserInfo = async()=>{
            const {data} = await axios.get('https://api.spotify.com/v1/me',{
                headers:{ 
                    Authorization:"Bearer " + token,
                    "Content-Type":"application/json",
                },
            });
            console.log({data});
        };
        getUserInfo();
        
    },[dispatch,token]);
    return (
        <div className="body">
            <div className="sidebar">
            <Sidebar/><Navbar/><Body /><Albums/>
           </div>
         
        </div>
      
    );
}