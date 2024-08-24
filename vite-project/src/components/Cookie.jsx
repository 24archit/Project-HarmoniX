import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Cookie() {
  const location = useLocation();

  useEffect(() => {
    const setCookieData = async () => {
      try {
        // Parse the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const originalState = localStorage.getItem('state');
        const receivedState = urlParams.get('state');

        // Check for state mismatch
        if (originalState !== receivedState) {
          window.location.href = "https://harmonix-play.vercel.app/login?error=state_mismatch";
          return;
        }

        const firstUrl = window.location.href;
        const secondUrl = "https://harmonix-stream.vercel.app/callback";

        // Extract query parameters and create the updated URL
        const urlObj1 = new URL(firstUrl);
        const queryParams = urlObj1.search;
        const updatedUrl = secondUrl + queryParams;

        // Fetch user details
        const response = await fetch(updatedUrl, {
          credentials: 'include'
        });

        // Check response status
        if (!response.ok) {
          const data = await response.json();
          window.location.href = `https://harmonix-play.vercel.app/login?${data.error}`;
          return;
        }

        // Parse user details and set the cookie
        const userdetails = await response.json();
        const userdetailsStr = JSON.stringify(userdetails);
        document.cookie = `userdetails=${encodeURIComponent(userdetailsStr)}; max-age=${15 * 24 * 60 * 60}; secure;`;

        // Redirect to user home after setting the cookie
        window.location.href = "https://harmonix-play.vercel.app/user/home";
      } catch (error) {
        // Handle errors and redirect if needed
        console.error("Error setting cookie:", error);
        window.location.href = "https://harmonix-play.vercel.app/login?error=server_error";
      }
    };

    // Run the asynchronous function
    setCookieData();
  }, [location]);

  return null;
}
