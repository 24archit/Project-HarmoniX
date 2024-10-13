import React, { useRef, useEffect } from 'react';
import '../assets/styles/Section.css';
import { SectionName } from './SectionName.jsx';
import { SectionCard } from './SectionCard.jsx';
import { Link } from 'react-router-dom';
import PlaylistIcon from "../assets/media/playlist-icon.png";

export default function SearchPageAlbumSection(props) {
    const scrollRef = useRef(null); // Ref to the scrollable div

    const handleScroll = (event) => {
        // Prevent the default vertical scrolling
        event.preventDefault();
        // Scroll horizontally based on the wheel delta
        scrollRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        const ref = scrollRef.current;

        // Add mouse wheel event listener
        if (ref) {
            ref.addEventListener('wheel', handleScroll);
        }

        // Cleanup function to remove event listener
        return () => {
            if (ref) {
                ref.removeEventListener('wheel', handleScroll);
            }
        };
    }, [scrollRef]); // Run effect when scrollRef changes

    return (
        <section className="section">
            <SectionName iconClass={props.iconClass} iconId={props.iconId} name={props.name} button={false} />
            <div className="material" ref={scrollRef} draggable="true">
                {props.data.map((item, idx) => (
                    <SectionCard
                        key={item.id}
                        imgSrc={item.images && item.images.length > 0 ? item.images[0].url : PlaylistIcon}
                        iconClass="fa-solid fa-link"
                        iconId="link-icon"
                        cardName={item.name}
                        cardStat={
                            <React.Fragment>
                                {item.artists && item.artists.length > 0 && item.artists.map((artist, idx) => (
                                    <span key={artist.id}>
                                        <Link to={`/user/artist/${artist.id}`} className="card-stat-links">{artist.name}</Link>
                                        {idx < item.artists.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </React.Fragment>
                        }
                        albumType={item.album_type}
                        cardType='album'
                        cardId={item.id}
                        spotifyUrl={item.external_urls.spotify}
                    />
                ))}
            </div>
        </section>
    );
}
