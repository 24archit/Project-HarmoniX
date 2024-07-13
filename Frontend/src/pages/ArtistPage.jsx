import { useEffect, useState } from 'react';
import { ArtistMainInfo, ArtistMainInfoLoad } from "../components/ArtistMainInfo.jsx";
import "../assets/styles/ArtistPage.css";
import { ArtistTopTrackPart, ArtistTopTrackPartLoad } from "../components/ArtistTopTrackPart.jsx";
import { getArtistData, getArtistTopTracks, getArtistAlbums } from '../apis/apiFunctions.js';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import defaultProfilePic from '../assets/media/profile-pic.png';
import { SectionCard, SectionCardLoad } from "../components/SectionCard.jsx"
import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtistPage() {
    const { id } = useParams();
    const [ArtistData, setArtistData] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState("topTracks");
    const [ArtistTopTracks, setArtistTopTracks] = useState(null);
    const [ArtistAlbums, setArtistAlbums] = useState(null);

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                const data = await getArtistData(id);
                console.log(data);
                setTimeout(() => {
                    setArtistData(data);
                }, 1000);
            } catch (error) {
                console.error('Error fetching artist data:', error);
                alert("You have to login again due to some locally found issues and security reasons.");
                window.location.href = "http://localhost:2424/login";
            }
        };

        fetchArtistData();

        return () => {
            setArtistData(null); // Cleanup function to reset artist data
        };
    }, [id]);

    useEffect(() => {
        const fetchTopTracks = async () => {
            try {
                const data = await getArtistTopTracks(id);
                console.log(data);
                setTimeout(() => {
                    setArtistTopTracks(data.tracks);
                }, 1000);
            } catch (error) {
                console.error('Error fetching top tracks:', error);
            }
        };

        fetchTopTracks();

        return () => {
            setArtistTopTracks(null); // Cleanup function to reset top tracks data
        };
    }, [id]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const data = await getArtistAlbums(id);
                console.log(data);
                setTimeout(() => {
                    setArtistAlbums(data.items);
                }, 1000);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();

        return () => {
            setArtistAlbums(null); // Cleanup function to reset albums data
        };
    }, [id]);

    return (
        <div className="artist-page-bg" draggable="true">
            {ArtistData ? (
                <>
                    <ArtistMainInfo
                        artistName={ArtistData.name}
                        followers={ArtistData.followers.total}
                        trendScore={ArtistData.popularity}
                        img={ArtistData.images.length > 0 ? ArtistData.images[0].url : defaultProfilePic}
                    />
                    <div className="buttons-container">
                        <button
                            className={selectedBtn === "topTracks" ? "btn selected" : "btn"}
                            onClick={() => setSelectedBtn("topTracks")}
                        >
                            Top Tracks
                        </button>
                        <button
                            className={selectedBtn === "albums" ? "btn selected" : "btn"}
                            onClick={() => setSelectedBtn("albums")}
                            style={{ marginLeft: '2rem' }}
                        >
                            Albums
                        </button>
                    </div>
                    <hr className="custom-hr" />
                </>
            ) : (
                <>
                    <ArtistMainInfoLoad />
                    <div className="buttons-container">
                        <Skeleton variant="rectangular" width={190} height={40} sx={{ marginTop: '1.3rem', bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '2rem' }} animation='wave' />
                        <Skeleton variant="rectangular" width={190} height={40} sx={{ marginTop: '1.3rem', bgcolor: 'rgba(71, 164, 211, 0.261)', borderRadius: '2rem' }} animation='wave' />
                    </div>
                </>
            )}
            {selectedBtn === "topTracks" ? (
                ArtistTopTracks ? <ArtistTopTrackPart data={ArtistTopTracks} /> : <ArtistTopTrackPartLoad />
            ) : (
                <>
                    <div className="material">
                        {ArtistAlbums ? (
                            ArtistAlbums.map((item, index) => (
                                <SectionCard
                                    key={index}
                                    imgSrc={item.images[0]?.url || defaultProfilePic}
                                    cardName={item.name}
                                    cardStat={
                                        <React.Fragment>
                                            {item.artists.map((artist, idx) => (
                                                <span key={artist.id}>
                                                    <Link to={`/user/artist/${artist.id}`} className={"card-stat-links"}>{artist.name}</Link>
                                                    {idx < item.artists.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </React.Fragment>
                                    }
                                    albumType={item.album_type}
                                />
                            ))
                        ) : (
                            <>
                                <SectionCardLoad />
                                <SectionCardLoad />
                                <SectionCardLoad />
                                <SectionCardLoad />
                                <SectionCardLoad />
                                <SectionCardLoad />
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
