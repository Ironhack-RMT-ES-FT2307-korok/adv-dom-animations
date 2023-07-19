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

setTimeout(() => {
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


}, 2000)

setInterval(() => {
  h2Node.classList.toggle("blue-title")
  // si existe, remuevela
  // si no existe, añadela

  console.log( h2Node.classList.contains("blue-title") ) // true o falso

}, 1000)