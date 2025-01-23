import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext, AuthProvider } from './components/AuthContext';

//landing
import HomePage from './pages/LandingPage/HomePage';
import AboutUs from './pages/LandingPage/pages/AboutUs';
import Contacts from './pages/LandingPage/pages/Contacts';
import Login from './pages/LandingPage/pages/Login';
import DebateModels from './pages/LandingPage/pages/DebateModels';
import Events from './pages/LandingPage/pages/Events';
import LandingNavbar from './pages/LandingPage/Navbar';

//app
import Dashboard from './pages/pagesLeaderTH/AdminDashboard';
import TaskTracking from './pages/TaskTracking/TaskTraking';
import UserManagement from './pages/userManagment/UserManagment';
import NewsList from './components/NewsList';
import AppNavbar from './pages/common/AppNavbar';
import UserMessages from './pages/pagesLeaderTH/ToContact';


function App() {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  return (
    <Router>
      {isAuthenticated ? <AppNavbar /> : <LandingNavbar />}
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<TaskTracking />} />
            {userRole === 'vice_president' && (
              <>
                <Route path="/dashBoard" element={<Dashboard />} />
                <Route path="/UserManagement" element={<UserManagement />} />
              </>
            )}
            {userRole === 'leader' && (
              <>
                <Route path="/messages" element={<UserMessages />} />
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
