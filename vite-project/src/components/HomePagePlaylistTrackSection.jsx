import React, { useState, useEffect } from "react";
import "../assets/styles/Section.css";
import { SectionName } from "./SectionName.jsx";
import { SectionCard } from "./SectionCard.jsx";
import TrackLogo from "../assets/media/Track-Logo.png";

export default function HomePagePlaylistTrackSection(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  // Adjust slidesToShow based on window width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSlidesToShow(1);
      } else if (width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow < props.data.length ? prevIndex + slidesToShow : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow >= 0 ? prevIndex - slidesToShow : 0));
  };

  const visibleTracks = props.data.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <section className="section">
      <SectionName
        iconClass={props.iconClass}
        iconId={props.iconId}
        name={props.name}
      />
      <div className="slider-container">
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="track-cards">
          {visibleTracks.map((item) => (
            <SectionCard
              key={item.track.id}
              imgSrc={
                item.track.album.images.length > 0
                  ? item.track.album.images[0].url
                  : TrackLogo
              }
              iconClass={"fa-solid fa-play"}
              iconId={"play-btn"}
              cardName={item.track.album.name}
              cardId={item.track.id}
              cardType="track"
              setNewUrl={props.setNewUrl}
              cardStat={
                <>
                  {item.track.artists.map((artist, idx) => (
                    <span key={artist.id}>
                      {artist.name}
                      {idx < item.track.artists.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </>
              }
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
