import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/AuthContext';

const NavbarItems = () => {
  const { userRole } = useContext(AuthContext);

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Task Tracking
        </Link>
      </li>
      {userRole === 'vice_president' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/dashBoard">
              Practicas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UserManagement">
              Administrador de Usuarios
            </Link>
          </li>
        </>
      )}
      {userRole === 'leader' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/messages">
              Mensajes
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavbarItems;