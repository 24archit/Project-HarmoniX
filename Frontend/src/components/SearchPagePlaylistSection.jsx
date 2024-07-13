import React from 'react';
import '../assets/styles/Section.css';
import { SectionName, SectionNameLoad } from './SectionName.jsx';
import { SectionCard, SectionCardLoad } from './SectionCard.jsx';
import { Link } from 'react-router-dom';
import PlaylistIcon from "../assets/media/playlist-icon.png";

export default function SearchPagePlaylistSection({
    iconClass,
    iconId,
    name,
    data = []
}) {
    return (
        <section className="section">
            <SectionName iconClass={iconClass} iconId={iconId} name={name} />
            <div className="material" draggable="true">
                {data.map((item) => (
                    <SectionCard
                        key={item.id}
                        imgSrc={item.images && item.images.length > 0 ? item.images[0].url : PlaylistIcon}
                        iconClass="fa-solid fa-link"
                        iconId="link-icon"
                        cardName={item.name}
                        cardStat={
                            !item.collaborative ? (
                                <span>
                                    {item.owner && (
                                        <Link to={`/user/spotifyuser/profile/${item.owner.id}`} className="card-stat-links">
                                            {item.owner.display_name}
                                        </Link>
                                    )}
                                </span>
                            ) : (
                                <span>
                                    <p className="card-stat-2">Playlist</p>
                                </span>
                            )
                        }
                    />
                ))}
            </div>
        </section>
    );
}
