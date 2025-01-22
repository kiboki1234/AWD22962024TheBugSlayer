import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/common/Navbar';
//import Login from './components/Login';
// import Dashboard from './pages/Dashboard';
// import Clients from './pages/Clients';
// import Appointments from './pages/Appointments';
import Dashboard from './pages/pagesLeaderTH/AdminDashboard';
import TaskTracking from './pages/TaskTraking';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/TaskTracking" element={<TaskTracking />} />
        {/* <Route path="/clients" element={<Clients />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/adoptions" element={<Adoptions />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
