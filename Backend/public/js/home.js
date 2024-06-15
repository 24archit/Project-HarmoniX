function getUserInfo() {
    fetch("/api/getUserInfo")
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
        profileImg.src = data.images[1].url;
        username.innerText=data.display_name;
      })
      .catch((error) => console.error("Error:", error));
  }
  
  function getUserTopArtists(number) {
    fetch(`/api/getUserTopArtists?number=${number}`)
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
        for(let i=0; i<12; i++){
          topArtistsImg[i].src = data.items[i].images[0].url;
          artistIds[i] = data.items[i].id;
          artistName[i].innerText=data.items[i].name;
          trendScore[i].textContent = `Trend Score : ${data.items[i].popularity}`;
        }
        topArtistCard.forEach((card, index) => {
          card.addEventListener("click", () => {
            console.log(artistIds[index]);
          });
        });
      })
      .catch((error) => console.error("Error:", error));
  }
  
  function getTopTracksIndia() {
    fetch("/api/getTopTracksIndia")
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
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
      })
      .catch((error) => console.error("Error:", error));
  }
  
  function getTopTracksGlobal() {
    fetch("/api/getTopTracksGlobal")
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
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
      })
      .catch((error) => console.error("Error:", error));
  }
  
  function getTopDanceBolly() {
    fetch("/api/getTopDanceBolly")
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
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
      })
      .catch((error) => console.error("Error:", error));
  }
  
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

let topArtistsImg = document.querySelectorAll(".Artists-img");
let artistName = document.querySelectorAll(".artist-name");
let trendScore = document.querySelectorAll(".trend-score");
let topArtistCard = document.querySelectorAll(".topArtistCard");
let artistIds = [];

let profileImg = document.getElementById("profile-img");
let username = document.getElementById("username");

  getTopTracksIndia();
  getTopTracksGlobal();
  getTopDanceBolly();
  getUserTopArtists(12);
  getUserInfo();