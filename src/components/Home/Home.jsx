// import React from 'react'
// import { useAuth } from '../../context/AuthContext';

// export const Home = () => {

//     const { user } = useAuth();
//     console.log(user)

    

//   return (
//     <div style={{color: 'white'}}>

//         <h1>Home</h1>
//         <h3>
//             Te damos la bienvenida: <p> {user?.displayName}</p>
//             {/* <button onClick={handleLogout}>Cerrar sesion</button> */}
//         </h3>
//     </div>
//   )
// }

import React from 'react';
import { useAuth } from '../../context/AuthContext';

export const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={{ color: 'white' }}>
        <h1>Home</h1>
        <p>Para usar este sitio, necesitas iniciar sesión.</p>
      </div>
    );
  }

  return (
    <div style={{ color: 'white' }}>
      <h1>Home</h1>
      <h3>
        Te damos la bienvenida: <p>{user.displayName}</p>
      </h3>
      {/* Resto del contenido */}
    </div>
  );
};

