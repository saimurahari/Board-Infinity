import react from 'react';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './search.css';

const CLIENT_ID = "41eb81a182d94e36be9b53fff45246f1";
const SECRET_ID = "aff865d7a1da42dfbee0e7b80131d637";


function Search(){
    const [search, setSearch] = useState("");
    const[accessToken,setAccessToken] = useState("");
   
    const [albums,setAlbums] = useState([]);
    const [alb,setAlb] = useState([]);

    
    useEffect(()=>{
        //API access token
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

    // search
    async function searching(){
        console.log("seraching for "+search);

        var artistParameters={
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+accessToken
            }
        }
        //get request using search to get artist id
        
        var artistId = await fetch('https://api.spotify.com/v1/search?q='+ search +'&type=artist',artistParameters) 
            .then(response=>response.json())
            .then(data=>data.artists.items[0].id)

            console.log("artist id"+artistId);

        //with artist id grab all the albums of artist
        
        var returnalbums= await fetch('https://api.spotify.com/v1/artists/'+ artistId  +'/albums' + '?include_groups=album&limit=50',artistParameters)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                setAlbums(data.items);
            });
        var albumId = await fetch('https://api.spotify.com/v1/search?q='+ search + '&type=album', artistParameters)
            .then(response=>response.json())

            // .then(aldata=>console.log)
            .then(aldata=>aldata.albums.items[0].id)

            console.log("albums id"+albumId);
        
        var returnalb = await fetch('https://api.spotify.com/v1/albums/'+albumId,artistParameters)
            .then(response=>response.json())
            .then(aldata=>{
                console.log(aldata);
                setAlb(aldata.items);
            })
    }
  
    console.log(alb);


    

    return(
        <div className="search">
        <div className="search-container">
            <form>
                <input type="text" placeholder="search for songs"
                 onKeyPress={e=>{
                    if(e.key == "Enter"){
                        searching();
                    }
                }} onChange={(e)=>setSearch(e.target.value)} />


            </form>
            <button onClick= {searching} >Search</button>
        </div>
        <div className="search-songs">
            {albums.map( (album,i)=>{

                return(
                    <div className="image-container">
                    <table>
                        <th>
                            <tr>
                            <img src={album.images[0].url}></img>
                            </tr>
                        </th>
                        <th>
                        <tr >
                                <p>{album.name}</p>
                            </tr>
                        </th>
                    </table>
                                
                        
                       
                    </div>
                );
            })}
            {alb?.data?.map((alb)=>{
                <p>{alb.name}</p>
            })}
            
        </div>
        
        </div>
    );
}
export default Search;