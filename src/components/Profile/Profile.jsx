import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const Profile = () => {
    const { user } = useAuth();
    console.log(user)

    return (
        <div style={{color: 'white'}}>
            <h1>Perfil</h1>
            <p>Nombre: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
}






