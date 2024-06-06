const express = require("express");
const app = express();
const port = 2424;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));



app.listen(port, ()=>{
    console.log(`Server Started, Listening on Port : ${port}`);
});

app.use((req, res)=>{
    console.log("Request Received");
    res.send("Hi");
})