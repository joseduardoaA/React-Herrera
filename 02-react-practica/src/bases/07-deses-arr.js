const personajes = ["Goku", "Vegeta", "Trunks"]

// Asi se extrae el primer elemento de un Array
const [ p1 ] = personajes;
console.log(p1)

// Asi podemos extraer solo el segundo elemento del Array
const [ , p2 ] = personajes;
console.log(p2)

/* Y asi el tercer elemento
Solo colocamos una coma antes del nombre del elemento 
*/
const [ , , p3 ] = personajes;
console.log(p3)


const retornaArray = () =>{
    return ["ABC", 123];
}

const [letras, numeros] = retornaArray();
console.log(letras, numeros)

const usoEstado = (valor) => {
    return[valor, ()=>{console.log("Hola mundo")}];
}

const [nombre, setNombre] = usoEstado("Goku");

console.log(nombre);
setNombre();
