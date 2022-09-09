import React,{useEffect,useState} from 'react'
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,InputGroup,FormControl,Button, Row, Card} from 'react-bootstrap';
import Searching from './Searching';

const CLIENT_ID = "41eb81a182d94e36be9b53fff45246f1";
const SECRET_ID = "aff865d7a1da42dfbee0e7b80131d637";

export default function Body(){
    const[accessToken,setAccessToken] = useState("");
    const[albums,setAlbums]=useState([]);

    useEffect(()=>{ 
        var authParameters={
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }, 
            body:'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+SECRET_ID
        }
        fetch("https://accounts.spotify.com/api/token",authParameters)
            .then(result=>result.json())
            .then(data=>setAccessToken(data.access_token))
    },[]);
    var artistParameters={
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+accessToken
        }
    }
    
//    const getAlbums = async()=>{
//         const response = await fetch("https://api.spotify.com/v1/browse/categories", artistParameters);
//         const jsonData = await response.json();
//         console.log(jsonData);
   
//         fetch("https://api.spotify.com/v1/browse/categories", artistParameters)
//         .then(response => response.json())
//         .then(result => {console.log(result.categories);
//         setAlbums(result);
//     });
// }
    // const getAlbums = async()=>{
    //     const response = await fetch("https://api.spotify.com/v1/browse/categories", artistParameters);
    //     const jsonData = await response.json();
    //     console.log(jsonData.categories.items[0]);
    //     setAlbums(jsonData);
        
    // }
    // useEffect(()=>{
    //     getAlbums();
    // },[]);
    return(
        <div className="bodyhome">
        {/* <img src={playlists.categories.items[0].name}></img> */}
        <Searching />
        </div>
    );

    }