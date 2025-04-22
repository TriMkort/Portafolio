import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos'

const ListadoTrabajos = ({limite = 10}) => {
    return (
        <section className='works'>
        {
            trabajos.slice(0, limite).map(trabajo => {
                return(
                <article key={trabajo.id} className='work-item'>
                    <div className='mask'>
                    <img src={"/images/" + trabajo.id + ".png"} />
                    </div>
                    <span>{trabajo.categoria}</span>
                    <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                    <h3>{trabajo.tecnologias}</h3>
                    <p>{trabajo.descripcion}</p>
                </article>
                );
            })
        }
        </section>
    )
}

export default ListadoTrabajos