import '../assets/styles/Logo.css';
import { Link } from 'react-router-dom';
import youtubeLogo from "../assets/media/Youtube_Logo.png"

export default function Logo() {
    return (
        <Link to="/user/home" className="logo">
            <div className="logo-symbol">
                <h1 id="logo-symbol">&#119073;</h1>
            </div>
            <div className="logo-name">
                <h1 id="logo-name">HarmoniX</h1>
                <p id="slogan">Music To Your Mood</p>
                <div className="powered-by">
                    <p id="powered-text">Powered By</p>
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" alt="Spotify Logo" className="logo-icon" />
                    <img src={youtubeLogo} alt="YouTube Logo" className="logo-icon" />
                </div>
            </div>
        </Link>
    );  
}
