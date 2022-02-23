import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Home, About, Posts } from "./pages";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {
  const [stars, setStars] = useState(true);
  return (
    <Router>
      <div className={stars ? "App full-height" : "App"}>
        {stars && (
          <>
            <div id="stars"></div>
            <div id="stars2"></div>
          </>
        )}
        <nav>
          <Link to="/">
            <img id="logo" src="nl.png" alt="nl" />
          </Link>
          <div className="link-group">
            <Link to="/" className="link-border right-link">
              Home
            </Link>
            <Link to="/about" className="right-link">
              About
            </Link>
            <Link to="/posts" className="link-border right-link">
              Posts
            </Link>
          </div>
        </nav>
        <main className={stars ? "" : "posts"}>
          <Routes>
            <Route path="/" element={<Home setStars={setStars} />} />
            <Route path="/about" element={<About setStars={setStars} />} />
            <Route path="/posts/*" element={<Posts setStars={setStars} />} />
          </Routes>
        </main>
      </div>

      {!stars && (
        <footer>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/natalie-lane-893170a0/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/nlane/" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </footer>
      )}
    </Router>
  );
}

export default App;
