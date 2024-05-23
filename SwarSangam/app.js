const CLIENT_ID = '40cb55a60a0c4760a461254c90b672b3'; // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://127.0.0.1:5500/SwarSanket/Index.html'; // Replace with your Redirect URI
const SCOPES = 'user-read-private user-read-email';

document.getElementById("login-btn").addEventListener("click", function() {
    // Redirect user to Spotify login page
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
});

// Function to extract access token from URL
function getAccessTokenFromUrl() {
    const accessTokenRegex = /access_token=([^&]*)/;
    const match = window.location.hash.match(accessTokenRegex);
    return match && match[1];
}

// Check if there's an access token in the URL
const accessToken = getAccessTokenFromUrl();

if (accessToken) {
    // Access token found, you can now use it to make API requests
    console.log("Access Token:", accessToken);
} else {
    // User needs to login
    console.log("User needs to login");
}
