import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home';
import ContactUs from './components/contact/contact';
import Beginner from './components/homepage/Levels/Beginner/beginner';
import PreIntermediate from './components/homepage/Levels/Pre_Intermediate/preintermediate';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/preIntermediate" element={<PreIntermediate />} />
      </Routes>
    </Router>
  );
}

export default App;
