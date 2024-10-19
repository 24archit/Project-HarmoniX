import React, { useState, useEffect } from 'react';
import '../assets/styles/Sidebar.css';
import SideBarBtn from './SideBarBtn';
import { TrackImg } from './TrackImg';

export default function Sidebar({ onMenuToggle }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle mobile view state and reset menu if resized to larger screen
  useEffect(() => {
    const updateMobileView = () => {
      const isMobileView = window.innerWidth <= 800;
      setIsMobile(isMobileView);
      
      // If resized to desktop and menu was open, close it
      if (!isMobileView) {
        setMenuOpen(false); 
        if (typeof onMenuToggle === 'function') {
          onMenuToggle(false); // Inform parent component to shift layout when menu is closed
        }
      }
    };

    updateMobileView();

    window.addEventListener('resize', updateMobileView);
    return () => window.removeEventListener('resize', updateMobileView);
  }, [onMenuToggle]);

  // Handle menu toggle on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (typeof onMenuToggle === 'function') {
      onMenuToggle(!menuOpen); // Inform parent component when menu is opened or closed
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className="hamburger-btn" onClick={toggleMenu}>
            <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          {menuOpen && (
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
    </>
  );
}
