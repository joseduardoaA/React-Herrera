import heroes, {owners} from "../data/heroes";
console.log(owners)
// Como importar un archivo de JavaScript

// const getHeroeByID = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }
//     });
// } 

// console.log(getHeroeByID(2));


const getHeroeByID = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}
    console.log(getHeroeByID(2));

// Esta funcion regresa los heroes que son de DC

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
console.log(getHeroesByOwner("DC"))