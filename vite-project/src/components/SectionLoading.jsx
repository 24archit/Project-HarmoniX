import React from 'react';
import '../assets/styles/SectionLoading.css';
import {SectionNameLoad} from './SectionName.jsx';
import {SectionCardLoad} from './SectionCard.jsx';

export default function Section(props) {
    return (
        <section className="section">
            <SectionNameLoad/>
            <div className="material" draggable="true">
                    <SectionCardLoad/>
                    <SectionCardLoad/>
                    <SectionCardLoad/>
                    <SectionCardLoad/>
                    <SectionCardLoad/>
                    <SectionCardLoad/>
                    <SectionCardLoad/>
            </div>
        </section>
    );
}