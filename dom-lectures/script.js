console.log("probando");


const paragNode = document.querySelector("#parag")
console.log(paragNode)

console.log(paragNode.innerText) // string
console.log(paragNode.innerHTML) // string

// paragNode.innerText = "Nuevo parrafo con information interna (patata)"

let palabraImportante = "PATATA"

// setTimeout(() => {

  paragNode.innerHTML = `
  <h4>Nuevo titulo 
    <span>y un contenido interno 
      <b>${palabraImportante}</b> 
      <b>${palabraImportante}</b> 
      <b>${palabraImportante}</b> 
      <b>${palabraImportante}</b> 
      <b>${palabraImportante}</b> 
    </span> 
  </h4>
  `

// }, 2000)


// Cambiar id y classes de elementos

const h2Node = document.querySelector("#my-title")

// setTimeout(() => {
  console.log(h2Node)
  
  console.log(h2Node.id)
  
  h2Node.id = "nuevo-id"

  console.log( h2Node.className )

  // h2Node.className = "title container blue-title"; // esto genera bugs

  // herramientas para agregar, borrar y cambiar classes
  console.log( h2Node.classList )
  h2Node.classList.add("blue-title") // añade la clase
  console.log( h2Node.classList )

  h2Node.classList.remove("container") // remueve la clase

  h2Node.classList.toggle("green-title")
  // si existe, remuevela
  // si no existe, añadela


// }, 2000)

setInterval(() => {
  h2Node.classList.toggle("blue-title")
  // si existe, remuevela
  // si no existe, añadela

  // console.log( h2Node.classList.contains("blue-title") ) // true o falso

}, 1000)

const btnNode = document.querySelector("#increment")

btnNode.addEventListener("click", () => {
  console.log("presionando el boton");

  const countNode = document.querySelector("#count span");
  // console.log(countNode)
  countNode.innerText++;

  if (countNode.innerText > 10) {
    // countNode.classList.add("top-value")

    // podemos cambiar directamente los estilos
    console.log(countNode.style)
    countNode.style.color = "red";
    countNode.style.backgroundColor = "black";

  }

})


const titleNode = document.querySelector("#event-title")

titleNode.addEventListener("mouseenter", () => {
  titleNode.style.color = "purple";
  titleNode.innerText = "PATATA!"
  paragNode.style.backgroundColor = "rgb(0,0,0)";

})

titleNode.addEventListener("mouseleave", () => {

  titleNode.style.color = "red";
  titleNode.innerText = "EVENTS! visited"
  paragNode.style.backgroundColor = "white";

})


const inputNode = document.querySelector("#name")
const addButtonNode = document.querySelector("#add-btn")
const ulNode = document.querySelector("#output-list")



addButtonNode.addEventListener("click", () => {

  // console.log( inputNode.innerText ) // no funcion
  console.log( inputNode.value );

  // // como creo un elemento de li y lo agrego al ul
  const liNode = document.createElement("li");
  liNode.innerText = inputNode.value

  ulNode.append(liNode)

  // ulNode.innerHTML += `
  // <li style="color: green">
  //   ${inputNode.value}
  // </li>
  // `

})


// const newPNode = document.querySelector("#new-parag")

// console.log(newPNode.innerText.length)
// console.log(newPNode.textContent.length)



// recursion

let control = 0;

function printSomething () {

  console.log("hola infinito", control)
  control++

  if (control < 200) {
    // printSomething()
    // JS va ajecutar esto lo más rapido que pueda
    requestAnimationFrame( printSomething ) 
    // va a crear recursion pero 60 veces por segundo => depende de velocidad de refresco de la pantalla
    // lo usamos para crear efectos de animacion en JS => para juegos
  }

}

// printSomething()

const gameBoxNode = document.querySelector("#game-box")
const cubeNode = document.querySelector("#cube")

gameBoxNode.style.width = "400px";
gameBoxNode.style.height = "400px";
gameBoxNode.style.backgroundColor = "darkgray";
gameBoxNode.style.position = "relative"; // posicionar elementos internos de forma absoluta

cubeNode.style.width = "30px";
cubeNode.style.height = "30px";
cubeNode.style.backgroundColor = "black";
cubeNode.style.position = "absolute";
cubeNode.style.top = "20px";

let cubePositionX = 30;
cubeNode.style.left = `${cubePositionX}px`;

function animateGame() {
  console.log("intentando mover cubito")

  // cambio la posición del cubito
  cubePositionX++

  // actualiza la posición del cubito
  cubeNode.style.left = `${cubePositionX}px`;

  if (cubePositionX < 370) {
    requestAnimationFrame(animateGame)
  }

}

animateGame()








