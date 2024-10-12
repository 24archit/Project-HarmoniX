import { useEffect, useState } from "react";
import "../assets/styles/LoginDialog.css";
import { useParams } from 'react-router-dom';
import youtubeLogo from "../assets/media/Youtube_Logo.png"
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function LoginDialog() {
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchError = async () => {
            const { error } = useParams();
            setError(error);
        };
        fetchError();
    }, []);

    const handleClick = () => {
        const originalState = generateRandomString(16);
        localStorage.setItem('state', `${originalState}`);
        const url = `https://harmonix-stream.vercel.app/login-spotify?state=${originalState}`;
        window.location.href = url;
    };

    return (
        <>
            {error === "access_denied" ? (
                <div className="error-body">
                    <h1 className="error-title">Authorization Failed</h1>
                    <p className="error-message">
                        You need to authorize your Spotify account to enjoy our services. Please try again.
                    </p>
                    <a
                        href="https://harmonix-play.vercel.app/login"
                        className="retry-login-btn"
                    >
                        Login
                    </a>
                    <footer className="footer">&copy; Team Harmonix</footer>
                </div>
            ) : (
                <div id="login-bg">
                    <div id="login-dialog">
                        <div className="full-logo">
                            <span className="logo-symbol-dialog">
                                <h1 id="logo-symbol-dialog">&#119073;</h1>
                            </span>
                            <span className="logo-name-dialog">
                                <h1 id="logo-name-dialog">HarmoniX</h1>
                                <p id="slogan-dialog">Music To Your Mood</p>
                            </span>
                        </div>
                        <div className="welcome-dialog">
                            <p>Welcome to <b>HarmoniX,</b></p>
                            <p>where "every beat finds its harmony".</p>
                        </div>
                        
                        <div className="powered-by-logos">
                            <p>Powered by:</p>
                            <div className="logo-container">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png" 
                                alt="Spotify Logo" 
                                className="logo-full"
                            />
                            <img 
                                src="https://static.wikia.nocookie.net/bignate/images/4/46/YouTube_Logo_Picture.jpg/revision/latest?cb=20200323221742" 
                                alt="YouTube Logo" 
                                className="logo-full"
                            />
                            </div>
                        </div>
                       
                        <button id="spotify-login-btn" onClick={handleClick}>Login with Spotify</button>
                    </div>
                </div>
            )}
        </>
    );
}
