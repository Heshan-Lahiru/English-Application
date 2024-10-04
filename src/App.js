import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home';
import Services from './components/services/Services';
import Profile from './components/profile/profile';
import ContactUs from './components/contact/contact';
import Beginner from './components/homepage/Levels/Beginner/beginner';
import PreIntermediate from './components/homepage/Levels/Pre_Intermediate/preintermediate';
import Intermediate from './components/homepage/Levels/Intermediate/Intermediate';
import UpperIntermediate from './components/homepage/Levels/UpperIntermediate/UpperIntermediate';
import Advanced from './components/homepage/Levels/Advanced/Advanced';
import Proficient from './components/homepage/Levels/Proficient/Proficient';
import CertificateExam from './components/homepage/Levels/Proficient/CertificateExam/CertificateExam';
import Certificate from './components/homepage/Levels/Proficient/CertificateExam/Certificate';

import Codefive from './components/homepage/Levels/Advanced/CertificateExam/codefive';
import Codeone from './components/homepage/Levels/Beginner/CertificateExam/codeone';
import Codethree from './components/homepage/Levels/Intermediate/CertificateExam/codethree';
import Codetwo from './components/homepage/Levels/Pre_Intermediate/CertificateExam/codetwo';
import Codefour from './components/homepage/Levels/UpperIntermediate/CertificateExam/codefour';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/preIntermediate" element={<PreIntermediate />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/upper-intermediate" element={<UpperIntermediate />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/proficient" element={<Proficient />} />
        <Route path="/certificateexam" element={<CertificateExam />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/codeone" element={<Codeone />} />
        <Route path="/codetwo" element={<Codetwo />} />
        <Route path="/codethree" element={<Codethree />} />
        <Route path="/codefour" element={<Codefour />} />
        <Route path="/codefive" element={<Codefive />} />

      </Routes>
    </Router>
  );
}

export default App;
