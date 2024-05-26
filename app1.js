const CLIENT_ID = '40cb55a60a0c4760a461254c90b672b3'; 
const CLIENT_SECRET = '98ef58b72c9445f2b5830b932c13cb60';
const REDIRECT_URI = 'http://127.0.0.1:5500/Project-HarmoniX/Index.html'; 
const SCOPES = 'user-read-private user-read-email playlist-modify-public';
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const YOUTUBE_API_KEY = 'AIzaSyBWIyl6ORXP38kH0jZ0Z7uldcBxGtWzH3o';

let accessToken='';
let loginDetails = {
    accessToken: '',
    expiryTime: 0
};

function redirectToAuthorizePage() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
}
function getAccessTokenFromUrl(){
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    return accessToken;
}
function logOut(){
    accessToken='';
    localStorage.removeItem("loginDetails");
    window.location.href ="http://127.0.0.1:5500/Project-HarmoniX/Index.html";
    
}
function checkExpiry(loginDetails){
    if(loginDetails.expiryTime<=Date.now()){
        return true;
    }
    else{
        return false;
    }
}
let loginWithSpotify = document.getElementById("spotify-login-btn");
loginWithSpotify.addEventListener("click", redirectToAuthorizePage);
accessToken = getAccessTokenFromUrl();

if (!accessToken) {
    const urlParams = new URLSearchParams(window.location.search.substring(1));
    const error = urlParams.get('error');
    if (error === 'access_denied') {
        alert("You can Enjoy Services if and only if you login with your Spotify Account");
    }
} else {
    const loginBg = document.getElementById("login-bg");
    if (loginBg) {
        loginBg.remove();
    }
    loginDetails.accessToken=accessToken;
    loginDetails.expiryTime=Date.now() + 3300000;
    localStorage.setItem("loginDetails", JSON.stringify("loginDetails"));
}
let logOutbtn = document.getElementById("logout-btn");
logOutbtn.addEventListener("click", logOut);