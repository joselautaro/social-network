import { auth } from "../firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile as updateProfileFirebase,
    onAuthStateChanged
} from "firebase/auth";

export const authContext = createContext()



export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        console.log("error al crear contexto")
    }
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null); // Estado para almacenar el objeto user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Actualiza el estado del usuario cuando cambia el estado de autenticación
        });

        return () => unsubscribe(); // Limpia el efecto cuando se desmonta el componente
    }, []);

    const register = async (email, password, name) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await updateProfile(user, { displayName: name });
        console.log(response);
        console.log(user)
    }
    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }
    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
    }


    return (
        <authContext.Provider value={{
            user,
            register,
            login,
            loginWithGoogle,
            logout
        }}>
            {children}
        </authContext.Provider>
    )
}
