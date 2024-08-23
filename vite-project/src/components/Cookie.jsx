import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserInfo } from '../apis/apiFunctions'; 
useEffect(() => {
    const setCookie = async () => {
        try {
            const data = await getUserInfo();
            const userdetails = {
                userId: data.id,
                expiry: Date.now() + 3000000, // Expires in ~55 minutes
              };
              Cookies.set('userdetails', JSON.stringify(userdetails), {
                expires: 15, // 15 days
                secure: true, // Requires HTTPS
              });
              window.location.href="https://harmonix-play.vercel.app/user/home";
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error state if needed
        }
    };
    setCookie();
}, []);
export default function Cookie() {


}