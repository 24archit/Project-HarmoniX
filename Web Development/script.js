const clientId = '40cb55a60a0c4760a461254c90b672b3'; // Replace with your Spotify Client ID
const redirectUri = 'http://127.0.0.1:5500/Web%20Development/index.html'; // Replace with your Redirect URI
const scopes = 'user-read-private user-read-email';

// Check for access token in the URL
const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
    if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
}, {});

window.location.hash = '';

let accessToken = hash.access_token;

if (!accessToken) {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;

    const loginButton = document.createElement('button');
    loginButton.innerText = 'Log in with Spotify';
    loginButton.onclick = () => {
        window.location = authUrl;
    };
    document.body.appendChild(loginButton);
} else {
    // Search functionality
    async function searchSpotify(query, types = ['album', 'artist', 'track'], market = 'ID', limit = 4, offset = 0, includeExternal = '') {
        const baseURL = 'https://api.spotify.com/v1/search';
        
        const typeParam = types.join(',');
        const params = new URLSearchParams({
            q: query,
            type: typeParam,
            market: market,
            limit: limit,
            offset: offset,
            include_external: includeExternal
        });

        const url = `${baseURL}?${params.toString()}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data from Spotify API:', error);
        }
    }

    document.getElementById('search-button').addEventListener('click', async () => {
        const query = document.getElementById('search-input').value;
        if (!query) return;

        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = 'Loading...';

        try {
            const data = await searchSpotify(query);

            resultsContainer.innerHTML = '';

            if (data.tracks && data.tracks.items.length > 0) {
                data.tracks.items.forEach(item => {
                    const trackElement = document.createElement('div');
                    trackElement.className = 'result-item';
                    trackElement.innerHTML = `
                        <img src="${item.album.images[0].url}" alt="${item.name}">
                        <p>${item.name}</p>
                        <p><strong>${item.artists[0].name}</strong></p>
                    `;
                    resultsContainer.appendChild(trackElement);
                });
            } else {
                resultsContainer.innerHTML = 'No results found';
            }
        } catch (error) {
            resultsContainer.innerHTML = 'Error fetching data';
            console.error('Search failed:', error);
        }
    });
}
