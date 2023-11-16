// PROMESAS
import {getHeroeByID} from "./bases/08-import-export"

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeByID(2);
        console.log(heroe)
        // resolve();
    }, 2000 );
}); 

promesa.then( ()=>{
    console.log("Then de la promesa")
} )

