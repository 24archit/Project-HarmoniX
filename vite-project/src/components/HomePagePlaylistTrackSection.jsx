import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Section.css";
import { SectionName } from "./SectionName.jsx";
import { SectionCard } from "./SectionCard.jsx";
import TrackLogo from "../assets/media/Track-Logo.png";

export default function HomePagePlaylistTrackSection(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);

  // Adjust the number of slides to show based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSlidesToShow(1.5); // Show 1.5 cards on mobile
      } else if (width <= 1024) {
        setSlidesToShow(3); // Show 3 cards on tablets
      } else {
        setSlidesToShow(5); // Show 5 cards on larger screens
      }
    };

    const updateCardWidth = () => {
      if (sliderRef.current) {
        setCardWidth(sliderRef.current.offsetWidth / slidesToShow);
      }
    };

    updateSlidesToShow();
    updateCardWidth();
    window.addEventListener("resize", updateSlidesToShow);
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % props.data.length // Circular slider logic
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + props.data.length) % props.data.length // Circular slider logic
    );
  };

  const visibleTracks = props.data.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <section className="section">
      <SectionName
        iconClass={props.iconClass}
        iconId={props.iconId}
        name={props.name}
      />
      <div className="slider-container" ref={sliderRef}>
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="track-cards" style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
          {props.data.map((item, index) => (
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
