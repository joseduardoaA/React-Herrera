// Desestructuracion

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman"
};

const {nombre, edad, clave} = persona;

// En la desestructuracion se puede asignarle una propiedad por defecto aunque no la tenga el objeto 
const retornaPersona = ( {nombre, edad, rango = "Capitan "} ) => {
  console.log(nombre, edad, rango)
}

retornaPersona( persona );
