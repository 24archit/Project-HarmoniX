import React from 'react';
import { useColor } from 'color-thief-react';
import TrackLogo from "../assets/media/Animated-Track-Logo.gif";
import "../assets/styles/TrackImg.css";

export function TrackImg() {
    const { data, loading, error } = useColor(TrackLogo, 'rgbString', { crossOrigin: 'anonymous', quality: 10 });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading color</div>;

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
