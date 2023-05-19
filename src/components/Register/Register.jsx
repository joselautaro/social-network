import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useAuth } from '../../context/AuthContext';

export const Register = () => {
    const auth = useAuth()
    const navigate = useNavigate();
    const [emailRegister, setEmailRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('');

    const handleRegister = (e) => {
        e.preventDefault()
        auth.register(nameRegister, emailRegister, passwordRegister)
        navigate('/');
    };
    
    const handleLoginGoogle = async (e) => {
        e.preventDefault()
        await auth.loginWithGoogle()
        navigate('/')
    }


    return (
        <div>

            <form className="container" style={{ backgroundColor: 'gray', border: '1px solid white', padding: '20px', borderRadius: '10px' }}>
                <div className="mb-3">
                    <button onClick={(e) => handleLoginGoogle(e)} className="btn btn-dark" style={{ marginBottom: '10px' }}>
                        <AiFillGoogleCircle size={20} style={{ marginRight: '10px' }} />
                        Iniciar sesión con Google
                    </button>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input type="name" className="form-control" id="name" onChange={(e) => setNameRegister(e.target.value)} style={{ color: 'black' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmailRegister(e.target.value)} style={{ color: 'black' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input type="password" className="form-control" id="password" onChange={(e) => setPasswordRegister(e.target.value)} style={{ color: 'black' }} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleRegister(e)}>
                        Registrarme
                    </button>
                </div>
            </form>

        </div>
    )
}
