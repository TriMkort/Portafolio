import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' action="hackwolf.scott@outlook.com">
        <input type="text" placeholder='Nombre' required/>
        <input type="text" placeholder='Apellido'/>
        <input type="email" placeholder='Email' required/>
        <textarea type="text" placeholder='Motivo del contacto' required></textarea>
        <input type="submit" value="Enviar" className='btn'/>

      </form>
    </div>
  )
}

export default Contacto
