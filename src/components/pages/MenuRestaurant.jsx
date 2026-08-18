import React, { useState } from 'react'
import './MenuRestaurant.css'
import { entradas, platoPrincipales, pescadosMariscos } from '../../data/menuItems'

const MenuRestaurant = () => {
    const [section, setSection] = useState('inicio')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    // Combinar todos los items de los diferentes arrays
    const menuItems = [...entradas, ...platoPrincipales, ...pescadosMariscos]

    const pageTitles = {
        1: 'Entradas',
        2: 'Ideales para compartir',
        3: 'Pescados y Mariscos'
    }

    const totalPages = Math.ceil(menuItems.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = menuItems.slice(startIndex, endIndex)

    const handleMenuClick = () => {
        setSection('menu')
        setCurrentPage(1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleBack = () => {
        setSection('inicio')
        setCurrentPage(1)
    }

    // Pantalla inicial
    if (section === 'inicio') {
        return (
            <div className="restaurant-container">
                <div className="welcome-section">
                    <h1 className='heading'>Bienvenido</h1>
                    <div className="options-grid">
                        <button className="option-btn menu-btn" onClick={handleMenuClick}>
                            <span className="btn-icon">📋</span>
                            <span className="btn-text">Menú</span>
                        </button>
                        <button className="option-btn reservas-btn" onClick={() => setSection('reservas')}>
                            <span className="btn-icon">🗓️</span>
                            <span className="btn-text">Reservas</span>
                        </button>
                        <button className="option-btn contacto-btn" onClick={() => setSection('contacto')}>
                            <span className="btn-icon">📞</span>
                            <span className="btn-text">Contacto</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Sección de Menú
    if (section === 'menu') {
        return (
            <div className="restaurant-container">
                <div className="menu-page">
                    <h1 className='heading'>{pageTitles[currentPage]}</h1>
                    
                    <ul className="menu-list">
                        {currentItems.map((item) => (
                            <li key={item.id} className="menu-item">
                                <div className="item-header">
                                    <h3>{item.nombre}</h3>
                                    <span className="precio">{item.precio}</span>
                                </div>
                                <p className="descripcion">{item.descripcion}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pagination-controls">
                    <button 
                        className="btn-nav"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        ← Anterior
                    </button>
                    
                    <span className="page-indicator">
                        Página {currentPage} de {totalPages}
                    </span>
                    
                    <button 
                        className="btn-nav"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente →
                    </button>
                </div>

                <div className="back-button">
                    <button className="btn-back" onClick={handleBack}>← Volver al inicio</button>
                </div>
            </div>
        )
    }

    return (
        <div className="restaurant-container">
            <div className="placeholder-section">
                <h1 className='heading'>Próximamente</h1>
                <p>Esta sección está en desarrollo...</p>
                <button className="btn-back" onClick={handleBack}>← Volver al inicio</button>
            </div>
        </div>
    )
}

export default MenuRestaurant
