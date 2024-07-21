import "../assets/styles/TrackLineCard.css"
import profilePic from '../assets/media/profile-pic.png';
import { Skeleton } from "@mui/material";
import prettyMilliseconds from 'pretty-ms';
import { useState } from "react";
import { Snackbar, Alert, AlertTitle } from '@mui/material';
export function TrackLineCard({
    imgSrc = profilePic,
    trackName,
    duration,
    trackRank,
    trackArtists,
    cardId,
    setNewUrl
}) {
    const [alertVisibility, setAlertVisibility] = useState(false);
    const handelOnClick = async () => {
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
    }
    return (
        <>
            <div className="track-line-card">
                <div className="track-rank">
                    <p>#{trackRank}</p>
                </div>
                <img src={imgSrc} alt="1"></img>
                <div className="Track-name">
                    <p>{trackName}</p>
                </div>
                <div className="Track-artists-name">
                    <p>{trackArtists}</p>
                </div>
                <div className="Duration">
                    <p>{prettyMilliseconds(duration, { colonNotation: true, secondsDecimalDigits: 0 })}</p>
                </div>
                <div className="track-play" onClick={handelOnClick}>
                    <i className="fa-solid fa-play" id="play-btn"></i>
                </div>
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
        </>
    );
}
export function TrackLineCardLoad() {
    return (
        <>
            <div style={{
                display: 'flex', alignItems: 'center',
                padding: '0.4rem'
            }}>
                <Skeleton variant="rectangular" width={30} height={30} sx={{
                    bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '0.3rem', marginRight: '2rem'
                }} />
                <div className="Track-name">
                    <p><Skeleton variant="rectangular" width={950} height={30} sx={{ bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '0.3rem' }} /></p>
                </div>
            </div>
            <div style={{
                display: 'flex', alignItems: 'center',
                padding: '0.4rem'
            }}>
                <Skeleton variant="rectangular" width={30} height={30} sx={{
                    bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '0.3rem', marginRight: '2rem'
                }} />
                <div className="Track-name">
                    <p><Skeleton variant="rectangular" width={950} height={30} sx={{ bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '0.3rem' }} /></p>
                </div>
            </div>
        </>
    );
}