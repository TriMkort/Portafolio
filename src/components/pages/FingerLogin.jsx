import React, { useState } from 'react';
import Form from '../interaciones/Form';


const FingerLogin = () => {

    const [mostrarLogin, setMostrarLogin] = useState(false);

    const login = (e) => {
        setMostrarLogin(true);
    }

    const logout = (e) => {
        setMostrarLogin(false);
    }

    return (
        <div>
            <h1>Finger Login</h1>
            <p>En este proyecto implementaremos un sistema de inicio de sesión </p>
            <button className='btn_login' onClick={login}> Iniciar </button>
            &nbsp;
            <button className='btn_logout' onClick={logout}>Cerrar sesion</button>
            {mostrarLogin && <Form />}
        </div>
    )
}

export default FingerLogin
