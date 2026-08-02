import NeonButton from '../buttons/NeonButton'
import GlowButton from '../buttons/GlowButton'

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
                    <GlowButton to="/inicio" className="glow-inicio">Inicio</GlowButton>
                </li>
                <li>
                    <NeonButton to="/servicios" className="neon-servicios">Servicios</NeonButton>
                </li>
                <li>
                    <NeonButton to="/portafolio" className="neon-portafolio">Portafolio</NeonButton>
                </li>
                <li>
                    <NeonButton to="/curriculum" className="neon-curriculum">Curriculum</NeonButton>
                </li>
                <li>
                    <GlowButton to="/contacto" className="glow-contacto">Contacto</GlowButton>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default HeaderNav
