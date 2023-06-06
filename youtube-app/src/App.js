import Home from './components/Home';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import VideoPage from './components/VideoPage';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
    
        <Route exact path="/" element={<Home/>} />
        <Route path="/video/:videoId" element={<VideoPage/>} />
  
    </Routes>
    </div>
  );
}

export default App;
