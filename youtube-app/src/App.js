import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VideoPage from './components/VideoListing';
import Video from './components/Video';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/video/:id" element={<Video/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
