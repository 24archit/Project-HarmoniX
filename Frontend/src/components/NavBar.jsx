import React from 'react';
import '../assets/styles/NavBar.css'; 
import Logo from './Logo';
import SearchBar from './SearchBar';
import Logout from './LogoutBtn';
import ProfileBtn from './ProfileBtn';

export default function NavBar() {
    
    return (
        <nav className='nav-bar'>
            <Logo/>
            <SearchBar/>
            <ProfileBtn/>
            <Logout/>
        </nav> 
    );
}

