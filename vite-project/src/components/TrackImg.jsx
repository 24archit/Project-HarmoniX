import React from 'react';
import TrackLogo from "../assets/media/Animated-Track-Logo.gif";
import "../assets/styles/TrackImg.css";

export function TrackImg() {
   

    return (
        <>
            <div
                id="track-img"
                style={{
                    boxShadow: `0 4px 8px 0 ${data}, 0 6px 20px 0 ${data}`,
                }}
            >
                <img src={TrackLogo} alt="Track Logo" />
            </div>
        </>
    );
}
