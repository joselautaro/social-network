import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate(); // Obtener la función de navegación

    const handleLogout = async () => {
        await logout();
        navigate('/login'); // Redirigir al formulario de inicio de sesión
    };

    console.log(user);

    return (
        <div style={{ color: 'white' }}>
            <h1>Perfil</h1>
            <p>Nombre: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};







