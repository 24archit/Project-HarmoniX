import React from "react";
import TrackLogo from "../assets/media/Animated-Track-Logo.gif";
import "../assets/styles/TrackImg.css";

export function TrackImg() {
  return (
    <>
      <div id="track-img">
        <img src={TrackLogo} alt="Track Logo" />
      </div>
    </>
  );
}
