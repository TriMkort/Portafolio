export function iniciarJuego(contexto) {
    const ctx = contexto.getContext("2d")
    const width = 450
    const height = 530
    const fps = 60
    const gravedad = 1.5
    let score = 0
    let personaje = { x: 50, y: 150, w: 50, h: 50 }
    let tuberias = [{ x: width, y: 0 }]

    contexto.width = width
    contexto.height = height

    const point = new Audio("/Game/FlapyBird/soundstrack/point.mp3")
    const bird = new Image()
    bird.src = "/Game/FlapyBird/img/bird.png"
    const background = new Image()
    background.src = "/Game/FlapyBird/img/background.png"
    const tubeNorth = new Image()
    tubeNorth.src = "/Game/FlapyBird/img/tubeNorth.png"
    const tubeSouth = new Image()
    tubeSouth.src = "/Game/FlapyBird/img/tubeSouth.png"
    const suelo = new Image()
    suelo.src = "/Game/FlapyBird/img/floor.png"

    function presionar() {
        personaje.y -= 35
    }

    function resize() {
        contexto.style.height = `${window.innerHeight}px`
    }

    function loop() {
        ctx.clearRect(0, 0, width, height)
        ctx.drawImage(background, 0, 0, width, height)
        ctx.drawImage(suelo, 0, 450, 80, contexto.height - suelo.height)
        ctx.drawImage(bird, personaje.x, personaje.y)

        for (let i = 0; i < tuberias.length; i++) {
            const constante = tubeNorth.height + 80
            ctx.drawImage(tubeNorth, tuberias[i].x, tuberias[i].y)
            ctx.drawImage(tubeSouth, tuberias[i].x, tuberias[i].y + constante)
            tuberias[i].x--

            if (tuberias[i].y + tubeNorth.height < 80) {
                tuberias[i].y = 0
            }
            if (tuberias[i].x === 150) {
                tuberias.push({
                    x: contexto.width,
                    y: Math.floor(Math.random() * tubeNorth.height) - tubeNorth.height
                })
            }

            const chocaConTuberia = personaje.x + bird.width >= tuberias[i].x &&
                personaje.x <= tuberias[i].x + tubeNorth.width &&
                (personaje.y <= tuberias[i].y + tubeNorth.height ||
                    personaje.y + bird.height >= tuberias[i].y + constante)
            const tocaSuelo = personaje.y + bird.height >= height - suelo.height

            if (chocaConTuberia || tocaSuelo) {
                window.location.reload()
                return
            }
            if (tuberias[i].x === personaje.x) {
                score++
                point.play()
            }
        }

        personaje.y += gravedad
        ctx.fillStyle = "rgba(0, 0, 0, 1)"
        ctx.font = "20px sans-serif"
        ctx.fillText(`Score: ${score}`, 10, height - 40)
    }

    let intervalo = null
    let activo = true
    const recursos = [bird, background, tubeNorth, tubeSouth, suelo]
    const recursosListos = Promise.all(recursos.map((recurso) => {
        if (recurso.complete) {
            return Promise.resolve()
        }

        return new Promise((resolve, reject) => {
            recurso.addEventListener("load", resolve, { once: true })
            recurso.addEventListener("error", reject, { once: true })
        })
    }))

    recursosListos.then(() => {
        if (!activo) {
            return
        }

        resize()
        window.addEventListener("resize", resize)
        window.addEventListener("keydown", presionar)
        intervalo = window.setInterval(loop, 1000 / fps)
    }).catch((error) => {
        console.error("No se pudieron cargar los recursos del juego", error)
    })

    return () => {
        activo = false
        if (intervalo !== null) {
            window.clearInterval(intervalo)
        }
        window.removeEventListener("resize", resize)
        window.removeEventListener("keydown", presionar)
        point.pause()
    }
}
