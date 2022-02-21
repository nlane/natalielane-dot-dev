import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Home, About, Posts } from "./pages";

// can control here the className "App" (has hidden overflow and stuff)
// and can control here if the stars render
// useState that gets triggered when you go to the posts page or get turned back on if you go home
function App() {
  const [stars, setStars] = useState(true);
  return (
    <Router>
      <div className="App">
        {stars && (
          <>
            <div id="stars"></div>
            <div id="stars2"></div>
          </>
        )}
        <nav>
          <span id="logo">Natalie Lane</span>
          <div className="link-group">
            <Link to="/" className="link-border">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/posts" className="link-border">
              Posts
            </Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home setStars={setStars} />} />
            <Route path="/about" element={<About setStars={setStars} />} />
            <Route path="/posts" element={<Posts setStars={setStars} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
