import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';

function Principal() {
    const CLIENT_ID = "604059900c384dee93a2c1f39bd1c749"
    const REDIRECT_URI = "https://spotify-prueba-coral.vercel.app/Principal"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("/")
        window.localStorage.removeItem("token")
        window.location.href = '/';
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    const Entrar = () => {
        window.location.href = 'https://open.spotify.com/'
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify Podcast</h1>
            
            
            </header>

        <div className="logo">
        <img type="logi"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      </div>
        
        <div className="contenido">


                {token ?
                    <form onSubmit={searchArtists}>
                        <div>
                        {/* <input type="BuscarArtista" onChange={e => setSearchKey(e.target.value)}/>
                        <button className="boton1"type={"submit"}>Search</button> */}
                        <button className="boton1" onClick={Entrar}>Entrar en la cuenta</button>
                        </div>

                    </form>


                    : <h2>Please login</h2>

                }
                

                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button className="boton" onClick={logout}>Logout</button>}
        
                {renderArtists()}
        
                </div>
                </div>
        
    );
}

export default Principal;