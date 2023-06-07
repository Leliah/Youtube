import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
// import Home from './components/Home';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); 

  function openNav() {
    document.getElementById('mySidepanel').style.width = '250px';
  }

  function closeNav() {
    document.getElementById('mySidepanel').style.width = '0';
  }

  function handleSearch(e) {
    e.preventDefault();
    const maxResults = 50; 
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchTerm}&key=AIzaSyBzmMCwn2zRWeuLVUO9dHrW_g6TiKU1MPo`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.items) {
          setSearchResults(response.items);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  function handleLinkClick(path) {
    navigate(path); 
    closeNav(); 
  }

  return (
    <>
      <nav className="navbar">
        <div className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/home" className="logo-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            className="logo"
            alt=""
          />
        </Link>
        <div className="user-options">
          <img src="img/video.PNG" className="icon" alt="" />
          <img src="img/grid.PNG" className="icon" alt="" />
          <img src="img/bell.PNG" className="icon" alt="" />
          <div className="user-dp">
            <img
              src="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
              alt=""
            />
          </div>
        </div>
        <form onSubmit={handleSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="search-icon" />
          </button>
        </form>

        <div id="mySidepanel" className="sidepanel">
          <a href='www.google.com' className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/home" onClick={() => handleLinkClick('/home')}>Home</Link>
          <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
        </div>

        <button className="openbtn" onClick={openNav}>
          &#9776;
        </button>
      </nav>

      {/* {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((video) => (
            <div key={video.id.videoId} className="search-result">
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              <h3>{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <Home />
      )} */}
      {searchResults.length > 0 && (
  <div className="search-results">
    {searchResults.map((video) => (
      <div key={video.id.videoId} className="search-result">
        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
        <h3>{video.snippet.title}</h3>
      </div>
    ))}
  </div>
)}
    </>
  );
}







