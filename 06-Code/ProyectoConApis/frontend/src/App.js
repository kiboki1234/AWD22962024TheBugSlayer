<<<<<<< HEAD
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contacts';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import DebateModels from './components/pages/DebateModels';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/common/Navbar';
//import Login from './components/Login';
// import Dashboard from './pages/Dashboard';
// import Clients from './pages/Clients';
// import Appointments from './pages/Appointments';
import Dashboard from './pages/pagesLeaderTH/AdminDashboard';
import TaskTracking from './pages/TaskTracking/TaskTraking';
import UserManagement from './pages/userManagment/UserManagment';

>>>>>>> refs/remotes/origin/main

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/debate-models" element={<DebateModels />} />
        <Route path="/login" element={<Login />} />
=======
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/TaskTracking" element={<TaskTracking />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        {/* <Route path="/clients" element={<Clients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/adoptions" element={<Adoptions />} /> */}
>>>>>>> refs/remotes/origin/main
      </Routes>
    </Router>
  );
}

export default App;
