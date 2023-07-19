console.log("probando")

const ballNode = document.querySelector("#ball");
const gameBoxNode = document.querySelector("#game-box");
const paddleNode = document.querySelector("#paddle");
// console.log(gameBoxNode.offsetWidth, gameBoxNode.offsetHeight)

// variables globales
let ballX = 10;
let ballY = 10;
let ballSpeed = 3;

let isBallMovingRight = true;
let isBallMovingDown = true;

let wallWidth = gameBoxNode.offsetWidth;
let wallHeight = gameBoxNode.offsetHeight;

let ballWidth = ballNode.offsetWidth;
let ballHeight = ballNode.offsetHeight;

let paddleX = 150;
let paddleY = 530;
let paddleWidth = paddleNode.offsetWidth;
let paddleHeight = paddleNode.offsetHeight;

let isGameOn = true;


function ballMovement() {
  
  if (isBallMovingRight === true) {
    ballX += ballSpeed
  } else {
    ballX -= ballSpeed
  }

  // ballX += 5
  if (isBallMovingDown === true) {
    ballY += ballSpeed
  } else {
    ballY -= ballSpeed
  }
}

function ballWallCollision() {
  if (ballX + ballWidth >= wallWidth) {
    // choque pared derecha
    isBallMovingRight = false;
  } else if (ballY + ballHeight >= wallHeight) {
    // choque pared abajo
    // isBallMovingDown = false;
    // el juego de debe terminar
    isGameOn = false;
    alert("El juego ha terminado :(")

  } else if (ballX < 0) {
    // choque pared izquierda
    isBallMovingRight = true;
  } else if (ballY < 0) {
    // choque pared arriba
    isBallMovingDown = true;
  }
}

function ballPositionUpdates() {
  ballNode.style.left = `${ballX}px`;
  ballNode.style.top = `${ballY}px`;
}

function paddlePositionUpdates() {
  paddleNode.style.left = `${paddleX}px`;
  // el top es opcional porque la paleta no se mueve arriba/abajo
}

function ballPaddleCollision() {
  if (ballY + ballHeight > paddleY && ballX > paddleX && ballX + ballWidth < paddleX + paddleWidth) {
    console.log("ha colisionado");
    isBallMovingDown = false;
  }
}

function gameLoop() {
  // console.log("ejecutando recursion")

  // 1. cambios de los elementos
  ballWallCollision();
  ballPaddleCollision();
  ballMovement();

  // 2. actualizaciones de posicion y dimensiones
  ballPositionUpdates();
  paddlePositionUpdates();

  // 3. efecto de recursion
  if (isGameOn === true) {
    // el juego continua
    requestAnimationFrame( gameLoop ) // 60fps 60h 1/60 seg
  }
}

// AddEventListener
window.addEventListener("keydown", (event) => {
  // .todos los eventos nos dan como parametro informacion del evento que está ocurriendo
  // console.log(event)
  console.log("presionando una tecla")
  console.log(event.key)

  if (event.key === "ArrowRight") {
    paddleX += 20;
  } else if (event.key === "ArrowLeft") {
    paddleX -= 20;
  }
  console.log(paddleX)
})


// iniciar la recursion
gameLoop()



// bonus

// - que las paletas no puedan salir del game-box
// - que la paleta se pueda mover arriba abajo
// - contador para llevar control de colisiones paleta 
// - cambiar color de la pelota cuando colisiona (color aleatorio)
// - aumentar la velocidad de la pelotita cuando colisiona

// - posicion random inicial (MED)

// - que el movimiento sea automatico (DIFICIL)
// - contador de vidas (DIFICIL) y que aparezca por arriba
// - que haya dos paletas para multijugador (DIFICIL)