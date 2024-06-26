document.addEventListener('DOMContentLoaded', (event) => { 
  async function getUserTopArtists(number) {
      await fetch(`/api/getUserTopArtists?number=${number}`)
          .then((response) => response.json())
          .then((receivedData) => {
              console.log(JSON.parse(receivedData));
              const data = JSON.parse(receivedData);
              for (let i = 0; i < 12; i++) {
                  topArtistsImg[i].src = data.items[i].images[0].url;
                  artistName[i].innerText = data.items[i].name;
                  trendScore[i].textContent = `Trend Score: ${data.items[i].popularity}/100`;
                  topArtistCard[i].dataset.link = data.items[i].external_urls.spotify;
                  topArtistCard[i].dataset.id =  data.items[i].id;
                  topArtistCard[i].dataset.type =data.items[i].type;
                  topArtistCard[i].addEventListener("click",()=>{
                    console.log(topArtistCard[i].dataset.link);
                });
              }
          })
          .catch((error) => console.error("Error:", error));
          
  }

  






  async function getTopTracksIndia() {
    await fetch("/api/getTopTracksIndia")
        .then((response) => response.json())
        .then((receivedData) => {
            console.log(JSON.parse(receivedData));
            const data = JSON.parse(receivedData);
            for (let i = 0; i < 12; i++) {
                topTracksIndiaCard[i].dataset.link = data.tracks.items[i].track.external_urls.spotify;
                topTracksIndiaCard[i].dataset.id =  data.tracks.items[i].track.id;
                topTracksIndiaCard[i].dataset.type =data.tracks.items[i].track.type;
                topTracksIndiaImg[i].src = data.tracks.items[i].track.album.images[0].url;
                topTracksIndiaName[i].innerText = data.tracks.items[i].track.name;
                topTracksIndiaCard[i].addEventListener("click",()=>{
                    console.log(topTracksIndiaCard[i].dataset.link);
                });
            }
        })
        .catch((error) => console.error("Error:", error));
}






  async function getTopTracksGlobal() {
      await fetch("/api/getTopTracksGlobal")
          .then((response) => response.json())
          .then((receivedData) => {
              console.log(JSON.parse(receivedData));
              const data = JSON.parse(receivedData);
              for (let i = 0; i < 12; i++) {
                topTracksGlobalCard[i].dataset.link = data.tracks.items[i].track.external_urls.spotify;
                topTracksGlobalCard[i].dataset.id =  data.tracks.items[i].track.id;
                topTracksGlobalCard[i].dataset.type =data.tracks.items[i].track.type;
                topTracksGlobalImg[i].src = data.tracks.items[i].track.album.images[0].url;
                topTracksGlobalName[i].innerText = data.tracks.items[i].track.name;
                topTracksGlobalCard[i].addEventListener("click",()=>{
                    console.log(topTracksGlobalCard[i].dataset.link);
                });
              }
            })
          .catch((error) => console.error("Error:", error));
  }

  async function getTopDanceBolly() {
      await fetch("/api/getTopDanceBolly")
          .then((response) => response.json())
          .then((receivedData) => {
            console.log(JSON.parse(receivedData));
            const data = JSON.parse(receivedData);
              for (let i = 0; i < 12; i++) {
                topDanceBollyCard[i].dataset.link = data.tracks.items[i].track.external_urls.spotify;
                topDanceBollyCard[i].dataset.id =  data.tracks.items[i].track.id;
                topDanceBollyCard[i].dataset.type =data.tracks.items[i].track.type;
                topDanceBollyImg[i].src = data.tracks.items[i].track.album.images[0].url;
                topDanceBollyName[i].innerText = data.tracks.items[i].track.name;
                topDanceBollyCard[i].addEventListener("click",()=>{
                    console.log(topDanceBollyCard[i].dataset.link);
                });
              }
            })
            .catch((error) => console.error("Error:", error));
  }

  let topTracksIndiaImg = document.querySelectorAll(".top-tracks-india");
  let topTracksIndiaCard = document.querySelectorAll(".top-tracks-india-card");
  let topTracksIndiaName = document.querySelectorAll(".top-india-track-name");

  let topTracksGlobalImg = document.querySelectorAll(".top-tracks-global");
  let topTracksGlobalCard = document.querySelectorAll(".top-tracks-global-card");
  let topTracksGlobalName = document.querySelectorAll(".top-global-track-name");

  let topDanceBollyImg = document.querySelectorAll(".top-dance-bolly");
  let topDanceBollyCard = document.querySelectorAll(".top-dance-bolly-music");
  let topDanceBollyName = document.querySelectorAll(".top-dance-bolly-name");

  let topArtistsImg = document.querySelectorAll(".Artists-img");
  let artistName = document.querySelectorAll(".artist-name");
  let trendScore = document.querySelectorAll(".trend-score");
  let topArtistCard = document.querySelectorAll(".topArtistCard");

  getTopTracksIndia();
  getTopTracksGlobal();
  getTopDanceBolly();
  getUserTopArtists(12);
});