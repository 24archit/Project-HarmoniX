import React, { useEffect, useState } from 'react';
import HomePagePlaylistTrackSection from '../components/HomePagePlaylistTrackSection.jsx';
import SectionLoading from '../components/SectionLoading.jsx';
import { getTopTracksIndia, getTopTracksGlobal, getUserTopArtists } from '../apis/apiFunctions.js';

export default function HomePage({ setNewUrl }) {
  const [topIndiaTracks, setTopIndiaTracks] = useState([]);
  const [topGlobalTracks, setTopGlobalTracks] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);

  const fetchTracks = async (fetchFunction, setTracks) => {
    try {
      const data = await fetchFunction();
      const newArr = data.tracks.items;
      setTracks(newArr);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert("We're experiencing some issues with fetching data. Check your Internet Connection and please log in again.");
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    fetchTracks(getTopTracksIndia, setTopIndiaTracks);
  }, []);

  useEffect(() => {
    fetchTracks(getTopTracksGlobal, setTopGlobalTracks);
  }, []);

  useEffect(() => {
    const fetchUserTopArtists = async () => {
      try {
        const data = await getUserTopArtists(12);
        setUserTopArtists(data.items);
      } catch (error) {
        console.error('Error fetching user top artists:', error);
      }
    };
    fetchUserTopArtists();
  }, []);

  const handleMoreClick = (setTracks, tracks, visibleCount) => {
    setTracks(tracks.slice(0, visibleCount + 12));
  };

  return (
    <>
      {topIndiaTracks.length ? (
        <HomePagePlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name="Top Tracks: Live from India"
          data={topIndiaTracks.slice(0, 12)}
          setNewUrl={setNewUrl}
          showMore={topIndiaTracks.length > 12}
          onMoreClick={() => handleMoreClick(setTopIndiaTracks, topIndiaTracks, 12)}
        />
      ) : (
        <SectionLoading
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name="Top Tracks: Live from India"
          setNewUrl={setNewUrl}
        />
      )}

      {topGlobalTracks.length ? (
        <HomePagePlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name="Sync: Global Top Tracks"
          data={topGlobalTracks.slice(0, 12)}
          setNewUrl={setNewUrl}
          showMore={topGlobalTracks.length > 12}
          onMoreClick={() => handleMoreClick(setTopGlobalTracks, topGlobalTracks, 12)}
        />
      ) : (
        <SectionLoading
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name="Sync: Global Top Tracks"
          setNewUrl={setNewUrl}
        />
      )}
    </>
  );
}
