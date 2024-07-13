import React, { useEffect, useState } from 'react';
import HomePagePlaylistTrackSection from '../components/HomePagePlaylistTrackSection.jsx';
import SectionLoading from '../components/SectionLoading.jsx';
import { getTopTracksIndia, getTopTracksGlobal, getUserTopArtists } from '../apis/apiFunctions.js';

export default function HomePage() {
  const [topIndiaTracks, setTopIndiaTracks] = useState(null);
  const [topGlobalTracks, setTopGlobalTracks] = useState(null);
  const [userTopArtists, setuserTopArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopTracksIndia();
        console.log(data);
        const newArr = data.tracks.items.slice(0, 12);
        setTimeout(() => {
          setTopIndiaTracks(newArr);
        }, 1000);
      } catch (error) {
        console.error('Error fetching top tracks from India:', error);
        alert("We're experiencing some issues with fetching data. Check your Internet Connection and please log in again.");
        window.location.href = "/login";
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopTracksGlobal();
        console.log(data);
        const newArr = data.tracks.items.slice(0, 12);
        setTimeout(() => {
          setTopGlobalTracks(newArr);
        }, 1000);
      } catch (error) {
        console.error('Error fetching global top tracks:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserTopArtists(12);
        console.log(data);
        // const newArr = data.tracks.items.slice(0, 12);
        // setTopGlobalTracks(newArr);
      } catch (error) {
        console.error('Error fetching user top artists:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {topIndiaTracks ? (
        <HomePagePlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Top Tracks: Live from India"
          data={topIndiaTracks}
        />
      ) : (
        <SectionLoading
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Top Tracks: Live from India"
        />
      )}

      {topGlobalTracks ? (
        <HomePagePlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Sync: Global Top Tracks"
          data={topGlobalTracks}
        />
      ) : (
        <SectionLoading
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Sync: Global Top Tracks"
        />
      )}
    </>
  );
}
