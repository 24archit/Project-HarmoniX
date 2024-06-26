document.addEventListener("DOMContentLoaded", (event) => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const type = params.get("type");
  const q = params.get("q");

  let inputBar = document.getElementById("nav-input-bar");
  inputBar.value = q;

  let Options = document.querySelectorAll(".type");

  Options[0].selected = false;

  for (let i = 0; i < Options.length; i++) {
    if (Options[i].value === type) {
      Options[i].selected = true;
      break;
    }
  }
  async function searchResult(type, q) {
    await fetch(`/api/search?type=${type}&q=${q}`)
      .then((response) => response.json())
      .then((receivedData) => {
        const result = JSON.parse(receivedData);
        console.log(result);
        let topResultImg = document.querySelector("#top-result div img");
        let topResultName = document.querySelector("#top-result div p");
    

        if(type === "track,artist,album,playlist,show,episode"){
            topResultImg.src = result.tracks.items[0].album.images[0].url;
            topResultName.innerText = result.tracks.items[0].album.name;
        } else if (type ==="track") {
            topResultImg.src = result.tracks.items[0].album.images[0].url;
        } else if (type === "artist"){
            topResultImg.src = result.artists.items[0].images[0].url;
        } else if (type === "album"){
            topResultImg.src = result.albums.items[0].images[0].url;
        } else if(type === "playlist"){
            topResultImg.src = result.playsists.items[0].images[0].url;
        } else if(type === "show"){
            topResultImg.src = result.shows.items[0].images[0].url;
        } else {
            topResultImg.src = result.episodes.items[0].images[0].url;
        }
      });
  }
  searchResult(type, q);
});
