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

  // Touch event state
  const [startX, setStartX] = useState(null);

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
    setCurrentIndex((prevIndex) => {
      if (prevIndex + slidesToShow >= props.data.length) {
        return 0; // Wrap to the start
      }
      return prevIndex + slidesToShow;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(props.data.length - slidesToShow, 0); // Go to the last set of cards
      }
      return prevIndex - slidesToShow;
    });
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      handleNext();
      setStartX(null); // Reset
    } else if (diffX < -50) {
      handlePrev();
      setStartX(null); // Reset
    }
  };

  const visibleTracks = props.data.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  return (
    <section className="section">
      <SectionName
        iconClass={props.iconClass}
        iconId={props.iconId}
        name={props.name}
      />
      <div
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button className="slider-btn prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="track-cards" style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
          {visibleTracks.map((item) => (
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
