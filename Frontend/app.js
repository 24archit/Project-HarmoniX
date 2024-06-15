const CLIENT_ID = '40cb55a60a0c4760a461254c90b672b3'; 
const CLIENT_SECRET = '98ef58b72c9445f2b5830b932c13cb60';
const REDIRECT_URI = 'http://127.0.0.1:5500/Project-HarmoniX/Frontend/'; 

const SCOPES = 'user-read-private user-read-email playlist-modify-public user-follow-read user-top-read';
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
    if(confirm("Are you sure you want to log out?")){
        accessToken='';
        localStorage.removeItem("loginDetails");
        window.location.href ="http://127.0.0.1:5500/Project-HarmoniX/Frontend/";
    }
    else{
        return false;
    }
    
}
function checkExpiry(loginDetails){
    if(loginDetails.expiryTime<=Date.now() ){
        return "Expired";
    }
    else{
        return "Not Expired";
    }
}
async function getUserInfo() {
    
        await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
              
            }
            return response.json();
          })
          .then(data => {
            console.log(data); // Handle the response data here
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);

          });
    
}
async function getTrackDetails(id){
    await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Handle the response data here
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);

      });
}
async function getUserTopArtists(number){
    await fetch(`https://api.spotify.com/v1/me/top/artists?limit=${number}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    
}
async function getTopTracksIndia() {
    
        const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbLZ52XmnySJg', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        for (let i = 0; i < 12; i++) {
            topTracksIndiaImg[i].src = data.tracks.items[i].track.album.images[0].url;
            topTracksIndiaLinks[i] = data.tracks.items[i].track.external_urls.spotify;
            topTracksIndiaName[i].innerText = data.tracks.items[i].track.name;
        }

        topTracksIndiaCard.forEach((card, index) => {
            card.addEventListener("click", () => {
                console.log(topTracksIndiaLinks[index]);
            });
        });
} 


async function getTopTracksGlobal() {
   
        const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        for (let i = 0; i < 12; i++) {
            topTracksGlobalImg[i].src = data.tracks.items[i].track.album.images[0].url;
            topTracksGlobalLinks[i] = data.tracks.items[i].track.external_urls.spotify;
            topTracksGlobalName[i].innerText = data.tracks.items[i].track.name;
        }

        topTracksGlobalCard.forEach((card, index) => {
            card.addEventListener("click", () => {
                console.log(topTracksGlobalLinks[index]);
            });
        });
    } 


async function getTopDanceBolly() {
    
        const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        for (let i = 0; i < 12; i++) {
            topDanceBollyImg[i].src = data.tracks.items[i].track.album.images[0].url;
            topDanceBollyLinks[i] = data.tracks.items[i].track.external_urls.spotify;
            topDanceBollyName[i].innerText = data.tracks.items[i].track.name;
        }

        topDanceBollyCard.forEach((card, index) => {
            card.addEventListener("click", () => {
                console.log(topDanceBollyLinks[index]);
            });
        });
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

let topTracksIndiaImg = document.querySelectorAll(".top-tracks-india");
let topTracksIndiaCard= document.querySelectorAll(".top-tracks-india-card");
let topTracksIndiaName = document.querySelectorAll(".top-india-track-name");
let topTracksIndiaLinks =[];

let topTracksGlobalImg = document.querySelectorAll(".top-tracks-global");
let topTracksGlobalCard= document.querySelectorAll(".top-tracks-global-card");
let topTracksGlobalName = document.querySelectorAll(".top-global-track-name");
let topTracksGlobalLinks =[];

let topDanceBollyImg = document.querySelectorAll(".top-dance-bolly");
let topDanceBollyCard= document.querySelectorAll(".top-dance-bolly-music");
let topDanceBollyName = document.querySelectorAll(".top-dance-bolly-name");
let topDanceBollyLinks =[];


getTopTracksIndia();
getTopTracksGlobal();
getTopDanceBolly();