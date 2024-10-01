import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </Router>
  );
}

export default App;
