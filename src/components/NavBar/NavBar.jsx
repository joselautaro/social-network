import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const NavBar = () => {
  const { user } = useAuth();

  return (
    <>

      <div>
        <Link to="/">Home</Link>
        {user && <Link to="/profile">Mi perfil</Link>}

        {!user && <Link to="/login">Iniciar sesión</Link>}
      </div>
    </>
  );
};


