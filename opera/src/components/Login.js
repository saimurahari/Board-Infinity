import react from 'react';
import { Container } from 'react-bootstrap';

function Login(){
    const handleClick = ()=>{

        const CLIENT_ID = "41eb81a182d94e36be9b53fff45246f1";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        
        const scope = [
                    "user-read-email",
                    "user-read-private",
                    "user-modify-playback-state",
                    "user-read-playback-state",
                    "user-read-currently-playing",
                    "user-read-recently-played",
                    "user-read-playback-position",
                    "user-top-read",
                ];
                window.location.href=`${apiUrl}?client_id=${CLIENT_ID}&redirect_uri=${redirectUrl}&scope=${scope.join(
                    " "
                    )}&response_type=token&show_dialog = true`;
    }
    return(
        <Container>
        <div className="body">
        <h1>Login to Spotify</h1>
        <br></br>
        <button onClick={handleClick}>Connect spotify</button>
        </div>
        </Container>
        
    );
}
export default Login;
