import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Home, About, Posts } from './pages';


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <h1>Natalie Lane</h1>
        <div className="link-group">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
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
