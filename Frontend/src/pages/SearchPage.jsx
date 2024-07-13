import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionLoading from "../components/SectionLoading";
import { getSearchResult } from "../apis/apiFunctions";
import SearchPageTrackSection from "../components/SearchPageTrackSection";
import SearchPageArtistSection from "../components/SearchPageArtistSection";
import SearchPageAlbumSection from "../components/SearchPageAlbumSection";
import SearchPagePlaylistSection from "../components/SearchPagePlaylistSection";

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const abortControllerRef = useRef(null);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');
    const searchType = searchParams.get('type');

    useEffect(() => {
        setQuery(searchQuery || '');
        setType(searchType || '');
    }, [searchQuery, searchType]);

    useEffect(() => {
        const fetchData = async () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort(); // Cancel the previous request
            }

            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            setLoading(true);
            setSearchResult(null);

            try {
                const data = await getSearchResult(query, type, { signal: abortController.signal });
                if (type === "track,artist,album,playlist,show,episode") {
                    const result = {
                        topResult: data.tracks?.items?.[0] ? [data.tracks.items[0]] : [],
                        otherResult: data.tracks?.items?.slice(1) || [],
                        artistResult: data.artists?.items?.slice(0, 8) || [],
                        albumResult: data.albums?.items?.slice(0, 8) || [],
                        playlistResult: data.playlists?.items?.slice(0, 8) || []
                    };
                    setSearchResult(result);
                } else {
                    setSearchResult({
                        topResult: data[`${type}s`]?.items?.[0] ? [data[`${type}s`].items[0]] : [],
                        otherResult: data[`${type}s`]?.items?.slice(1) || []
                    });
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching search results:', error);
                }
            } finally {
                setLoading(false);
            }
        };

        if (query && type) {
            fetchData();
        }

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [query, type]);

    useEffect(() => {
        // Clear search results when query or type changes
        setSearchResult(null);
    }, [query, type]);

    if (loading) {
        return (
            <>
                <SectionLoading />
                <SectionLoading />
                <SectionLoading />
            </>
        );
    }

    const renderSection = (Component, name, data) => (
        <>
            {data.topResult.length > 0 && (
                <Component
                    iconClass="fa-solid fa-arrow-trend-up"
                    iconId="trend-icon"
                    name=" Top Search Result"
                    data={data.topResult}
                />
            )}
            {data.otherResult.length > 0 && (
                <Component
                    iconClass="fa-brands fa-artstation"
                    iconId="artstation-icon"
                    name=" Other Related Results"
                    data={data.otherResult}
                />
            )}
        </>
    );

    switch (type) {
        case "track":
            return renderSection(SearchPageTrackSection, "Tracks", searchResult || { topResult: [], otherResult: [] });
        case "artist":
            return renderSection(SearchPageArtistSection, "Artists", searchResult || { topResult: [], otherResult: [] });
        case "album":
            return renderSection(SearchPageAlbumSection, "Albums", searchResult || { topResult: [], otherResult: [] });
        case "playlist":
            return renderSection(SearchPagePlaylistSection, "Playlists", searchResult || { topResult: [], otherResult: [] });
        default:
            return (
                <>
                    {searchResult && searchResult.topResult && searchResult.topResult.length > 0 && (
                        <SearchPageTrackSection
                            iconClass="fa-solid fa-arrow-trend-up"
                            iconId="trend-icon"
                            name=" Top Search Result"
                            data={searchResult.topResult}
                        />
                    )}
                    {searchResult && searchResult.otherResult && searchResult.otherResult.length > 0 && (
                        <SearchPageTrackSection
                            iconClass="fa-brands fa-artstation"
                            iconId="artstation-icon"
                            name=" Other Related Results"
                            data={searchResult.otherResult}
                        />
                    )}
                    {searchResult && searchResult.artistResult && searchResult.artistResult.length > 0 && (
                        <SearchPageArtistSection
                            iconClass="fa-brands fa-artstation"
                            iconId="artstation-icon"
                            name=' "Artists" Related To Your Search'
                            data={searchResult.artistResult}
                        />
                    )}
                    {searchResult && searchResult.albumResult && searchResult.albumResult.length > 0 && (
                        <SearchPageAlbumSection
                            iconClass="fa-brands fa-artstation"
                            iconId="artstation-icon"
                            name=' "Albums" Related To Your Search'
                            data={searchResult.albumResult}
                        />
                    )}
                    {searchResult && searchResult.playlistResult && searchResult.playlistResult.length > 0 && (
                        <SearchPagePlaylistSection
                            iconClass="fa-brands fa-artstation"
                            iconId="artstation-icon"
                            name=' "Playlists" Related To Your Search'
                            data={searchResult.playlistResult}
                        />
                    )}
                </>
            );
    }
}
