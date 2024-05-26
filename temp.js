const CLIENT_ID = '40cb55a60a0c4760a461254c90b672b3'; 
const CLIENT_SECRET= '98ef58b72c9445f2b5830b932c13cb60';
const REDIRECT_URI = 'http://127.0.0.1:5500/Project-HarmoniX/Index.html'; 
const SCOPES = 'user-read-private user-read-email playlist-modify-public';
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

function redirectToAuthorizePage() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
}
async function fetchLoginDetails(authorizationCode){
    const tokenParams = {
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: REDIRECT_URI,
    };
    const basicAuthHeader = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(SPOTIFY_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${basicAuthHeader}`
        },
        body: new URLSearchParams(tokenParams)
    });
    const data = await response.json();


    let loginDetails = {
        accessToken : data.access_token,
        refreshToken: data.refresh_token,
        tokenType: data.token_type
    };
    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
}
function loginWithSpotify(){
    try {
        let loginWithSpotify = document.getElementById("spotify-login-btn");
        loginWithSpotify.addEventListener("click", redirectToAuthorizePage);
        let loginBg = document.getElementById("login-bg");
        loginBg.remove();

        const queryParams = new URLSearchParams(window.location.search);
        const authorizationCode = queryParams.get('code');

        fetchLoginDetails(authorizationCode);
    } catch (error) {
        alert("Didn't Logged in....Try Again");
        window.location.href="http://127.0.0.1:5500/Project-HarmoniX/Index.html";
    }
}
async function refreshAccessToken(refreshToken) {
    const tokenParams = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    };
    const basicAuthHeader = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(SPOTIFY_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${basicAuthHeader}`
        },
        body: new URLSearchParams(tokenParams)
    });
    const data = await response.json();

    let loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    loginDetails.accessToken = data.access_token;
    loginDetails.refreshToken = data.refresh_token;
    loginDetails.tokenType = data.token_type;
    localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
}
if(localStorage.getItem("loginDetails")){
    try{
    let loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
    refreshAccessToken(loginDetails.refreshToken);
    let loginBg = document.getElementById("login-bg");
    loginBg.remove();
    } catch {
        alert("Didn't Logged in....Try Again");
        window.location.href="http://127.0.0.1:5500/Project-HarmoniX/Index.html";
    }
}
else {
    loginWithSpotify();
}