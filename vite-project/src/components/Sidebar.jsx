import React, { useState, useEffect } from 'react';
import '../assets/styles/Sidebar.css';
import SideBarBtn from './SideBarBtn';
import { TrackImg } from './TrackImg';

export default function Sidebar({ onMenuToggle }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateMobileView = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setMenuOpen(false); // Reset the menu state on larger screens
        onMenuToggle(false); // Inform parent component to shift sections left
      }
    };
    updateMobileView();

    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, [onMenuToggle]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    onMenuToggle(!menuOpen); // Shift sections based on menu state
  };

  return (
    <>
      {isMobile ? (
        <button className="hamburger-btn" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      ) : (
        <nav className="sidebar">
          <SideBarBtn iconClass='fa-solid fa-house' iconId='home-icon' btnName=' Home' />
          <SideBarBtn iconClass='fa-solid fa-wand-magic-sparkles' iconId='AI-icon' btnName=' Create Using AI' />
          <SideBarBtn iconClass='' iconId='' btnName='Artists Feed' />
          <SideBarBtn iconClass='' iconId='' btnName='For You' />
          <SideBarBtn iconClass='' iconId='' btnName='Virtual Concerts' />
          <SideBarBtn iconClass='' iconId='' btnName='About' />
        </nav>
      )}

      {menuOpen && isMobile && (
        <nav className="mobile-sidebar">
          <SideBarBtn iconClass='fa-solid fa-house' iconId='home-icon' btnName=' Home' />
          <SideBarBtn iconClass='fa-solid fa-wand-magic-sparkles' iconId='AI-icon' btnName=' Create Using AI' />
          <SideBarBtn iconClass='' iconId='' btnName='Artists Feed' />
          <SideBarBtn iconClass='' iconId='' btnName='For You' />
          <SideBarBtn iconClass='' iconId='' btnName='Virtual Concerts' />
          <SideBarBtn iconClass='' iconId='' btnName='About' />
        </nav>
      )}
    </>
  );
}
