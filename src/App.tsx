import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Home, About, Posts } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
