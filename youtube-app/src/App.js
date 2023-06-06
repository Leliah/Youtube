import Navbar from "./components/Navbar"
import About from "./components/About"
import SearchBar from "./components/Searchbar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [allVid, setAllVid] = useState({});

  return (
    <div className="App">

      <Navbar />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchTitle={setSearchTitle}
        setMaxResults={setMaxResults}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route/>
       

      </Routes>

    </div>
  );
}

export default App;