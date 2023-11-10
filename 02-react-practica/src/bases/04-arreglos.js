const arreglo = [1,2,3,4];

// Con Spread Operator rompemos la referencia y clonamos un array 
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero){
return numero * 2;
});

console.log(arreglo); // Array original
console.log(arreglo2); // Array usando spread Operator
console.log(arreglo3); // Array tomado el spread operator y agregando la funcion Map para multiplicar cada elemento del array *2



