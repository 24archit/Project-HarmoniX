import './assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import NavBar from './components/NavBar';
import LoginDialog from './components/LoginDialog';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import { getExpiryStatus } from './apis/apiFunctions';
import React, { useEffect, useState } from 'react';
import SearchPage from './pages/SearchPage';

function App() {
  const [expiryCode, setExpiryCode] = useState(0);

  useEffect(() => {
    const fetchExpiryStatus = async () => {
      try {
        const expiryStatus = await getExpiryStatus();
        setExpiryCode(expiryStatus);
      } catch (error) {
        console.error('Error fetching expiry status:', error);
        // Handle error, perhaps set a default expiryCode or show an error message
      }
    };

    fetchExpiryStatus();
  }, []);

  // Conditionally render based on expiryCode
  if (expiryCode === 0) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginDialog />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <NavBar />
          <Sidebar />
          <div className="content">
            <Routes>
              <Route exact path="/user/home" element={<main><HomePage /></main>} />
              <Route exact path="/user/search" element={<main><SearchPage /></main>} />
              <Route exact path="/user/artist/:id" element={<main><ArtistPage /></main>} />
            </Routes>
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}

export default App;
