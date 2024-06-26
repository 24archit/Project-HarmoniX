document.addEventListener("DOMContentLoaded", (event) => {
  async function getUserInfo() {
    await fetch("/api/getUserInfo")
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(JSON.parse(receivedData));
        const data = JSON.parse(receivedData);
        profileImg.src = data.images[1].url;
        username.innerText = data.display_name;
      })
      .catch((error) => console.error("Error:", error));
  }
  let profileImg = document.getElementById("profile-img");
  let username = document.getElementById("username");
  getUserInfo();

  let logoutBtn = document.getElementById("logout-btn");

  logoutBtn.addEventListener("click", function () {
    let confirmed = window.confirm(
      "You are about to logout of HamoniX. Are you sure ?"
    );
    if (confirmed) {
      window.location.href = "http://localhost:2424/logout";
    }
  });
});

let backgroundVideo = document.getElementById("background-vid");
backgroundVideo.addEventListener("contextmenu", function(event){
  event.preventDefault();
});