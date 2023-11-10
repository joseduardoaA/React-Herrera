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
console.log(persona.edad)
console.log(persona.clave)

// Para extraer mas valores 
const { edad, nombre:nombre2, clave } = persona
// No importa el orden
console.log( clave );
console.log( edad );
console.log( nombre2 );

const retornaPersona = ( persona ) =>{
  const { edad, nombre:nombre2, clave } = persona
  console.log(edad, clave, nombre2)

}
retornaPersona ( persona );


// Desestructuracion en el argumento
// Podemos adignarle un valor en los mismos argumentos
const contexto = ({nombre, edad, rango = "Capitan"}) =>{


  return{
    nombreClave: clave,
    anios: edad,
    latlong: {
      lat:45678,
      long:-98546
  }}

}
const avenger = contexto (persona)
console.log (avenger)

// Extrallendo los valores del objeto Avenger
const {nombreClave, anios, latlong} = avenger
// Tambien extraje elementos anidados
const { lat, long } = latlong 
console.log(nombreClave, anios, lat, long)

















// const {nombre, edad, clave} = persona;

//En la desestructuracion se puede asignarle una propiedad por defecto aunque no la tenga el objeto 
// const retornaPersona = ( {nombre, edad, rango = "Capitan "} ) => {
//   console.log(nombre, edad, rango)
// }

// retornaPersona( persona );
