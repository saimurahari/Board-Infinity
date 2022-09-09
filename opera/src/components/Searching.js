import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,InputGroup,FormControl,Button, Row, Card} from 'react-bootstrap';
import './search.css';
import { ImSearch } from 'react-icons/im';

const CLIENT_ID = "41eb81a182d94e36be9b53fff45246f1";
const SECRET_ID = "aff865d7a1da42dfbee0e7b80131d637";

function Search(){
    const[search, setSearch] = useState("");
    const[accessToken,setAccessToken] = useState("");

    const[albums, setAlbums] = useState([]);


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

    async function searching(){
        console.log("searching for"+search);

        var artistParameters={
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+accessToken
            }
        }
        var albumId = await fetch('https://api.spotify.com/v1/search?q='+search+'&type=artist',artistParameters)
            .then(response=>response.json())
            .then(data=>{return data.artists.items[0].id})

            console.log(albumId);        
        var returnalb = await fetch('https://api.spotify.com/v1/artists/'+albumId+'/albums',artistParameters)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                setAlbums(data.items);
                
            })
    }
   
    return(
        <div className="Search">
            <Container>
                <InputGroup className="mb-3" size="lg">
                <div className="input-search">
                <form>
                <input 
                placeholder = "search" type="input" value={search}
                onChange={(e)=>setSearch(e.target.value)}
                >
                
                </input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={searching}><ImSearch /></button>
                </form>
   
                
                </div>
                </InputGroup>
            </Container>
            <Container className="container">
            <Row className="mx-2 row-cols-4" >
            
            {albums.map((album,i)=>{
            return(
            <Card className="bodycard">
                <Card.Img className="image" src={album.images[0].url}/>
                <Card.Body >
                    <Card.Title>{album.name}</Card.Title>
                    <a href={album.external_urls[0]}><Button onClick={album.external_urls[0]}>Play</Button></a>
                </Card.Body>
            </Card>
            
            );

        })}
            </Row>
            </Container>
        </div>
    );
   
}
export default Search;