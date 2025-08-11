import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Hadith from './pages/Hadith';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <header style={{ padding: '10px', background: '#0d6efd', color: '#fff' }}>
        <h1>Noor Aur Dunya</h1>
        <nav>
          <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
          <Link to="/quran" style={{ color: '#fff', marginRight: '10px' }}>Quran</Link>
          <Link to="/hadith" style={{ color: '#fff', marginRight: '10px' }}>Hadith</Link>
          <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/hadith" element={<Hadith />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
