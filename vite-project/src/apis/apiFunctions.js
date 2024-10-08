const port = "";
const protocol = "https";
const host = "harmonix-stream.vercel.app";


function checkExpiry() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userdetails="));

  if (!cookie) {
    return 0;
  }

  // Extract the cookie value and decode it
  const cookieValue = cookie.split("=")[1];
  const decodedValue = decodeURIComponent(cookieValue);

  // Parse the JSON string into an object
  let userdetails;
  try {
    userdetails = JSON.parse(decodedValue);
  } catch (e) {
    console.log("Error parsing cookie");
    return 0;
  }

  // Check the conditions
  if (!userdetails) {
    return 0;
  } else if (userdetails.expiry < Date.now()) {
    return 1;
  } else {
    return 2;
  }
}
async function fetchData(url, method, errorMessage) {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userdetails="));
  const cookieValue = cookie.split("=")[1];
  const decodedValue = decodeURIComponent(cookieValue);
  let userdetails;
  userdetails = JSON.parse(decodedValue);

  const expiryStatus = checkExpiry();
  if (expiryStatus === 1) {

    const userdetailsNew= {
      userId: userdetails.userId,
      expiry: Date.now() + 3000000,
    }
    const userdetailsStr = JSON.stringify(userdetailsNew);
    document.cookie = `userdetails=${encodeURIComponent(
      userdetailsStr
    )}; max-age=${15 * 24 * 60 * 60}; HttpOnly; secure;`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "local-api-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          "expiry-code": "1",
          "user-id": `${userdetails.userId}`,
        },
      });
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      const data = await response.json();
      return JSON.parse(data);
    } catch (error) {
      document.cookie = "userdetails=; max-age=0; secure;";
      window.location.href=`https://harmonix-play.vercel.app/login?error=${error}`;
      throw new Error(error);
    }
  }
  if (expiryStatus === 2) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "local-api-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          "expiry-code": "2",
          "user-id": `${userdetails.userId}`,
        },
      });
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      const data = await response.json();
      return JSON.parse(data);
    } catch (error) {
      document.cookie = "userdetails=; max-age=0; secure;";
      window.location.href=`https://harmonix-play.vercel.app/login?error=${error}`;
      throw new Error(error);
    }
  } else {
    document.cookie = "userdetails=; max-age=0; secure;";
    window.location.href = "https://harmonix-play.vercel.app/login";
    return;
  }
}

export async function getTopTracksIndia() {
  try {
    return await fetchData(
      `${protocol}://${host}${port}/api/getTopTracksIndia`,
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
      `${protocol}://${host}${port}/api/getTopTracksGlobal`,
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
      `${protocol}://${host}${port}/api/getArtistData?id=${id}`,
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
      `${protocol}://${host}${port}/api/getArtistAlbums?id=${id}`,
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
      `${protocol}://${host}${port}/api/getArtistTopTracks?id=${id}`,
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
      `${protocol}://${host}${port}/api/getUserTopArtists?number=${number}`,
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
      `${protocol}://${host}${port}/api/getUserInfo`,
      "GET",
      "Failed to fetch user info"
    );
  } catch (error) {
    throw new Error(`Error fetching user info: ${error.message}`);
  }
}

export async function getSearchResult(query, type) {
  try {
    return await fetchData(
      `${protocol}://${host}${port}/api/search?q=${query}&type=${type}`,
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
      `${protocol}://${host}${port}/getAudioLink?id=${id}`,
      "GET",
      "Failed to play the track"
    );
  } catch (error) {
    throw new Error(`Failed to play the track: ${error.message}`);
  }
}
