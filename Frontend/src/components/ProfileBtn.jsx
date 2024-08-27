import '../assets/styles/ProfileBtn.css'; 
import profilePic from '../assets/media/profile-pic.png'; 
import { getUserInfo } from '../apis/apiFunctions'; 
import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

export default function ProfileBtn() {
    const [userInfo, setuserInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserInfo();
                setTimeout(() => {  
                    setuserInfo(data);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error state if needed
            }
        };
        fetchData();
    }, []);

    return (
        userInfo ? (
            <div className="nav-left-btns">
                <button className="profile-btn">
                    <img src={userInfo.images.length > 0 ? userInfo.images[0].url : profilePic} alt="DP" id="profile-img" />
                    <p id="username">{userInfo.display_name}</p>
                </button>
            </div>
        ) : (
            <div className="nav-left-btns">
                <div className='profile-btn'>
               <Skeleton 
            variant="circular" 
            width={40} 
            height={40} 
            sx={{
                bgcolor: 'rgba(71, 164, 211, 0.261)'
            }} 
            animation='wave' 
        />
        <Skeleton variant="rectangular" width={120} height={30} sx={{ bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '0.3rem', marginLeft:'0.5rem' }} />
        </div>
            </div>
        )
    );
}
