import React, { useEffect, useState } from 'react';
import PlaylistTrackSection from '../components/PlaylistTrackSection.jsx';
import SectionLoading from '../components/SectionLoading.jsx'
import { getTopTracksIndia, getTopTracksGlobal, getUserTopArtists } from '../apis/apiFunctions.js';
export default function HomePage() {
  const [topIndiaTracks, setTopIndiaTracks] = useState(null);
  const [topGlobalTracks, setTopGlobalTracks] = useState(null);
  const [userTopArtists, setuserTopArtists] = useState(null);
  try {
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
          console.error('Error fetching data:', error);
          // Handle error state if needed
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
          console.error('Error fetching data:', error);
          // Handle error state if needed
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
          console.error('Error fetching data:', error);
          // Handle error state if needed
        }
      };
      fetchData();
    }, []);
  }
  catch {
    alert("You Have to login Again because of some locally found issues and security resons..");
    window.location.href("http://localhost:2424/login");
    return;
  }
  return (
    <>
      {topIndiaTracks ? (
        <PlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Top Tracks: Live from India"
          data={topIndiaTracks}
        />
      ) : (
        <SectionLoading iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Top Tracks: Live from India" />
      )}

      {topGlobalTracks ? (
        <PlaylistTrackSection
          iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Sync: Global Top Tracks"
          data={topGlobalTracks}
        />
      ) : (
        <SectionLoading iconClass="fa-solid fa-arrow-trend-up"
          iconId="trend-icon"
          name=" Sync: Global Top Tracks" />
      )}

    </>
  );
}
