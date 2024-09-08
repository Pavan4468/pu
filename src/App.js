// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TeacherDetails from './TeacherDetails';
import Support from './Support';
import WebDevelopment from './WebDevelopment';
import AI from './AI';
import Cybersecurity from './Cybersecurity';
import DataScience from './DataScience';
import MobileApp from './MobileApp';
import CloudDevelopment from './CloudDevelopment';
import DevOps from './DevOps';
import GameDev from './GameDev';
import VirtualReality from './VirtualReality';
import IoT from './IoT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeacherDetails" element={<TeacherDetails />} />
        <Route path="/support" element={<Support />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/mobileApp" element={<MobileApp />} />
        <Route path="/cloud-development" element={<CloudDevelopment />} />
        <Route path="/devops" element={<DevOps />} />
        <Route path="/game-dev" element={<GameDev />} />
        <Route path="/virtual-reality" element={<VirtualReality />} />
        <Route path="/iot" element={<IoT />} />
      </Routes>
    </Router>
  );
}

export default App;
