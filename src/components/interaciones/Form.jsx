import React from 'react'
import Registro from './Registro'

const Form = () => {
    return (
        <div>
                <form>
                    <input tyinputpe="text" placeholder='Ingrese su usuario' />
                    <input type="password" placeholder='Ingrese su contraseña' />
                    <hr/>
                    <button type='submit'>Iniciar </button>
                    <hr/>
                    < a href='/admin'>Olvide contraseña</a>
                    < a href='/admin'>{<Registro/>}Registrarse</a>
                                        
                </form>
        </div>
    )
}

export default Form
