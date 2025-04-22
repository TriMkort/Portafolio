import React, { useState } from "react";
import Buscar from "./componets/Buscar";
import Crear from "./componets/Crear";
import Listado from "./componets/Listado";



function App() {

    const [listadoState, setListadoState] = useState([]);

    return (
        <div className="layout">
            {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                
                <h1>MisPelis</h1>
            </header>

            {/*Barra de navegación*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/*Contenido principal*/}
            <section id="content" className="content">

                {/*aqui va el listado de peliculas*/}
                <Listado listadoState={listadoState} setListadoState={setListadoState}/>
            </section>

            {/*Barra lateral*/}
            <aside className="lateral">
                <Buscar listadoState={listadoState} setListadoState={setListadoState}/>
                <Crear setListadoState={setListadoState}/>

            </aside>

            {/*Pie de página*/}
            <footer className="footer">
            &copy; Máster en JavaScript ES12 y TypeSript <a href="/#">victorrobles.es </a>
            </footer>
        </div>
    );
}

export default App;
