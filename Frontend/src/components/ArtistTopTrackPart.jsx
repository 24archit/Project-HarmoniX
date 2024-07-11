import "../assets/styles/ArtistTopTrackPart.css"
import {TrackLineCard, TrackLineCardLoad} from "./TrackLineCard";
import { Link } from 'react-router-dom';
import React from 'react';  
export  function ArtistTopTrackPart(props) {
    return (
        <div className="artist-top-track-container">
            {props.data.map((item, index)=>(
                <TrackLineCard
                key={index}
                imgSrc={item.album.images[0].url}
                trackName={item.name}
                trackRank={index+1}
                duration={item.duration_ms}
                trackArtists={<React.Fragment>
                    {item.artists.map((artist, idx) => (
                        <span key={artist.id}>
                            <Link to={`/user/artist/${artist.id}`} className="card-stat-links">{artist.name}</Link>
                            {idx < item.artists.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </React.Fragment>}
                />
            ))}
        </div>
    );
}
export function ArtistTopTrackPartLoad({
}) {
    return (
        <div className="artist-top-track-container">
            <TrackLineCardLoad />
            <TrackLineCardLoad />
            <TrackLineCardLoad />
            <TrackLineCardLoad />
        </div>
    );
}