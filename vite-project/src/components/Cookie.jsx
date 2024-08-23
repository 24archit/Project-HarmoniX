import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getUserInfo } from "../apis/apiFunctions";
useEffect(() => {
  const setCookie = async () => {
    try {
      const data = await getUserInfo();
      const userdetails = {
        userId: data.id,
        expiry: Date.now() + 3000000, // Expires in ~55 minutes
      };
      const userdetailsString = JSON.stringify(userdetails);

      // Set the cookie
      document.cookie = `userdetails=${encodeURIComponent(
        userdetailsString
      )}; expires=${new Date(
        Date.now() + 15 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/; secure`;
      window.location.href = "https://harmonix-play.vercel.app/user/home";
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error state if needed
    }
  };
  setCookie();
}, []);
export default function Cookie() {}
