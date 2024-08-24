import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import NavBar from "./components/NavBar";
import LoginDialog from "./components/LoginDialog";
import Cookie from "./components/Cookie";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import React, { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCookies } from "react-cookie";

function App() {
  const [expiryCode, setExpiryCode] = useState(0);
  const [url, setUrl] = useState("");
  function getExpiryStatus() {
    const [cookies] = useCookies(["userdetails"]);
    const userdetailsStr = cookies.userdetails;
    let userdetails = null;
    if (userdetailsStr) {
      try {
        userdetails = JSON.parse(userdetailsStr);
      } catch (e) {
        return 0;
      }
    } else if (userdetails.expiry < Date.now()) {
      return 1;
    } else {
      return 2;
    }
  }
  useEffect(() => {
    const fetchExpiryStatus = async () => {
      try {
        const expiryStatus = getExpiryStatus();
        console.log(expiryStatus);
        setExpiryCode(expiryStatus);
      } catch (error) {
        console.error("Error fetching expiry status:", error);
      }
    };

    fetchExpiryStatus();
  }, []);

  // Conditionally render based on expiryCode
  if (expiryCode === 0 || expiryCode === 1) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginDialog />} />
          <Route path="/" element={<LoginDialog />} />
          <Route path="/callback" element={<Cookie />} />
          <Route path="*" element={<LoginDialog />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <NavBar />
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <main>
                    <HomePage setNewUrl={setUrl} />
                  </main>
                }
              />
              <Route
                exact
                path="/user/home"
                element={
                  <main>
                    <HomePage setNewUrl={setUrl} />
                  </main>
                }
              />
              <Route
                exact
                path="/user/search"
                element={
                  <main>
                    <SearchPage setNewUrl={setUrl} />
                  </main>
                }
              />
              <Route
                exact
                path="/user/artist/:id"
                element={
                  <main>
                    <ArtistPage setNewUrl={setUrl} />
                  </main>
                }
              />
              <Route exact path="/user/playlist/:id" element={<main></main>} />
            </Routes>
          </div>
          <Player url={url} setNewUrl={setUrl} />
        </div>
      </Router>
    );
  }
}

export default App;
