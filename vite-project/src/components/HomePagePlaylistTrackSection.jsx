import React, { useRef } from "react";
import "../assets/styles/Section.css";
import { SectionName } from "./SectionName.jsx";
import { SectionCard } from "./SectionCard.jsx";
import { Link } from "react-router-dom";
import TrackLogo from "../assets/media/Track-Logo.png";
import Slider from "react-slick";

export default function HomePagePlaylistTrackSection(props) {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="section">
      <SectionName
        iconClass={props.iconClass}
        iconId={props.iconId}
        name={props.name}
      />
      <div className="material-2">
        <Slider {...settings} >
          {props.data.map((item) => (
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
                <React.Fragment>
                  {item.track.artists.map((artist, idx) => (
                    <span key={artist.id}>
                      <Link
                        to={`/user/artist/${artist.id}`}
                        className={"card-stat-links"}
                      >
                        {artist.name}
                      </Link>
                      {idx < item.track.artists.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </React.Fragment>
              }
              spotifyUrl={item.track.external_urls.spotify}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
