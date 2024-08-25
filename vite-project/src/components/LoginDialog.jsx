import { useEffect, useState } from "react";
import "../assets/styles/LoginDialog.css";
import { useParams } from 'react-router-dom';

export default function LoginDialog() {
    const[error, setError] = useState("");
    useEffect(() => {
        const fetchError = async () => {
            const { error } = useParams();
            setError(error);
        };
    
        fetchError();
      }, []);
    

    function generateRandomString(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleClick = () => { // Fixed typo in function name
        const originalState = generateRandomString(16);
        localStorage.setItem('state', `${originalState}`);
        const url = `https://harmonix-stream.vercel.app/login-spotify?state=${originalState}`;
        window.location.href = url;
    };

    const errorPageStyles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '50px',
            background: 'linear-gradient(135deg, #0d0d0d, #1a237e, #4a148c)',
            color: '#ffffff',
        },
        h1: { color: '#ff4081' },
        p: { margin: '20px 0' },
        a: {
            color: '#64ffda',
            textDecoration: 'none',
            border: '2px solid #64ffda',
            padding: '10px 20px',
            borderRadius: '5px',
            transition: 'background 0.3s, color 0.3s',
        },
        aHover: {
            background: '#64ffda',
            color: '#0d0d0d',
        },
        footer: { marginTop: '40px' },
    };

    return (
        <>
            {error === "access_denied" ? (
                <div style={errorPageStyles.body}>
                    <h1 style={errorPageStyles.h1}>Authorization Failed</h1>
                    <p style={errorPageStyles.p}>You need to authorize your Spotify account to enjoy our services. Please try again.</p>
                    <a
                        href="https://harmonix-play.vercel.app/login"
                        style={errorPageStyles.a}
                        onMouseOver={(e) => e.currentTarget.style = `background: ${errorPageStyles.aHover.background}; color: ${errorPageStyles.aHover.color};`}
                        onMouseOut={(e) => e.currentTarget.style = `color: ${errorPageStyles.a.color}; border: 2px solid ${errorPageStyles.a.color}; background: none;`}
                    >
                        Login
                    </a>
                    <footer style={errorPageStyles.footer}>
                        <p>&copy; Team Harmonix</p>
                    </footer>
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
                        <p id="login-to-spotify">**Login to your "Spotify Account" to enjoy services**</p>
                        <button id="spotify-login-btn" onClick={handleClick}>Login with Spotify</button>
                    </div>
                </div>
            )}
        </>
    );
}
