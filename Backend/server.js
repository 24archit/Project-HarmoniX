const express = require("express");
const querystring = require("querystring");
const request = require("request");
const path = require("path");
import('node-fetch');

const app = express();
const port = 2424;
const client_id = "40cb55a60a0c4760a461254c90b672b3";
const client_secret = "98ef58b72c9445f2b5830b932c13cb60";
const scope =
  "user-read-private user-read-email playlist-modify-public user-follow-read user-top-read";

let authCode;
let accessToken;
let refreshToken;

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

async function getUserInfo() {
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

async function getUserTopArtists(number) {
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

async function getTopTracksIndia() {
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

async function getTopTracksGlobal() {
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

async function getTopDanceBolly() {
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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server Started, Listening on Port : ${port}`);
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "login-dialog.html"));
});
app.get("/login", function (req, res) {
  let error = req.query.error || null;
  if (error === "access_denied") {
    res.send(
      "<h1>Authorization Failed..</h1> <p>You have give authorization of your spotify account to enjoy services. Please try again..</p><a href='http://localhost:2424/'>Login</a>"
    );
  } else if (!error) {
    res.sendFile(path.join(__dirname, "public", "login-dialog.html"));
  } else {
    res.send(
      "<h1>Unable to Connect with Spotify..</h1> <p>Please try again..</p><a href='http://localhost:2424/'>Login</a>"
    );
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
  let error = req.query.error || null;
  if (error != null) {
    res.redirect(`http://localhost:2424/login?error=${error}`);
    return;
  }

  authCode = req.query.code || null;
  let receivedState = req.query.state || null;

  if (receivedState != originalState || receivedState == null) {
    res.redirect(`http://localhost:2424/login?error=stateMismatch`);
    return;
  } else {
    let authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: authCode,
        redirect_uri: "http://localhost:2424/callback",
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };
    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        accessToken = body.access_token;
        refreshToken = body.refresh_token;
        res.redirect("http://localhost:2424/User-Home");
        return;
      } else {
        console.log(response);
        res.redirect(
          `http://localhost:2424/login?error=${body.error}&error_message=${body.error_description}`
        );
        return;
      }
    });
  }
});

app.get("/User-Home", function (req, res) {
  const iconClasses = [
    "fa-solid fa-right-from-bracket",
    "fa-solid fa-house",
    "fa-solid fa-wand-magic-sparkles",
    "fa-solid fa-arrow-trend-up",
    "fa-brands fa-artstation",
    "fa-brands fa-artstation",
    "fa-solid fa-play",
    "fa-solid fa-link",
  ];
  res.render("home.ejs", { iconClasses: iconClasses });
});
app.get("/api/getTopTracksIndia", async (req, res) => {
  const data = await getTopTracksIndia();
  res.json(data);
});
app.get("/api/getTopTracksGlobal", async (req, res) => {
  const data = await getTopTracksGlobal();
  res.json(data);
});
app.get("/api/getTopDanceBolly", async (req, res) => {
  const data = await getTopDanceBolly();
  res.json(data);
});
app.get("/api/getUserTopArtists", async (req, res) => {
  const data = await getUserTopArtists(req.query.number);
  res.json(data);
});
app.get("/api/getUserInfo", async (req, res) => {
  const data = await getUserInfo();
  res.json(data);
});

