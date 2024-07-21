import React from 'react';
import '../assets/styles/Card.css';
import TrackLogo from '../assets/media/Track-Logo.png';
import { Skeleton } from '@mui/material';
import { format } from "indian-number-format";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Snackbar, Alert, AlertTitle} from '@mui/material';
export function SectionCard({
    imgSrc = TrackLogo,
    cardName = 'Loading..',
    cardStat = 'Please Wait..',
    iconClass = "fa-solid fa-link",
    iconId = "link-btn",
    albumType = "",
    followers = "",
    cardType = "",
    cardId = "",
    setNewUrl
}) {
    const [alertVisibility, setAlertVisibility] = useState(false);
    const navigate = useNavigate();
    const handelOnClick = async () => {
        if (cardType === "track") {
            try {
                console.log(cardId);
                const link = await fetch(`http://localhost:2424/getAudioLink?id=${cardId}`);
                const data = await link.json();
                console.log(data);
                setNewUrl(data);
                console.log("Hi");
            }
            catch {
                setNewUrl('');
                setAlertVisibility(true);
                console.error("Cannot SetUrl To Player");
            }
        } else {
            navigate(`/user/${cardType}/${cardId}`);
        }
    }
    return (
        <div className="card">
            <div className='card-details'>
                <img src={imgSrc} alt="img1" draggable="true" style={cardType === "artist" ? { borderRadius: '50%' } : {}} />
                <p className="card-name">{cardName}</p>
                {albumType && (
                    <span className="card-stat-3">
                        <p>{albumType === "album" ? "Album" : "Single"}</p>
                    </span>
                )}
                {followers && (
                    <span className="card-stat-3">
                        <p>{`${format(followers)} Followers`}</p>
                    </span>
                )}
                <p className="card-stat">{cardStat}</p>
            </div>
            <button className="play-btn india-track-play-btn" onClick={handelOnClick}>
                <i className={iconClass} id={iconId}></i>
            </button>
            {alertVisibility && (
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Adjusted anchorOrigin to top center
                    autoHideDuration={6000}
                    open={alertVisibility}
                    onClose={() => setAlertVisibility(false)}
                    disableEscapeKeyDown={true}
                    disableBackdropClick={true}
                >
                    <Alert variant="filled" severity="error">
                        <AlertTitle>Track Unavailable</AlertTitle>
                        Sorry, this track is currently unavailable.
                    </Alert>
                </Snackbar>
            )}
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
