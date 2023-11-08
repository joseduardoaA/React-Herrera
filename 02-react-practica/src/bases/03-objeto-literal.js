const persona = {
  nombre: "Tony",
  edad: 45,
  direccion:{
    ciudad: "New York",
    zip: 4587452,
    lat:103586,
    long:7896415 
  }
};

//Copiando las propiedades de un objeto a otro con el Spread Operator
const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona)
console.log(persona2)
