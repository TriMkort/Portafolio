import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from './ListadoTrabajos'

const Inicio = () => {
  return (
    <div className='home'>
      <h1 className='heading'>Hola, soy <strong>Michael Sabogal</strong> y soy <strong>Desarrollador </strong> 
          web full stack, trabajo en la parte front-end, 
          y quiero mostrarte algunos de mis proyectos <strong>desarrollados</strong> los cuales fueron hechos con 
          <strong> react </strong> y por medio de este portafolio podras verlos.
      </h1>

      <h2 className='title'>
        Si te interesa y tienes alguna idea en mente puedes 
        <Link to="/contacto">contactar conmigo aquí</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <ListadoTrabajos limite="3"/>
      </section>
    </div>
  )
}

export default Inicio
