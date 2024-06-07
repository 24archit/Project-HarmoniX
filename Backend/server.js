const express = require("express");
const querystring = require("querystring");
const request = require('request');
const path = require("path");

const app = express();
const port = 2424;
const client_id = '40cb55a60a0c4760a461254c90b672b3';
const client_secret ='98ef58b72c9445f2b5830b932c13cb60'
const scope = 'user-read-private user-read-email playlist-modify-public user-follow-read user-top-read';

let authCode;
let accessToken;
let refreshToken;

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const originalState = generateRandomString(16);
    
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));    


app.listen(port, ()=>{
    console.log(`Server Started, Listening on Port : ${port}`);
});
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'login-dialog.html'));
});
app.get('/login', function(req, res){
    let error = req.query.error || null;
    if(error === "access_denied"){
        res.send("<h1>Authorization Failed..</h1> <p>You have give authorization of your spotify account to enjoy services. Please try again..</p><a href='http://localhost:2424/'>Login</a>");
    }
    else if(!error){
        res.sendFile(path.join(__dirname, 'public', 'login-dialog.html'));
    }
    else{
        res.send("<h1>Unable to Connect with Spotify..</h1> <p>Please try again..</p><a href='http://localhost:2424/'>Login</a>")
    }
    
});
app.get('/login-spotify', function(req, res) {
     res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: 'http://localhost:2424/callback',
            state: originalState
        }));
  });

app.get('/callback', function(req, res) {
    let error = req.query.error || null;
    if(error != null){
        res.redirect(`http://localhost:2424/login?error=${error}`);
        return;
    }
    
    authCode = req.query.code || null;
    let receivedState = req.query.state || null;

    if(receivedState != originalState || receivedState == null){
        res.redirect(`http://localhost:2424/login?error=stateMismatch`);
        return;
    }
    else{
        let authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
            code: authCode,
            redirect_uri: 'http://localhost:2424/callback',
            grant_type: 'authorization_code'
            },
            headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
      };
        request.post(authOptions, (error, response, body) => {
            console.log(error)
            if (!error && response.statusCode === 200) {
                accessToken = body.access_token;
                refreshToken = body.refresh_token;
                res.redirect("http://localhost:2424/User-Home");
                return;
            }
            else{
                console.log(response);
                res.redirect(`http://localhost:2424/login?error=${body.error}&error_message=${body.error_description}`);
                return;
            }
        });
    }    
  });

app.get('/User-Home', function(req, res) {
    res.send("Hi");
});
  
