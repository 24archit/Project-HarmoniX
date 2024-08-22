import "../assets/styles/LoginDialog.css";
import { useParams } from 'react-router-dom';
export default function LoginDialog() {
    const { error } = useParams();
    const handelClick =()=>{
        const url = 'https://harmonix-stream.vercel.app/login-spotify'
        window.location.href = url;
    };
    return (
        <>
            {error === "access_denied" ? (
                <>
                    <h1>Authorization Failed..</h1>
                    <p>You have to give authorization of your Spotify account to enjoy services. Please try again..</p>
                    <a href='https://harmonix-play.vercel.app/login'>Login</a>
                </>
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
                        <button id="spotify-login-btn" onClick={handelClick}>Login with Spotify</button>
                    </div>
                </div>
            )}
        </>
    );
}
