import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './components/AuthContext';

//landing
import HomePage from './pages/LandingPage/HomePage';
import AboutUs from './pages/LandingPage/pages/AboutUs';
import Contacts from './pages/LandingPage/pages/Contacts';
import Login from './pages/LandingPage/pages/Login';
import DebateModels from './pages/LandingPage/pages/DebateModels';
import Events from './pages/LandingPage/pages/Events';
import LandingNavbar from './pages/LandingPage/Navbar';
import NewsList from './components/NewsList';

//app
import Dashboard from './pages/pagesLeaderTH/AdminDashboard';
import TaskTracking from './pages/TaskTracking/TaskTraking';
import UserManagement from './pages/userManagment/UserManagment';
import AppNavbar from './pages/common/AppNavbar';
import UserMessages from './pages/pagesLeaderTH/ToContact';
import MemberView from './pages/memberView/MemberView';


function App() {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  return (
    <Router>
      {isAuthenticated ? <AppNavbar /> : <LandingNavbar />}
      <Routes>
        {isAuthenticated ? (
          <>
            {userRole === 'vice_president' && (
              <>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/UserManagement" element={<UserManagement />} />
                <Route path="/TaskTracking" element={<TaskTracking />} />
              </>
            )}
            {userRole === 'leader' && (
              <>
                <Route path="/" element={<Navigate to="/usermessages" />} />
                <Route path="/usermessages" element={<UserMessages />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/TaskTracking" element={<TaskTracking />} />
              </>
            )}
            {userRole === 'member' && (
              <>
                <Route path="/" element={<Navigate to="/memberview" />} />
                <Route path="/memberview" element={<MemberView />} />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/debateModels" element={<DebateModels />} />
            <Route path="/events" element={<Events />} />
            <Route path="/NewsList" element={<NewsList />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
