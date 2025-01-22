import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Appointments from "./pages/Appointments";
import Adoptions from "./pages/Adoptions";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas para administradores */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute requiredRole="admin">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <PrivateRoute requiredRole="admin">
              <Clients />
            </PrivateRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <PrivateRoute requiredRole="admin">
              <Appointments />
            </PrivateRoute>
          }
        />
        <Route
          path="/adoptions"
          element={
            <PrivateRoute requiredRole="admin">
              <Adoptions />
            </PrivateRoute>
          }
        />

        {/* Rutas protegidas para usuarios */}
        <Route
          path="/user-dashboard"
          element={
            <PrivateRoute requiredRole="user">
              <div>Panel de Usuario</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
