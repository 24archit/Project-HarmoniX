import "../assets/styles/TrackLineCard.css";
import profilePic from "../assets/media/profile-pic.png";
import { Skeleton } from "@mui/material";
import prettyMilliseconds from "pretty-ms";
import { useState } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import spotifyLogo from "../assets/media/Spotify_logo.png";
export function TrackLineCard({
  imgSrc = profilePic,
  trackName,
  duration,
  trackRank,
  trackArtists,
  cardId,
  setNewUrl,
  spotifyUrl,
}) {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const handelOnClick = async () => {
    try {
      const link = await fetch(
        `https://harmonix-stream.vercel.app/getAudioLink?id=${cardId}`
      );
      const data = await link.json();
      setNewUrl(data);
    } catch {
      setNewUrl("");
      setAlertVisibility(true);
      console.error("Cannot SetUrl To Player");
    }
  };
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
        <div className="spotify-logo">
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Explore the content on Spotify"}
            title={"Explore the content on Spotify"}
          >
            <img src={spotifyLogo} alt="Spotify Logo" />
          </a>
        </div>
        <div className="Duration">
          <p>
            {prettyMilliseconds(duration, {
              colonNotation: true,
              secondsDecimalDigits: 0,
            })}
          </p>
        </div>
        <div className="track-play" onClick={handelOnClick}>
          <i className="fa-solid fa-play" id="play-btn"></i>
        </div>
        {alertVisibility && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }} // Adjusted anchorOrigin to top center
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.4rem",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={30}
          height={30}
          sx={{
            bgcolor: "rgba(71, 164, 211, 0.261)",
            borderRadius: "0.3rem",
            marginRight: "2rem",
          }}
        />
        <div className="Track-name">
          <p>
            <Skeleton
              variant="rectangular"
              width={950}
              height={30}
              sx={{
                bgcolor: "rgba(71, 164, 211, 0.261)",
                borderRadius: "0.3rem",
              }}
            />
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.4rem",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={30}
          height={30}
          sx={{
            bgcolor: "rgba(71, 164, 211, 0.261)",
            borderRadius: "0.3rem",
            marginRight: "2rem",
          }}
        />
        <div className="Track-name">
          <p>
            <Skeleton
              variant="rectangular"
              width={950}
              height={30}
              sx={{
                bgcolor: "rgba(71, 164, 211, 0.261)",
                borderRadius: "0.3rem",
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
