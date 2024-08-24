import React, { useEffect } from "react";
export default function Cookie() {
  useEffect(() => {
    const setCookieData = async () => {
      // Original URLs
      const firstUrl = window.location.href;
      const secondUrl = "https://harmonix-stream.vercel.app";

      // Create a URL object for the first URL to extract query parameters
      const urlObj1 = new URL(firstUrl);
      const queryParams = urlObj1.search; // This gives you "?param1=value1&param2=value2"

      // Create a URL object for the second URL
      const urlObj2 = new URL(secondUrl);

      // Append the query parameters to the second URL
      urlObj2.search = queryParams;

      // Convert the updated URL object back to a string
      const updatedUrl = urlObj2.toString();

      const response = await fetch(updatedUrl);
      if (!response.ok) {
        const data = await response.json();
        window.location.href = `https://harmonix-play.vercel.app/login?${data.error}`;
      }
      window.location.href = "https://harmonix-play.vercel.app/user/home";
    };

    setCookieData();
  }, []);

  return null;
}
