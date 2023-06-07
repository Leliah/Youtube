import Home from './components/Home';
import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VideoPage from './components/VideoListing';
import Video from './components/Video';
import About from './components/About';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
      <Header />
      <Routes>
        <Route exact path="*" element={<Home/>} />
        <Route path="/video/:id" element={<Video/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;







