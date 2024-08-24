import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Cookie() {
  const location = useLocation();

  useEffect(() => {
    const setCookieData = async () => {
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

      // Extract query parameters
      const urlObj1 = new URL(firstUrl);
      const queryParams = urlObj1.search;

      // Create the updated URL with query parameters
      const updatedUrl = secondUrl + queryParams;

      try {
        const response = await fetch(updatedUrl, {
          credentials: 'include'
        });

        // If the response is not ok, redirect to login with error
        if (!response.ok) {
          const data = await response.json();
          window.location.href = `https://harmonix-play.vercel.app/login?${data.error}`;
          return;
        }

        const userdetails = await response.json();
        const userdetailsStr = JSON.stringify(userdetails);

        // Set the cookie with user details
        document.cookie = `userdetails=${encodeURIComponent(userdetailsStr)}; 
                           max-age=${15 * 24 * 60 * 60}; 
                           secure;`;

        // Uncomment to redirect after setting the cookie
        // window.location.href = "https://harmonix-play.vercel.app/user/home";
      } catch (error) {
        console.error("Error setting cookie:", error);
        window.location.href = "https://harmonix-play.vercel.app/login?error=server_error";
      }
    };

    // Only run the effect when the route (location) changes
    setCookieData();
  }, [location]);

  return null;
}
