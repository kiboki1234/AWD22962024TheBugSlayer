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
import NewsList from './components/NewsList';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/TaskTracking" element={<TaskTracking />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/NewsList" element={<NewsList />} />
      </Routes>
    </Router>
  );
}

export default App;
