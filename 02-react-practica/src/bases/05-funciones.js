// Funciones
const saludar = function ( nombre) {
  return `Hola ${nombre}`;
} 

const saludar2 = ( nombre) =>{
  return `Hola ${nombre}`;
} 

const saludar3 = ( nombre) => `Hola ${nombre}`;

console.log(saludar3("miguel"))


const getUser = () => ({
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