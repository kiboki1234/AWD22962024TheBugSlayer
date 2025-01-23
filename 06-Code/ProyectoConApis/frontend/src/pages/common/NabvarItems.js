import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/AuthContext';

const NavbarItems = () => {
  const { userRole } = useContext(AuthContext);

  return (
    <>
      {userRole === 'vice_president' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Practicas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UserManagement">
              Administrador de Usuarios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TaskTracking">
              Task Tracking
            </Link>
          </li>
        </>
      )}
      {userRole === 'leader' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Mensajes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/TaskTracking">
              Task Tracking
            </Link>
          </li>
        </>
      )}
      {userRole === 'member' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/">
                Home
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarItems;