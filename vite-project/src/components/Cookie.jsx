import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { getUserInfo } from "../apis/apiFunctions";

export default function Cookie() {
  const [cookies, setCookie] = useCookies(['userdetails']);

  useEffect(() => {
    const setCookieData = async () => {
      try {
        const data = await getUserInfo();
        const userdetails = {
          userId: data.id,
          expiry: Date.now() + 3000000, // Expires in ~55 minutes
        };

        // Set the cookie with the user details
        setCookie('userdetails', JSON.stringify(userdetails), {
          path: '/',
          expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expires in 15 days
          secure: true,
        });

        // Redirect to the user home page
        window.location.href = "https://harmonix-play.vercel.app/user/home";
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state if needed
      }
    };

    setCookieData();
  }, [setCookie]);

  return null;
}
