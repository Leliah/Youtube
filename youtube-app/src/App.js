import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import {Route, Routes} from "react-router-dom"
import VideoPage from './components/VideoPage';
import React from 'react';
import './App.css';
import './About.css'
import './Home.css'
function App() {
  return (
   <>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/home" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
      </Routes>
      </div>
   </>
  );
}

export default App;







