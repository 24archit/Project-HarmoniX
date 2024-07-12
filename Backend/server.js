// Importing Required Packages
const express = require("express");
const querystring = require("querystring");
const request = require("request");
const path = require("path");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");

import("node-fetch");
// Set the connection with SQL Database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "userinfo",
  password: "2424@Db_Archit",
});

// Defined Useful Information for API Requests
const app = express();
const port = 2424;
const host = "localhost";
const client_id = "40cb55a60a0c4760a461254c90b672b3";
const client_secret = "98ef58b72c9445f2b5830b932c13cb60";
const scope =
  "user-read-private user-read-email playlist-modify-public user-follow-read user-top-read";
// const iconClasses = [
//   "fa-solid fa-right-from-bracket",
//   "fa-solid fa-house",
//   "fa-solid fa-wand-magic-sparkles",
//   "fa-solid fa-arrow-trend-up",
//   "fa-brands fa-artstation",
//   "fa-solid fa-play",
//   "fa-solid fa-link",
// ];

//Function Generate random string
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const originalState = generateRandomString(16);

// Function to verify the cases as per the situation
// Situation 1: Cookie Expired => Return 0,
// Situation 2: Cookie Present & Token Expired => Return 1,
// Situation 3: Cookie Present & Token Not Expired => Return 2;

