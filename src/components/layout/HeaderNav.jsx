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
                    <GlowButton to="/inicio">Inicio</GlowButton>
                </li>
                <li>
                    <NeonButton to="/servicios">Servicios</NeonButton>
                </li>
                <li>
                    <NeonButton to="/portafolio">Portafolio</NeonButton>
                </li>
                <li>
                    <NeonButton to="/curriculum">Curriculum</NeonButton>
                </li>
                <li>
                    <GlowButton to="/contacto">Contacto</GlowButton>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default HeaderNav
