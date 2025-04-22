import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>M</span>
        <h3>Michael S. Sabogal Garzón</h3>
      </div>
      <nav>
          <ul>
              <li>
                  <NavLink to="/inicio">Inicio</NavLink>
              </li>
              <li>
                  <NavLink to="/servicios">Servicios</NavLink>
              </li>
              <li>
                  <NavLink to="/portafolio">Portafolio</NavLink>
              </li>
              <li>
                  <NavLink to="/curriculum">Curriculum</NavLink>
              </li>
              <li>
                  <NavLink to="/contacto">Contacto</NavLink>
              </li>
          </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
