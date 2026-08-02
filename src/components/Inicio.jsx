import ListadoTrabajos from './ListadoTrabajos'
import GlowButton from './buttons/GlowButton'

const Inicio = () => {
  return (
    <div className='home'>
      <h1 className='heading'>Hola, soy <strong>Michael Sabogal</strong> y soy <strong>Desarrollador </strong> 
          web full stack, o bueno en eso trabajo, 
          y quiero mostrarte algunos de mis proyectos <strong>desarrollados</strong> los cuales fueron hechos con 
          <strong> react </strong> y por medio de este portafolio podras verlos.
      </h1>

      <h2 className='title'>
        Si te interesa y tienes alguna idea en mente puedes 
        <GlowButton to="/contacto">contactar conmigo aquí</GlowButton>
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
