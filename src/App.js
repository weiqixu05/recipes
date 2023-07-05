import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './frontend/pages/About/About.jsx';
import Collection from './frontend/pages/Collection/Collection.jsx';
import Navbar from './frontend/components/Navbar/Navbar.jsx';
import Search from './frontend/pages/Search/Search.jsx';


export default function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
    </Router>
  );
}
