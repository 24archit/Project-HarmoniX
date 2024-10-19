import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Section.css";
import { SectionName } from "./SectionName.jsx";
import { SectionCard } from "./SectionCard.jsx";
import TrackLogo from "../assets/media/Track-Logo.png";

export default function HomePagePlaylistTrackSection(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);

  // Update the number of slides to show based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 800) {
        setSlidesToShow(1.5);
      } else if (width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.data.length) % props.data.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diffX = touchStartX.current - currentX;

    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
  };

  return (
    <section className="section">
      <SectionName iconClass={props.iconClass} iconId={props.iconId} name={props.name} />
      <div className="slider-container" ref={sliderRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="track-cards" style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}>
          {props.data.map((item, index) => (
            <SectionCard
              key={item.track.id}
              imgSrc={item.track.album.images.length > 0 ? item.track.album.images[0].url : TrackLogo}
              iconClass={"fa-solid fa-play"}
              iconId={"play-btn"}
              cardName={item.track.album.name}
              cardId={item.track.id}
              cardType="track"
              setNewUrl={props.setNewUrl}
              cardStat={item.track.artists.map((artist, idx) => (
                <span key={artist.id}>
                  {artist.name}
                  {idx < item.track.artists.length - 1 ? ", " : ""}
                </span>
              ))}
              spotifyUrl={item.track.external_urls.spotify}
            />
          ))}
        </div>
        <button className="slider-btn next-btn" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
