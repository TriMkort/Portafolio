import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import Inicio from '../componets/Inicio';
import Contacto from '../componets/Contacto';
import Articulo from '../componets/Articulo';
import Nombre from '../componets/Nombre';
import Error from '../componets/Error';


const Routers = () => {
    return (
        <div className='Content'>

            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/Inicio"
                                className={({isActive}) => isActive ? "activado" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Inicio"
                                className={({isActive}) => isActive ? "activado" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Inicio"
                                className={({isActive}) => isActive ? "activado" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Inicio"
                                className={({isActive}) => isActive ? "activado" : ""}>
                                Inicio
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <section className='Rutas'>
                    <Routes>
                        <Route path="/" element={<Inicio/>}/>
                        <Route path="/Inicio" element={<Inicio/>}/>
                        <Route path="/Contacto" element={<Contacto/>}/>
                        <Route path="/Articulo" element={<Articulo/>}/>    
                        <Route path="/Error" element={<Error/>}/>
                    </Routes>


                </section>
            </BrowserRouter>
        </div>
    import { Routes, Route, NavLink, BrowserRouter} from "react-router-dom";  )
    }

export default Routers
