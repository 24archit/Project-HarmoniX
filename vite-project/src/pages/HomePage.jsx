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

// Function to get cookie expiry status
function getExpiryStatus() {
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

// Function to update access token, update cookie, and handle flow
async function updateAccessToken() {
  try {
    // Step 1: Get user details from the cookie
    const getCookie = () => {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userdetails="));
      if (!cookie) throw new Error("No cookie found");

      const cookieValue = cookie.split("=")[1];
      const decodedValue = decodeURIComponent(cookieValue);
      return JSON.parse(decodedValue); // Parse the JSON string into an object
    };

    const userdetails = getCookie();

    // Step 2: Make the API call to update the token
    const response = await fetch(
      "https://harmonix-stream.vercel.app/expiry/1/updateData",
      {
        method: "PATCH",
        headers: {
          "local-api-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          "user-id": `${userdetails.userId}`,
        },
      }
    );

    // Step 3: Handle non-successful responses (e.g., token is invalid)
    if (!response.ok) {
      await clearCookie("userdetails");
      window.location.href = "https://harmonix-play.vercel.app/login";
      return;
    }

    // Step 4: Clear the existing cookie before updating it
    const clearCookie = (name) => {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };
    clearCookie("userdetails");

    // Step 5: Update the cookie with the new token and expiration time
    const userdetailsNew = {
      userId: userdetails.userId,
      expiry: Date.now() + 3000000, // 50 minutes expiry
    };
    const userdetailsStr = JSON.stringify(userdetailsNew);
    document.cookie = `userdetails=${encodeURIComponent(
      userdetailsStr
    )}; max-age=${15 * 24 * 60 * 60};`; // Cookie expiry set to 15 days

    console.log("Cookie Updated", userdetailsNew);
  } catch (error) {
    console.error("Error updating access token", error);
    window.location.href = "https://harmonix-play.vercel.app/login";
  }
}

// Main App component
function App() {
  const [expiryCode, setExpiryCode] = useState(0);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchExpiryStatus = async () => {
      try {
        const expiryStatus = getExpiryStatus();
        setExpiryCode(expiryStatus);

        if (expiryStatus === 1) {
          // Call to update the token if expired
          await updateAccessToken();
          setExpiryCode(2); // After updating the token, set the expiry code to valid (2)
        }
      } catch (error) {
        console.error("Error fetching expiry status:", error);
        window.location.href = "https://harmonix-play.vercel.app/login";
      }
    };

    fetchExpiryStatus();
  }, []);

  // Conditionally render based on expiryCode
  if (expiryCode === 0) {
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
  }

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

export default App;
