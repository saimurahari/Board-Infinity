import React from 'react';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,InputGroup,FormControl,Button, Row, Card} from 'react-bootstrap';
import './albums.css';
const CLIENT_ID = "41eb81a182d94e36be9b53fff45246f1";
const SECRET_ID = "aff865d7a1da42dfbee0e7b80131d637";
const Albums = () => {
    const[search, setSearch] = useState("");
    const[accessToken,setAccessToken] = useState("");

    const[users, setUserData] = useState([]);
    


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
    },[])
    
        console.log("searching for"+search);

        var artistParameters={
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+accessToken
            }
        }
        const getUserData = async()=>{
            const response = await fetch("https://v1.nocodeapi.com/sai_murahari/spotify/aTnjVDVNHLssNnby/browse/new",artistParameters);
            const jsonData = await response.json();

            console.log(jsonData);
            setUserData(jsonData);
        };
        useEffect(()=>{
            getUserData();
        },[])
    
    return (
        <div className="container-album">
 
       {/* <div className="container2">
        <Card className="bodycard">
            <Card.Img src={users.albums.items[0].images[0].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[0].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[1].images[1].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[1].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[2].images[0].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[2].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[3].images[1].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[3].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[4].images[1].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[4].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[5].images[1].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[5].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[6].images[2].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[6].name} </strong>
            </Card.Body>
        </Card>
        <Card className="bodycard">
            <Card.Img src={users.albums.items[7].images[1].url}/>
            <Card.Body>
            <strong>Name:{users.albums.items[7].name} </strong>
            </Card.Body>
        </Card>

</div> */}
        </div>
    );

    }
export default Albums;
