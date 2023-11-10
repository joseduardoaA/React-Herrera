// Funciones
const saludar = function ( nombre) {
  return `Hola ${nombre}`;
} 

// Funcion de flecha
const saludar2 = ( nombre) =>{
  return `Hola ${nombre}`;
} 

//Funcion de flecha mas simplificada
const saludar3 = ( nombre) => `Hola ${nombre}`;
console.log(saludar3("miguel"))


const getUser = (/* Aqui recibe los argumentos la funcion */) => ({
  uid: "ABSCFD78453",
  username: "Juan"
});
console.log(getUser());

// Funcion de flecha que devuelve un objeto implicito 
const getUserActivo = ( nombre ) => ({
    uid: "ABC567",
    username: nombre
});

const usuarioActivo = getUserActivo("Jose");
console.log(usuarioActivo)


// Para poder retornar objetos en una Funcion de flecha la sintaxis es la siguiente
const flecha_min = () => ({
  nombre: "Jose",
  edad: 19,
  usuario: "joseAA"
});