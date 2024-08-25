// Importing Required Packages
const express = require("express");
const querystring = require("querystring");
const request = require("request");
require("dotenv").config();
const cookieParser = require("cookie-parser");
import("node-fetch");

const app = express();
//verify
const cors = require("cors");
const corsOptions = {
  origin: "https://harmonix-play.vercel.app", // Adjust this to the URL of your frontend app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["local-api-access-token", "expiryCode", "userId"],
};
app.use(cors(corsOptions));

// Set the connection with SQL Database
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.REACT_APP_HARMONIX_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Defined Useful Information for API Requests
//verify
const port = process.env.REACT_APP_PORT;
const host = process.env.REACT_APP_HOST;
const protocol = process.env.REACT_APP_PROTOCOL;
const client_id = process.env.REACT_APP_HARMONIX_CLIENT_ID;
const client_secret = process.env.REACT_APP_HARMONIX_CLIENT_SECRET;
const scope =
  "user-read-private user-read-email playlist-modify-public user-follow-read user-top-read";
//Function Generate random string
// function generateRandomString(length) {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// Function to verify the cases as per the situation
// Situation 1: Cookie Expired => Return 0,
// Situation 2: Cookie Present & Token Expired => Return 1,
// Situation 3: Cookie Present & Token Not Expired => Return 2;

function checkExpiry(req) {
  const userdetails = req.cookies["userdetails"]
    ? JSON.parse(req.cookies["userdetails"])
    : null;
  if (!userdetails) {
    console.log("hoo");
    return 0;
  } else if (userdetails.expiry < Date.now()) {
    return 1;
  } else {
    return 2;
  }
}
async function updateData(res, accessToken) {
  const { data, error } = await supabase
    .from("userdetails")
    .update({ accesstoken: accessToken })
    .eq("userspotifyid", userdetails.userId);

  if (error) {
    console.error("Error updating user details:", error);
    res.status(500).send("Internal Server Error");
    return;
  }
  console.log("User details updated successfully:", result);
}

async function getToken(userId, tokenType) {
  // const userdetails = req.cookies["userdetails"]
  //   ? JSON.parse(req.cookies["userdetails"])
  //   : null;
  // if (!userdetails) {
  //   throw new Error("No user details found in cookies");
  // }

  try {
    const { data, error } = await supabase
      .from("userdetails")
      .select("*")
      .eq("userspotifyid", userId)
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

async function getUserInfo(userId) {
  const accessToken = await getToken(userId, "accessToken");
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
// app.use("/user", async function (req, res, next) {
//   const expiryStatus = checkExpiry(req);

//   if (expiryStatus === 0) {
//     res.redirect("/login");
//     return;
//   }

//   if (expiryStatus === 1) {
//     try {
//       const tokens = await getFreshTokens(req);
//       await updateData(req, res, tokens.access_token);
//       next();
//     } catch (error) {
//       res.redirect("/login?error=database_error");
//       return;
//     }
//   } else if (expiryStatus === 2) {
//     next();
//   }
// });
app.use("/login", async function (req, res, next) {
  const expiryStatus = checkExpiry(req);
  console.log(expiryStatus);
  if (expiryStatus === 0) {
    next();
    return;
  }
  if (expiryStatus === 1) {
    try {
      const tokens = await getFreshTokens(req);
      await updateData(res, tokens.access_token);
      res.redirect("https://harmonix-play.vercel.app/user/home");
      return;
    } catch (error) {
      console.log(error);
      res.send(`<a href=${protocol}://${host}${port}/login>Login</a>`);
      return;
    }
  }
  res.redirect("https://harmonix-play.vercel.app/user/home");
});
// Apply authenticateRequest middleware to your API routes
app.use("/api", function (req, res, next) {
  const API_Access_Header = req.headers["local-api-access-token"];
  console.log(req.headers);
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

// app.use("/api", async function (req, res, next) {
//   const expiryStatus = req.headers["expiryCode"];

//   // if (expiryStatus === 0) {
//   //   res.redirect("/login");
//   //   return;
//   // }

//   if (expiryStatus === 1) {
//     try {
//       const tokens = await getFreshTokens(req);
//       await updateData(res, tokens.access_token);
//       next();
//     } catch (error) {
//       res.redirect("https://harmonix-play.vercel.app/login?error=database_error");
//       return;
//     }
//   } else if (expiryStatus === 2) {
//     next();
//   }
// });
// app.get("/getExpiryStatus", function (req, res) {
//   console.log(req);
//   const data = checkExpiry(req);
//   res.json(data);
// });

// app.get("/", async function (req, res) {
//   const expiryStatus = checkExpiry(req);
//   if (expiryStatus == 0) {
//     res.redirect("/login");
//   } else {
//     res.redirect("https://harmonix-stream.vercel.app/user/home");
//   }
// });
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
        <a href=${protocol}://${host}${port}/login>Login</a>
        <footer>
          <p>&copy; Team Harmonix</p>
        </footer>
      </body>
      </html>
    `);
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
        <a href=${protocol}://${host}${port}/login>Login</a>
        <footer>
          <p>&copy; Team Harmonix</p>
        </footer>
      </body>
      </html>
    `);
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
  if (error) {
    res.status(400).json({ error: error });
    return;
  }

  const authCode = req.query.code || null;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: authCode,
      redirect_uri: "https://harmonix-play.vercel.app/callback", //${host}${port}/callback`,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, async function (error, response, body) {
    if (error || response.statusCode !== 200) {
      res.status(400).json({ error: "invalid-token" });
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
      async function (error, response, body) {
        if (error || response.statusCode !== 200) {
          res.status(400).json({ error: "invalid_token" });
          return;
        }

        const userId = body.id;

        try {
          // Upsert user details into Supabase
          const { data, error: upsertError } = await supabase
            .from("userdetails")
            .upsert(
              [
                {
                  userspotifyid: userId,
                  accesstoken: accessToken,
                  refreshtoken: refreshToken,
                },
              ],
              { onConflict: "userspotifyid" }
            );

          if (upsertError) {
            console.error(
              "Error inserting/updating user details:",
              upsertError
            );
            res.status(400).json({ error: "database_error" });
            return;
          }

          const userdetails = {
            userId: userId,
            expiry: Date.now() + 3000000, // Expires in ~55 minutes
          };
          res.status(200).json(userdetails);
        } catch (err) {
          console.error("Error handling the callback:", err);
          res.status(400).json({ error: "server_error" });
        }
      }
    );
  });
});

// app.get("/user/home", async function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
// });
// app.get("/user/artist/:id", async function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
// });
// app.get("/user/search", async function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
// });
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
  const userId="ao07zc46ay34tx0wmvmko0fmb";
  try {
    const userInfo = await getUserInfo(userId);
    res.json(userInfo);
  } catch (error) {
    res.status(400).json({error_message: `${error}`});
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
app.post("/logout", async function (req, res) {
  res.clearCookie("userdetails");
  res.status(200).json("OK");
  console.log("Cleared");
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
// app.listen(2424, () => {
//   console.log(`Server Started, Listening on  : ${protocol}://${host}${port}`);
// });
