import { useEffect, useRef } from 'react'
import { iniciarJuego } from '../Game/juego.js'

const FlapyBird = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const limpiarJuego = iniciarJuego(canvasRef.current)
        return limpiarJuego
    }, [])

    return (
        <canvas
            id="lienzoJuego"
            ref={canvasRef}
            style={{ display: 'block', width: '450px', height: '530px', margin: '0 auto' }}
        ></canvas>
    )
}

export default FlapyBird
