import React, { useEffect } from "react";
export default function Cookie() {
  useEffect(() => {
    const setCookieData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const originalState = localStorage.getItem('state');
      const receivedState = urlParams.get('state');
      if(originalState != receivedState){
        window.location.href="https://harmonix-play.vercel.app/login?error=state_mismatch";
        return;
      }
      // Original URLs
      const firstUrl = window.location.href;
      const secondUrl = "https://harmonix-stream.vercel.app/callback";

      // Create a URL object for the first URL to extract query parameters
      const urlObj1 = new URL(firstUrl);
      const queryParams = urlObj1.search; // This gives you "?param1=value1&param2=value2"

      const updatedUrl = secondUrl + queryParams;

      const response = await fetch(updatedUrl, {
        credentials: 'include'
      });
      if (!response.ok) {
        const data = await response.json();
        window.location.href = `https://harmonix-play.vercel.app/login?${data.error}`;
        return;
      }
      const userdetails = await response.json();
      console.log(userdetails);
      const userdetailsStr = JSON.stringify(userdetails);
      document.cookie = `userdetails=${encodeURIComponent(userdetailsStr)}; 
                   max-age=${15 * 24 * 60 * 60}; 
                   secure;`
      // window.location.href="https://harmonix-play.vercel.app/user/home";
      return;
    };

    setCookieData();
  }, []);

  return null;
}
