document.addEventListener('contextmenu', function(event) {
    let video = document.getElementById("video-background");
    if (event.target === video) {
        event.preventDefault(); 
    }
});

let accessToken ='';
let refreshToken ='';
let tokenType='';
let tokenExpirationTime=0;

const CLIENT_ID = '40cb55a60a0c4760a461254c90b672b3'; 
const CLIENT_SECRET= '98ef58b72c9445f2b5830b932c13cb60';
const REDIRECT_URI = 'http://127.0.0.1:5500/Project-HarmoniX/Index.html'; 
const SCOPES = 'user-read-private user-read-email playlist-modify-public';
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

//Function to redirect to logged out page
function redirectToAuthorizePage() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
}
function loginWithSpotify(){
    let loginWithSpotify = document.getElementById("spotify-login-btn");
    loginWithSpotify.addEventListener("click", redirectToAuthorizePage);
}
// Function to extract access token from URL
function getAccessTokenFromUrl() {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    return accessToken;
}

// Function to get the token type from URL
function getTokenType(){
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const tokenType = urlParams.get('token_type');
    return tokenType;
}
// Function to use refresh token to obtain a new access token
async function refreshAccessToken() {
    const tokenParams = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    };
    const response = await fetch(SPOTIFY_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(tokenParams)
    });
    const data = await response.json();
    tokenExpirationTime = Date.now() + (data.expires_in * 1000);
    return data.access_token; // Return the new access token obtained from Spotify
}


async function checkAccessToken() {
    if (Date.now() >= tokenExpirationTime) {
        await refreshAccessToken(); // Refresh the access token if it's expired
    }
    return accessToken; // Return the access token
}


async function getUserInfo() {
    try {
        const token = await checkAccessToken(); // Check if the access token is valid
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const userInfo = await response.json();
        console.log('User Info:', userInfo);
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

let spotifyLoginBtn = document.getElementById("spotify-login-btn");
spotifyLoginBtn.addEventListener("click", redirectToAuthorizePage);

accessToken = getAccessTokenFromUrl();
if(!accessToken && window.location.href != "http://127.0.0.1:5500/Project-HarmoniX/login_index.html"){
    window.location.href = "http://127.0.0.1:5500/Project-HarmoniX/login_index.html";
    alert("Please login with Spotify to enjoy serives");
    accessToken=getAccessTokenFromUrl();
    tokenType=getTokenType();
    refreshToken

}






//  <script>
// // Function to search across different item types on Spotify
// function searchSpotify(query, types, market, limit, offset, includeExternal, accessToken) {
// // Encode the query string
// const encodedQuery = encodeURIComponent(query);

// // Construct the search endpoint URL
// let searchEndpoint = `https://api.spotify.com/v1/search?q=${encodedQuery}&type=${types.join(',')}`;

// // Append optional parameters
// if (market) searchEndpoint += `&market=${market}`;
// if (limit) searchEndpoint += `&limit=${limit}`;
// if (offset) searchEndpoint += `&offset=${offset}`;
// if (includeExternal) searchEndpoint += `&include_external=${includeExternal}`;

// // Fetch request to Spotify API
// fetch(searchEndpoint, {
//  headers: {
//      'Authorization': `Bearer ${accessToken}`
//  }
// })
// .then(response => {
//  if (!response.ok) {
//      throw new Error('Network response was not ok');
//  }
//  return response.json();
// })
// .then(data => {
//  // Handle the search results
//  console.log(data);
//  // You can process the data here, like displaying the results on your webpage
// })
// .catch(error => {
//  console.error('There was a problem with the fetch operation:', error);
// });
// }

// // Example usage:
// const query = 'Imagine Dragons'; // Your search query
// const types = ['album', 'track']; // Types of items to search across
// const market = 'IN'; // Optional: Country code
// const limit = 10; // Optional: Maximum number of results
// const offset = 0; // Optional: Index of the first result
// const includeExternal = 'audio'; // Optional: Include external audio content
// const accessToken = 'BQDfNMZN9bxPfqYA5I3n9Uc0KIEEoSYS2hy1XVh9JHwvrkQU532HSSJ2_2DqKkVr-UV2t17CF2ztXMsTORQy483TDq_lxkSmqPOZ2-6aSrfmDKo7jn4gyJOk4zWZHY3srd3HPTOOzk90igbv7uWeBf7oh3UBPhC8nd6WTjGa2nmMy3598zZmw4p6xul1QBbxI7GqHZ0Fhd5kRA61Y9NXFq5ePd_mXQosqMaTGVDXz6eM'; // Replace 'YOUR_ACCESS_TOKEN' with your actual access token

// // Call the function
// searchSpotify(query, types, market, limit, offset, includeExternal, accessToken);

// </script>