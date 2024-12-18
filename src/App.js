import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import About from './pages/About'
import Menu from './pages/Menu'
import ConfirmedBooking from './pages/confirmedBooking';
import './App.css';
import UnderConstruction from './pages/construction';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/construction" element={<UnderConstruction />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
