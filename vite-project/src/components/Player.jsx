import React, { useState, useRef, useEffect, Suspense, useCallback } from 'react';
import prettyMilliseconds from 'pretty-ms';
import ReactPlayer from 'react-player/youtube'; // Importing YouTube specific react-player
import { Snackbar, Alert, AlertTitle} from '@mui/material';

import '../assets/styles/Player.css';

const Player = ({ url, setNewUrl }) => {
    const [volume, setVolume] = useState(0.8);
    const [playing, setPlaying] = useState(true);
    const [progress, setProgress] = useState(-1);
    const [duration, setDuration] = useState(0);
    const [volumeIcon, setVolumeIcon] = useState('fa-volume-high');
    const playerRef = useRef(null);
    const [alertVisibility, setAlertVisibility] = useState(false);

    const handleVisibilityChange = useCallback(() => {
        if (document.visibilityState === 'visible') {
            if (playing) {
                playerRef.current.seekTo(progress, 'fraction');
            }
        }
    }, [playing, progress]);

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [handleVisibilityChange]);

    useEffect(() => {
        if (url) {
            setAlertVisibility(false);
            playerRef.current.seekTo(0, 'seconds');
            setPlaying(true);
        }
    }, [url]);

    useEffect(() => {
        updateVolumeIcon(volume);
    }, [volume]);

    useEffect(() => {
        if (progress === 1) {
            setPlaying(false);
        }
    }, [progress]);

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        updateVolumeIcon(newVolume);
    };

    const togglePlayPause = () => {
        setPlaying(!playing);
    };

    const handleProgress = (state) => {
        setProgress(state.played);
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const handleSeekChange = (event) => {
        const newProgress = parseFloat(event.target.value);
        setProgress(newProgress);
        playerRef.current.seekTo(newProgress, 'fraction');
    };

    const playPrevious = () => {
        console.log('Previous button clicked');
    };

    const playNext = () => {
        console.log('Next button clicked');
    };

    const seekForward = () => {
        const newProgress = Math.min(progress + 10 / duration, 1);
        setProgress(newProgress);
        playerRef.current.seekTo(newProgress, 'fraction');
    };

    const seekBackward = () => {
        const newProgress = Math.max(progress - 10 / duration, 0);
        setProgress(newProgress);
        playerRef.current.seekTo(newProgress, 'fraction');
    };

    const updateVolumeIcon = (volume) => {
        const icon = volume === 0 ? 'fa-volume-xmark' : (volume <= 0.5 ? 'fa-volume-low' : 'fa-volume-high');
        setVolumeIcon(icon);
    };

    const onReady = () => {
        // Handle any ready actions if needed
    };

    const handlePlayerError = (error) => {
        console.error('Error playing video:', error);
        setAlertVisibility(true);
        setNewUrl("");
        setProgress(0);
    };

    return (
        <>
            
            <div className='player'>
                <button className='prev-btn' onClick={playPrevious}>
                    <i className="fa-solid fa-backward-step"></i>
                </button>
                <button className='play-pause-btn' onClick={togglePlayPause}>
                    {playing && progress !== 1 && url ? <i className="fa-solid fa-pause icon"></i> : <i className="fa-solid fa-play icon"></i>}
                </button>
                <button className='next-btn' onClick={playNext}>
                    <i className="fa-solid fa-forward-step"></i>
                </button>
                <input
                    type='range'
                    min={0}
                    max={1}
                    step='0.01'
                    value={progress}
                    onChange={handleSeekChange}
                />
                <button className='backward-btn' onClick={seekBackward}>
                    <i className="fa-solid fa-backward"></i>
                </button>
                <span className='duration-board'>
                    {prettyMilliseconds((Math.floor(progress * duration)) * 1000, { colonNotation: true, secondsDecimalDigits: 0 })} | {prettyMilliseconds((Math.floor(duration)) * 1000, { colonNotation: true, secondsDecimalDigits: 0 })}
                </span>
                <button className='forward-btn' onClick={seekForward}>
                    <i className="fa-solid fa-forward"></i>
                </button>
                <i className={`fa-solid ${volumeIcon} volume-icon`}></i>
                <input
                    type='range'
                    min={0}
                    max={1}
                    step='0.01'
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {url && (
                    <ReactPlayer
                        ref={playerRef}
                        url={url}
                        playing={playing}
                        volume={volume}
                        muted={false} // Ensure muted is set to false for audio to play
                        width='0px'
                        height='0px'
                        config={{
                            youtube: {
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    modestbranding: 1,
                                    origin: window.location.origin,
                                    disableRemotePlayback: 1,
                                }
                            }
                        }}
                        onProgress={handleProgress}
                        onDuration={handleDuration}
                        onReady={onReady}
                        onError={handlePlayerError}
                    />
                )}
            </Suspense>
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
        </>
    );
};

export default Player;