function checkExpiry(req) {
  const userdetails = req.cookies["userDetails"]
    ? JSON.parse(req.cookies["userDetails"])
    : null;
  if (!userdetails) {
    return 0;
  } else if (userdetails.expiry < Date.now()) {
    return 1;
  } else {
    return 2;
  }
}
async function updateData(req, res, accessToken) {
  const userdetails = req.cookies["userDetails"]
    ? JSON.parse(req.cookies["userDetails"])
    : null;
  userdetails.expiry = Date.now() + 3300000;

  res.cookie("userDetails", JSON.stringify(userdetails), {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  });

  let q = `UPDATE userdetails SET accesstoken = ? WHERE userspotifyid = ?`;
  connection.query(q, [accessToken, userdetails.userId], (err, result) => {
    if (err) {
      console.error("Error updating user details:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    console.log("User details updated successfully:", result);
  });
}
async function getToken(req, tokenType) {
  const userDetails = req.cookies["userDetails"]
    ? JSON.parse(req.cookies["userDetails"])
    : null;
  const q = `SELECT * FROM userdetails WHERE userspotifyid = ?`;

  const query = (q, params) => {
    return new Promise((resolve, reject) => {
      connection.query(q, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  try {
    const result = await query(q, [userDetails.userId]);
    const data = result[0];
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
app.use("/user", async function (req, res, next) {
  const expiryStatus = checkExpiry(req);

  if (expiryStatus === 0) {
    res.redirect("/login");
    return;
  }

  if (expiryStatus === 1) {
    try {
      const tokens = await getFreshTokens(req);
      await updateData(req, res, tokens.access_token);
      next();
    } catch (error) {
      res.redirect("/login?error=database_error");
      return;
    }
  } else if (expiryStatus === 2) {
    next();
  }
});
app.use("/login", async function (req, res, next) {
  const expiryStatus = checkExpiry(req);

  if (expiryStatus === 0) {
    next();
    return;
  }
  if (expiryStatus === 1) {
    try {
      const tokens = await getFreshTokens(req);
      await updateData(req, res, tokens.access_token);
      res.redirect("/user/home");
      return;
    } catch (error) {
      res.send("<a href='http://localhost:2424/login'>Login</a>");
      return;
    }
  }
  res.redirect("/user/home");
});
// Apply authenticateRequest middleware to your API routes
app.use("/api", function (req, res, next) {
  const API_Access_Header = req.headers["local-api-access-token"];
  if (
    API_Access_Header ===
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  ) {
    next();
  } else {
    res.status(403).send(`
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
});

app.use("/api", async function (req, res, next) {
  const expiryStatus = checkExpiry(req);

  if (expiryStatus === 0) {
    res.redirect("/login");
    return;
  }

  if (expiryStatus === 1) {
    try {
      const tokens = await getFreshTokens(req);
      await updateData(req, res, tokens.access_token);
      next();
    } catch (error) {
      res.redirect("/login?error=database_error");
      return;
    }
  } else if (expiryStatus === 2) {
    next();
  }
});
app.get("/api/getExpiryStatus", function (req, res) {
  const data = checkExpiry(req);
  res.json(data);
});

app.get("/", async function (req, res) {
  const expiryStatus = checkExpiry(req);
  if (expiryStatus == 0) {
    res.redirect("/login");
  } else {
    res.redirect("/user/home");
  }
});
app.get("/login", function (req, res) {
  const error = req.query.error || null;
  if (error === "access_denied") {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Authorization Failed</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #0d0d0d, #1a237e, #4a148c);
            color: #ffffff;
          }
          h1 { color: #ff4081; }
          p { margin: 20px 0; }
          a {
            color: #64ffda;
            text-decoration: none;
            border: 2px solid #64ffda;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background 0.3s, color 0.3s;
          }
          a:hover {
            background: #64ffda;
            color: #0d0d0d;
          }
          footer {
            margin-top: 40px;
          }
        </style>
      </head>
      <body>
        <h1>Authorization Failed</h1>
        <p>You need to authorize your Spotify account to enjoy our services. Please try again.</p>
        <a href="http://localhost:2424/login">Login</a>
        <footer>
          <p>&copy; Team Harmonix</p>
        </footer>
      </body>
      </html>
    `);
  } else if (!error) {
    res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Connection Error</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #0d0d0d, #1a237e, #4a148c);
            color: #ffffff;
          }
          h1 { color: #ff4081; }
          p { margin: 20px 0; }
          a {
            color: #64ffda;
            text-decoration: none;
            border: 2px solid #64ffda;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background 0.3s, color 0.3s;
          }
          a:hover {
            background: #64ffda;
            color: #0d0d0d;
          }
          footer {
            margin-top: 40px;
          }
        </style>
      </head>
      <body>
        <h1>Unable to Connect with Spotify</h1>
        <p>We encountered an issue connecting to Spotify. Please try again later.</p>
        <a href="http://localhost:2424/login">Login</a>
        <footer>
          <p>&copy; Team Harmonix</p>
        </footer>
      </body>
      </html>
    `);
  }
});

app.get("/login-spotify", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: "http://localhost:2424/callback",
        state: originalState,
      })
  );
});

app.get("/callback", function (req, res) {
  const error = req.query.error || null;
  if (error != null) {
    res.redirect(`/login?error=${error}`);
    return;
  }

  const authCode = req.query.code || null;
  const state = req.query.state || null;

  if (state === null || state !== originalState) {
    res.redirect(`/login?error=state_mismatch`);
    return;
  }

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: authCode,
      redirect_uri: "http://localhost:2424/callback",
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (error || response.statusCode !== 200) {
      res.redirect(`/login?error=invalid_token`);
      return;
    }

    const accessToken = body.access_token;
    const refreshToken = body.refresh_token;

    request.get(
      {
        url: "https://api.spotify.com/v1/me",
        headers: { Authorization: "Bearer " + accessToken },
        json: true,
      },
      function (error, response, body) {
        if (error || response.statusCode !== 200) {
          res.redirect(`/login?error=invalid_token`);
          return;
        }

        const userId = body.id;
        const query = `INSERT INTO userdetails (userspotifyid, accesstoken, refreshtoken) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE accesstoken=?, refreshtoken=?`;
        connection.query(
          query,
          [userId, accessToken, refreshToken, accessToken, refreshToken],
          function (err) {
            if (err) {
              console.error("Error inserting user details:", err);
              res.redirect("/login?error=database_error");
              return;
            }

            const userDetails = {
              userId: userId,
              expiry: Date.now() + 3300000,
            };
            res.cookie("userDetails", JSON.stringify(userDetails), {
              maxAge: 15 * 24 * 60 * 60 * 1000,
              httpOnly: true,
              secure: false,
            });
            res.redirect("/user/home");
          }
        );
      }
    );
  });
});

app.get("/user/home", async function (req, res) {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});
app.get("/user/artist/:id", async function (req, res) {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});
app.get("/user/search", async function (req, res) {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});
app.get("/api/getTopTracksIndia", async (req, res) => {
  try {
    const topTracks = await getTopTracksIndia(req);
    res.json(topTracks);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getTopTracksGlobal", async (req, res) => {
  try {
    const topTracks = await getTopTracksGlobal(req);
    res.json(topTracks);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getTopDanceBolly", async (req, res) => {
  try {
    const topDanceBolly = await getTopDanceBolly(req);
    res.json(topDanceBolly);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getUserTopArtists", async (req, res) => {
  try {
    const topArtists = await getUserTopArtists(req, req.query.number);
    res.json(topArtists);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getUserInfo", async (req, res) => {
  try {
    const userInfo = await getUserInfo(req);
    res.json(userInfo);
  } catch(error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/search", async function (req, res) {
  try {
    const type = req.query.type;
    const q = req.query.q;
    let result = await search(q, type, req);
    res.json(result);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getArtistData", async function (req, res) {
  try {
    let result = await getArtistData(req);
    res.json(result);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getArtistTopTracks", async function (req, res) {
  try {
    let result = await getArtistTopTracks(req);
    res.json(result);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.get("/api/getArtistAlbums", async function (req, res) {
  try {
    let result = await getArtistAlbums(req);
    res.json(result);
  } catch (error) {
    res.redirect(`/login/?error=${error}`);
  }
});
app.use(express.static(path.join(__dirname, "public", "dist")));
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
    <a href="http://localhost:2424/login">Go to Authenticate Page</a>
    <div class="footer">
      <p>&copy;Team Harmonix</p>
    </div>
  </div>
</body>
</html>

  `);
});

app.listen(port, host, () => {
  console.log(`Server Started, Listening on  : http://${host}:${port}`);
});
