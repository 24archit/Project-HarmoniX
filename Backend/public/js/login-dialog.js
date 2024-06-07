function redirectToAuthorizePage() {
    window.location.href = 'http://localhost:2424/login-spotify';
}
document.addEventListener('DOMContentLoaded', (event) => {
    let loginWithSpotify = document.getElementById("spotify-login-btn");
    loginWithSpotify.addEventListener("click", redirectToAuthorizePage);
});