import '../assets/styles/Logo.css'
import {    Link } from 'react-router-dom';
export default function Logo() {
    return (
            <Link to="/user/home" className="logo">
            <div className="logo-symbol">
                <h1 id="logo-symbol">&#119073;</h1>
            </div>
            <div className="logo-name">
                <h1 id="logo-name">HarmoniX</h1>
                <p id="slogan">Music To Your Mood</p>
            </div>
        </Link>
    );  
}
