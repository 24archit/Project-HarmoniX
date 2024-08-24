import React, { useEffect } from "react";
export default function Cookie() {
  useEffect(() => {
    const setCookieData = async () => {
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
      const data = await response.jaon();
      console.log(data);
      return;
    };

    setCookieData();
  }, []);

  return null;
}
