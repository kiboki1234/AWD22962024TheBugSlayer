import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/clients">Clientes</Link></li>
      <li><Link to="/appointments">Citas</Link></li>
      <li><Link to="/adoptions">Adopciones</Link></li>
      <li><Link to="/">Salir</Link></li>
    </ul>
  </nav>
);

export default Navbar;
