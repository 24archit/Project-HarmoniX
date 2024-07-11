import React from 'react';
import '../assets/styles/Card.css';
import TrackLogo from '../assets/media/Track-Logo.png';
import { Skeleton } from '@mui/material';

export function SectionCard({
    imgSrc = TrackLogo,
    cardName = 'Loading..',
    cardStat = 'Please Wait..',
    iconClass = "fa-solid fa-link",
    iconId = "link-btn",
    albumType = ""
}) {
    return (
        <div className="card">
            <div className='card-details'>
            <img src={imgSrc} alt="img1" draggable="true" />
            <p className="card-name">{cardName}</p>
            {albumType && (
                <span className="card-stat-2">
                    <p>{albumType === "album" ? "Album" : "Single"}</p>
                </span>
            )}
            <p className="card-stat">{cardStat}</p>
            </div>
            <button className="play-btn india-track-play-btn">
                <i className={iconClass} id={iconId}></i>
            </button>
        </div>
    );
}

export function SectionCardLoad() {
    return (
        <div className="card">
            <Skeleton
                variant="rectangular"
                width={200}
                height={200}
                sx={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    bgcolor: 'rgba(71, 164, 211, 0.261)',
                    borderRadius: '1rem'
                }}
                animation='wave'
            />
            <Skeleton
                variant="rectangular"
                width={200}
                height={20}
                sx={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    marginTop: '0.7rem',
                    bgcolor: 'rgba(71, 164, 211, 0.261)',
                    borderRadius: '1rem'
                }}
                animation='wave'
            />
            <Skeleton
                variant="rectangular"
                width={150}
                height={10}
                sx={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    marginTop: '0.7rem',
                    bgcolor: 'rgba(71, 164, 211, 0.261)',
                    borderRadius: '1rem',
                    alignSelf: "flex-start"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={100}
                height={10}
                sx={{
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    marginTop: '0.7rem',
                    bgcolor: 'rgba(71, 164, 211, 0.261)',
                    borderRadius: '1rem',
                    alignSelf: "flex-start",
                    marginBottom: "1rem"
                }}
            />
        </div>
    );
}
