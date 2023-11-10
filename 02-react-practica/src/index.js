// Desestructuracion
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman"
};

const { nombre } = persona
/* Esto extrae el nombre del objeto persona y lo almacena en la constante
En las llaves {} colocaremos la clave que queremos extraer del objeto 
Para imprimirlo colocaremos el nombre que pusimos entre las llaves {} */

/* Si ya tenemos una variable con el mismo nombre podemos hacer esto
const { nombre:nombre2 } = persona
console.log( nombre2 )
*/

console.log(nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// Para extraer mas valores 
const { edad, nombre:nombre2, clave } = persona
// No importa el orden
console.log( clave );
console.log( edad );
console.log( nombre2 );





















// const {nombre, edad, clave} = persona;

//En la desestructuracion se puede asignarle una propiedad por defecto aunque no la tenga el objeto 
// const retornaPersona = ( {nombre, edad, rango = "Capitan "} ) => {
//   console.log(nombre, edad, rango)
// }

// retornaPersona( persona );
