// Importing Required Packages
const express = require("express");
const querystring = require("querystring");
const axios = require("axios");
require("dotenv").config();
const cookieParser = require("cookie-parser");
import("node-fetch");

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "https://harmonix-play.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: [
    "local-api-access-token",
    "expiry-code",
    "user-id",
    "userid",
  ],
};
app.use(cors(corsOptions));

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.REACT_APP_HARMONIX_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;

// Defined Useful Information for API Requests

const port = process.env.REACT_APP_PORT;
const host = process.env.REACT_APP_HOST;
const protocol = process.env.REACT_APP_PROTOCOL;
const client_id = process.env.REACT_APP_HARMONIX_CLIENT_ID;
const client_secret = process.env.REACT_APP_HARMONIX_CLIENT_SECRET;
const scope =
  "user-read-private user-read-email playlist-modify-public user-follow-read user-top-read user-follow-modify";

async function updateData(req, accessToken, refreshToken) {
  const userid=  req.headers["user-id"];
  const supabase = createClient(supabaseUrl, supabaseKey, {
    headers: {
      userid: userid, // Pass Spotify ID from request header
    },
  });
  const {data: updateData, error: updateError  } = await supabase
    .from("userdetails")
    .update({ accesstoken: accessToken, refreshtoken: refreshToken })
    .eq("userspotifyid", userid);

  if (updateError) {
    throw new Error("Error updating user details");
  }
  console.log("User details (accessToken) updated successfully");
}

async function getToken(req, tokenType) {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    headers: {
      userid: req.headers["user-id"], // Pass Spotify ID from request header
    },
  });

  try {
    const { data, error } = await supabase
      .from("userdetails")
      .select("*")
      .eq("userspotifyid", req.headers["user-id"])
      .single();

    if (error || !data) {
      throw new Error("Database query failed");
    }
    if (tokenType === "accessToken") {
      return data.accesstoken;
    } else {
      return data.refreshtoken;
    }
  } catch (err) {
    throw new Error("Database query failed");
  }
}

async function getFreshTokens(req) {
  const refreshToken = await getToken(req, "refreshToken");
  const encodedCredentials = Buffer.from(
    `${client_id}:${client_secret}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedCredentials}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const body = await response.json();
  console.log(body);

  return {
    access_token: body.access_token,
    refresh_token: refreshToken,
  };
}

async function search(q, type, req) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${q}&type=${type}&market=IN&limit=9`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}

async function getUserInfo(req) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}

async function getUserTopArtists(req, number) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=${number}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}

async function getTopTracksIndia(req) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbLZ52XmnySJg",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return JSON.stringify(data);
}

async function getTopTracksGlobal(req) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}

async function getTopDanceBolly(req) {
  const accessToken = await getToken(req, "accessToken");
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}
async function getArtistData(req) {
  const accessToken = await getToken(req, "accessToken");
  const id = req.query.id;
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}
async function getArtistTopTracks(req) {
  const accessToken = await getToken(req, "accessToken");
  const id = req.query.id;
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=IN`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}
async function getArtistAlbums(req) {
  const accessToken = await getToken(req, "accessToken");
  const id = req.query.id;
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=single%2Calbum%2Cappears_on%2Ccompilation&market=IN&limit=10&offset=0`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return JSON.stringify(data);
}
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Apply authenticateRequest middleware to your API routes

