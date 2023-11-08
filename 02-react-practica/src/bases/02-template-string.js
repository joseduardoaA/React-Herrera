const nombre = "Jose";
const apellido = "Antunez";

// const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = ` ${ nombre} ${apellido } `;

console.log(nombreCompleto);


function getSaludar(nombre) {
  return "Hola" + nombre;
} 

console.log(`Este es un texto: ${getSaludar (nombreCompleto) }`)