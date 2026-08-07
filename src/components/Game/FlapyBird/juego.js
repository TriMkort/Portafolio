var contexto = document.getElementById("lienzoJuego")
var ctx = contexto.getContext("2d")
var width = 300;
var height = 530;
var canvas_width = 300;
var canvas_height = 530;
contexto.width = width;
contexto.height = height;
// // VARIABLES
var score = 0
var fps = 60
var gravedad = 1.5
var personaje = {
    x:50,
    y:150,
    w:50,
    h:50
}
var tuberias = new Array()
tuberias [0] ={
    x:contexto.width,
    y:0
}

// VARIABLES SOUNDSTRACK
    var point = new Audio()
    point.src = "soundstrack/point.mp3"

// // VARIABLES IMAGES
var bird = new Image()
bird.src ="img/bird.png"

var background = new Image()
background.src ="img/background.png"

var tubeNorth = new Image()
tubeNorth.src ="img/tubeNorth.png"

var tubeSouth = new Image()
tubeSouth.src ="img/tubeSouth.png"

var suelo = new Image()
suelo.src ="img/floor.png"


// CONTROL
function presionar(){
    personaje.y -= 35
}

resize()
function resize(){
    canvas_height = window.innerHeight;
    canvas_width = window.innerWidth;

    contexto.width = width;
    contexto.height = height;

    contexto.style.height = "" + canvas_height + "px";
    // contexto.style.width = "" + canvas_width + "px";
}

// BUCLE

setInterval(loop,1000/fps)
function loop() {
    ctx.clearRect(0,0,300,530)
    // BACKGROUND
    ctx.drawImage(background,0,0,300,530)
    ctx.drawImage(suelo,0,contexto.height - suelo.height)
    // PERSON
    ctx.drawImage(bird,personaje.x,personaje.y)
    // TUBE
    for (var i = 0; i < tuberias.length ; i++){
        var constante = tubeNorth.height + 80
        // TUBERIA NORTE{
        ctx.drawImage(tubeNorth,tuberias[i].x,tuberias[i].y)
    
        ctx.drawImage(tubeSouth,tuberias[i].x,tuberias[i].y + constante)
        tuberias[i].x--

        if(tuberias[i].y + tubeNorth.height < 80){
            tuberias[i].y = 0
        }
        if (tuberias[i].x == 150){
            tuberias.push({
                x:contexto.width,
                y:Math.floor(Math.random() * tubeNorth.height) - tubeNorth.height
            })
        }
        // COLITIONS
        if(personaje.x + bird.width >= tuberias[i].x &&
            personaje.x <= tuberias[i].x + tubeNorth.width &&
            (personaje.y <= tuberias[i].y + tubeNorth.height ||
                personaje.y + bird.height >= tuberias[i].y + constante)
                ||personaje.y + bird.height >= contexto.height - suelo.height){
            location.reload()
                // reiniciar juego
        }
        if (tuberias[i].x == personaje.x){
            score++
            point.play()
        }

    }

    // CONDITION OF GAME
    personaje.y += gravedad
    ctx.fillStyle = "rgba 0,0,0,1"
    ctx.font = "20px sans-serif"
    ctx.fillText("Score: 0" +score,10,contexto.height - 40)
}
// EVENTS
window.addEventListener("resize",resize)
window.addEventListener("keydown",presionar)