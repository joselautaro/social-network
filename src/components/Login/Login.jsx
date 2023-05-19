import React, { useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate(); // Obtener la función de navegación

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
    setEmail('');
    setPassword('');
    navigate('/'); // Redirigir a la página de inicio (Home) después de iniciar sesión
  };
  const handleLoginGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
    navigate('/');
  };

  return (
    <>
      <div>
        <form className="container mt-1" style={{ backgroundColor: 'gray', border: '1px solid white', padding: '20px', borderRadius: '10px' }}>
          <div className="mb-3">
            <button onClick={(e) => handleLoginGoogle(e)} className="btn btn-dark" style={{ marginBottom: '10px' }}>
              <AiFillGoogleCircle size={20} style={{ marginRight: '10px' }} />
              Iniciar sesión con Google
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ color: 'black' }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ color: 'black' }} />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </div>
          <div>
            ¿No tienes una cuenta? <a style={{ color: 'white' }} href="/registro">Regístrate aquí</a>
          </div>
        </form>
      </div>
    </>
  );
};

