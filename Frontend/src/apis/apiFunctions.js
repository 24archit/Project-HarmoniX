async function fetchData(url, method, errorMessage) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "local-api-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
    });

    if (!response.ok) {
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return JSON.parse(data);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTopTracksIndia() {
  try {
    return await fetchData(
      "http://localhost:2424/api/getTopTracksIndia",
      "GET",
      "Failed to fetch top tracks for India"
    );
  } catch (error) {
    throw new Error(`Error fetching top tracks for India: ${error.message}`);
  }
}

export async function getTopTracksGlobal() {
  try {
    return await fetchData(
      "http://localhost:2424/api/getTopTracksGlobal",
      "GET",
      "Failed to fetch top global tracks"
    );
  } catch (error) {
    throw new Error(`Error fetching top global tracks: ${error.message}`);
  }
}

export async function getArtistData(id) {
  try {
    return await fetchData(
      `http://localhost:2424/api/getArtistData?id=${id}`,
      "GET",
      `Failed to fetch artist data for id ${id}`
    );
  } catch (error) {
    throw new Error(
      `Error fetching artist data for id ${id}: ${error.message}`
    );
  }
}

export async function getArtistAlbums(id) {
  try {
    return await fetchData(
      `http://localhost:2424/api/getArtistAlbums?id=${id}`,
      "GET",
      `Failed to fetch albums for artist id ${id}`
    );
  } catch (error) {
    throw new Error(
      `Error fetching albums for artist id ${id}: ${error.message}`
    );
  }
}

export async function getArtistTopTracks(id) {
  try {
    return await fetchData(
      `http://localhost:2424/api/getArtistTopTracks?id=${id}`,
      "GET",
      `Failed to fetch top tracks for artist id ${id}`
    );
  } catch (error) {
    throw new Error(
      `Error fetching top tracks for artist id ${id}: ${error.message}`
    );
  }
}

export async function getUserTopArtists(number) {
  try {
    return await fetchData(
      `http://localhost:2424/api/getUserTopArtists?number=${number}`,
      "GET",
      `Failed to fetch top artists for user with number ${number}`
    );
  } catch (error) {
    throw new Error(
      `Error fetching top artists for user with number ${number}: ${error.message}`
    );
  }
}

export async function getUserInfo() {
  try {
    return await fetchData(
      "http://localhost:2424/api/getUserInfo",
      "GET",
      "Failed to fetch user info"
    );
  } catch (error) {
    throw new Error(`Error fetching user info: ${error.message}`);
  }
}

export async function getExpiryStatus() {
  try {
    return await fetchData(
      "http://localhost:2424/api/getExpiryStatus",
      "GET",
      "Failed to fetch expiry status"
    );
  } catch (error) {
    throw new Error(`Error fetching expiry status: ${error.message}`);
  }
}
export async function getSearchResult(query, type) {
  try {
    return await fetchData(
      `http://localhost:2424/api/search?q=${query}&type=${type}`,
      "GET",
      "Failed to fetch search results"
    );
  } catch (error) {
    throw new Error(`Error fetching search results: ${error.message}`);
  }
}
export async function getAudioLink(id) {
  try {
    return await fetchData(
      `http://localhost:2424/getAudioLink?id=${id}`,
      "GET",
      "Failed to play the track"
    );
  } catch (error) {
    throw new Error(`Failed to play the track: ${error.message}`);
  }
}

