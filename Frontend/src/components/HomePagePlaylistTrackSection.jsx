import React from 'react';
import '../assets/styles/Section.css';
import {SectionName, SectionNameLoad} from './SectionName.jsx';
import {SectionCard, SectionCardLoad} from './SectionCard.jsx';
import { Link } from 'react-router-dom';
import TrackLogo from "../assets/media/Track-Logo.png"

export default function HomePagePlaylistTrackSection(props) {
    return (
        <section className="section">
            <SectionName iconClass={props.iconClass} iconId={props.iconId} name={props.name} />
            <div className="material" draggable="true">
                {props.data.map((item, index) => (
                    <SectionCard
                        key={index}
                        imgSrc={item.track.album.images.length>0 ? item.track.album.images[0].url : TrackLogo}
                        iconClass={"fa-solid fa-play"}
                        iconId={"play-btn"}
                        cardName={item.track.album.name}
                        cardStat={
                            <React.Fragment>
                                {item.track.artists.map((artist, idx) => (
                                    <span key={artist.id}>
                                        <Link to={`/user/artist/${artist.id}`} className={"card-stat-links"}>{artist.name}</Link>
                                        {idx < item.track.artists.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </React.Fragment>
                        }
                    />
                ))}
            </div>
        </section>
    );
}
