import '../assets/styles/SearchBar.css';
import { useNavigate } from 'react-router-dom';
export default function SearchBar() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Handle form data here (e.g., send it to a server)
    
        // Navigate to the success page
        navigate('/search');
      };
    return (
        <>
        <form className="nav-search-bar" id="search-form" onSubmit={handleSubmit}>
            <select id="nav-select-category" name="type">
                <option className="type" value="track,artist,album,playlist,show,episode" selected>All Categories</option>
                <option className="type" value="track">Songs</option>
                <option className="type" value="artist">Artists</option>
                <option className="type" value="album">Albums</option>
                <option className="type" value="playlist">Playlists</option>
            </select>
            <input id="nav-input-bar" type="text" placeholder="Search to match your mood..." size="37" maxLength="90"
                minLength="1" spellCheck="false" required name="q" />
            <button id="nav-search-button">
                <i className="fas fa-search"></i>
            </button>
        </form>
        </>
    );
}
