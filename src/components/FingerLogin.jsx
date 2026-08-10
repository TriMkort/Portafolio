
const FingerLogin = () => {

    const login = () => {
        <input type="text" placeholder='Ingrese su usuario' />
    }

    const logout = () => {
        
    }

    return (
        <div>
            <h1>Finger Login</h1>
            <p>En este proyecto implementaremos un sistema de inicio de sesión </p>
            <button className='btn_login' onClick={login}> Iniciar </button>
            <button className='btn_logout' onClick={logout}>Cerrar sesion</button>

        </div>
    )
}

export default FingerLogin
