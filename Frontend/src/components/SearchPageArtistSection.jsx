import React from 'react';
import '../assets/styles/Section.css';
import { SectionName, SectionNameLoad } from './SectionName.jsx';
import { SectionCard, SectionCardLoad } from './SectionCard.jsx';
import ProfilePic from "../assets/media/profile-pic.png";

export default function SearchPageArtistSection(props) {
    return (
        <section className="section">
            <SectionName iconClass={props.iconClass} iconId={props.iconId} name={props.name} />
            <div className="material" draggable="true">
                {props.data.map((item) => (
                    <SectionCard
                        key={item.id}
                        imgSrc={item.images && item.images.length > 0 ? item.images[0].url : ProfilePic}
                        cardName={item.name}
                        cardStat={
                            <span>
                                <p className="card-stat-2">{`Trend-Score: ${item.popularity}/100`}</p>
                            </span>
                        }
                        followers={item.followers ? item.followers.total : 0}  
                        cardType ="artist"
                        cardId={item.id}
                    />
                ))}
            </div>
        </section>
    );
}
