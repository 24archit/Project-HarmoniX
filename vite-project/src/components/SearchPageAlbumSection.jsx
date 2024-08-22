import React from 'react';
import '../assets/styles/Section.css';
import { SectionName, SectionNameLoad } from './SectionName.jsx';
import { SectionCard, SectionCardLoad } from './SectionCard.jsx';
import { Link } from 'react-router-dom';
import PlaylistIcon from "../assets/media/playlist-icon.png"

export default function SearchPageAlbumSection(props) {
    return (
        <section className="section">
            <SectionName iconClass={props.iconClass} iconId={props.iconId} name={props.name} />
            <div className="material" draggable="true">
                {props.data.map((item, idx) => (
                    <SectionCard
                        key={item.id}
                        imgSrc={item.images && item.images.length > 0 ? item.images[0].url : PlaylistIcon}
                        iconClass="fa-solid fa-link"
                        iconId="link-icon"
                        cardName={item.name}
                        cardStat={
                            <React.Fragment>
                                {item.artists && item.artists.length > 0 && item.artists.map((artist, idx) => (
                                    <span key={artist.id}>
                                        <Link to={`/user/artist/${artist.id}`} className="card-stat-links">{artist.name}</Link>
                                        {idx < item.artists.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </React.Fragment>
                        }
                        albumType={item.album_type}
                        cardType='album'
                        cardId={item.id}
                    />
                ))}
            </div>
        </section>
    );
}
