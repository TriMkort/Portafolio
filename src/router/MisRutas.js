import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'
import Proyecto from '../components/Proyecto'

const MisRutas = () => {
    return (
        <BrowserRouter>
        {/*HEADER Y NAVEGACION*/}
        <HeaderNav/>
        {/*  CONTENIDO CENTRLA */}
        <section className='content'>
            <Routes>
                <Route index element={<Navigate to="/Inicio" />}/>
                <Route path='/inicio' className={({isActive}) => isActive ? "active" : ""} element={<Inicio />} />
                <Route path='/portafolio' className={({isActive}) => isActive ? "active" : ""} element={<Portafolio />} />
                <Route path='/servicios' className={({isActive}) => isActive ? "active" : ""} element={<Servicios />} />
                <Route path='/curriculum' className={({isActive}) => isActive ? "active" : ""} element={<Curriculum />} />
                <Route path='/contacto' className={({isActive}) => isActive ? "active" : ""} element={<Contacto />} />
                <Route path='/proyecto/:id' className={({isActive}) => isActive ? "active" : ""} element={<Proyecto />} />
                <Route path='*' element={
                    <div className='page'>
                        <h1 className='heading'>Error 404</h1>
                    </div>
                }/>
            </Routes>
        </section>
            {/* <h1>Footer</h1>footer */}
            <Footer/>
        </BrowserRouter>
    )
}
export default MisRutas