app.use("/api", async function (req, res, next) {
  const API_Access_Header = req.headers["local-api-access-token"];
  const expiryStatus = req.headers["expiry-code"];
  
  // Check for API access token
  if (API_Access_Header !== process.env.REACT_APP_LOCAL_API_ACCESS_TOKEN) {
    return res.status(403).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>403 - Access Denied</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #343a40;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 0.5em;
          }
          p {
            margin: 0.5em 0;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .footer {
            margin-top: 2em;
            font-size: 0.9em;
            color: #6c757d;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>403 - Access Denied</h1>
          <p>You do not have the necessary permissions to access this resource.</p>
          <p>Please contact your administrator if you believe this is an error.</p>
          <div class="footer">
            <p>This message is from Team Harmonix.</p>
          </div>
        </div>
      </body>
      </html>
    `);
  }
  
  
  // Handle token expiry based on the status
  if (expiryStatus == 1) {
    try {
      const tokens = await getFreshTokens(req);
      await updateData(req, tokens.access_token, tokens.refresh_token);
      next(); 
    } catch (error) {
      console.error("Error during token update:", error.message);
      return res.status(400).json({ error: "Unable to update access token" });
    }
  }
   else if (expiryStatus == 2) {
    next(); // Expiry status 2, proceed to the next middleware or route handler
  } else {
    return res.status(400).json({ error: "Invalid expiry status" }); // Handle unexpected expiry status
  }
});

app.get("/login-spotify", function (req, res) {
  const originalState = req.query.state;
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: "https://harmonix-play.vercel.app/callback",
        state: originalState,
      })
  );
});
app.get("/callback", async function (req, res) {
  const error = req.query.error || null;
  const authCode = req.query.code || null;

  if (error) {
    res.status(400).json({ error: error });
    return;
  }

  if (!authCode) {
    return res.status(400).json({ error: "No authorization code provided" });
  }
  try {
    // Request for the access and refresh tokens
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        code: authCode,
        redirect_uri: "https://harmonix-play.vercel.app/callback",
        grant_type: "authorization_code",
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        },
      }
    );

    const { access_token, refresh_token } = tokenResponse.data;

    // Use the access token to get user details (Spotify ID)
    const userResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const userId = userResponse.data.id; // Get the Spotify user ID
    // Insert or update user details in Supabase
    try {
      // Create a new Supabase client for this user (passing user-id in the headers)
      const supabaseWithHeaders = createClient(supabaseUrl, supabaseKey, {
        headers: {
          userid: userId, // Pass Spotify ID as a header
        },
      });

      // Upsert user details into Supabase
      const { data, error: insertError } = await supabaseWithHeaders
        .from("userdetails")
        .insert([
          {
            userspotifyid: userId,
            accesstoken: access_token,
            refreshtoken: refresh_token,
          },
        ]);

      if (insertError) {
        // Check if the error is due to a unique constraint violation
        if (insertError.code === "23505") {
          // This is the Postgres code for unique violation
          // Attempt to update the existing user's access and refresh tokens
          const { data: updateData, error: updateError } =
            await supabaseWithHeaders
              .from("userdetails")
              .update({
                accesstoken: access_token,
                refreshtoken: refresh_token,
              })
              .eq("userspotifyid", userId); // Use eq to filter by primary key

          if (updateError) {
            console.error("Error updating user details:", updateError);
            return res
              .status(500)
              .json({ error: "Database error during update" });
          }
        } else {
          // Handle any other errors during insert
          console.error("Error inserting user details:", insertError);
          return res
            .status(500)
            .json({ error: "Database error during insert" });
        }
      }

      // Successful insert

      // Prepare response with user details and token expiration time
      const userdetails = {
        userId: userId,
        expiry: Date.now() + 3000000, // Set token expiry (in this case ~55 minutes)
      };

      return res.status(200).json(userdetails); // Send the user details response
    } catch (err) {
      console.error("Error handling the callback:", err);
      return res.status(500).json({ error: "Server error" });
    }
  } catch (err) {
    console.error("Error during the OAuth flow:", err);
    return res.status(400).json({ error: "Failed to handle OAuth callback" });
  }
});

app.get("/api/getTopTracksIndia", async (req, res) => {
  try {
    const topTracks = await getTopTracksIndia(req);
    res.json(topTracks);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getTopTracksGlobal", async (req, res) => {
  try {
    const topTracks = await getTopTracksGlobal(req);
    res.json(topTracks);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getTopDanceBolly", async (req, res) => {
  try {
    const topDanceBolly = await getTopDanceBolly(req);
    res.json(topDanceBolly);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getUserTopArtists", async (req, res) => {
  try {
    const topArtists = await getUserTopArtists(req, req.query.number);
    res.json(topArtists);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getUserInfo", async (req, res) => {
  try {
    const accessToken = await getToken(req, "accessToken");
    console.log("Using Access Token:", accessToken); 
    const userInfo = await getUserInfo(req);
    res.json(userInfo);
  } catch (error) {
    res.status(400).json({ error_message: `${error}` });
  }
});
app.get("/api/search", async function (req, res) {
  try {
    const type = req.query.type;
    const q = req.query.q;
    let result = await search(q, type, req);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getArtistData", async function (req, res) {
  try {
    let result = await getArtistData(req);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getArtistTopTracks", async function (req, res) {
  try {
    let result = await getArtistTopTracks(req);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.get("/api/getArtistAlbums", async function (req, res) {
  try {
    let result = await getArtistAlbums(req);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Not able to fetch data from Spotify" });
  }
});
app.post("/logout", async function (req, res) {
  res.clearCookie("userdetails");
  res.status(200).json("OK");
});

app.get("/getAudioLink", async function (req, res) {
  const id = req.query.id;
  if (!id) {
    return res.status(400).send("Bad Request: Missing 'id' query parameter");
  }
  try {
    const response = await fetch(
      `https://api.song.link/v1-alpha.1/links?url=open.spotify.com%2Ftrack%2F${id}`
    );
    if (!response.ok) {
      return res.status(500).send("Network response was not ok");
    }
    const data = await response.json();
    if (!data.linksByPlatform) {
      return res.status(404).send("Links by platform not available");
    }
    const youtubeMusicLink = data.linksByPlatform.youtubeMusic;

    if (!youtubeMusicLink) {
      return res.status(404).send("YouTube Music link not available");
    }
    res.json(youtubeMusicLink.url);
  } catch (error) {
    console.error("Error fetching audio link:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.use((req, res, next) => {
  res.status(404).send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0d0d0d, #1a237e, #4a148c);
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 0.5em;
      color: #ff4081;
    }
    p {
      margin-top:7px;
    }
    a {
      color: #64ffda;
      text-decoration: none;
      border: 2px solid #64ffda;
      padding: 5px 20px;
      border-radius: 5px;
      transition: background 0.3s, color 0.3s;
      margin-top:9px;
    }
    a:hover {
      background: #64ffda;
      color: #0d0d0d;
    }
    .footer {
      margin-top: 2em;
      font-size: 0.9em;
      color: #b0bec5;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <p>Please use the link below to navigate to the login page.</p>
    <a href="${protocol}://${host}${port}/login">Go to Authenticate Page</a>
    <div class="footer">
      <p>&copy;Team Harmonix</p>
    </div>
  </div>
</body>
</html>
  `);
});
module.exports = app;
