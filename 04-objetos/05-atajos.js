
let obj = {}; // es un atajo para crear un objeto. Es lo mismo que escribir let obj = new Object(); pero es más corto y más común.
let obj2 = new Object(); // es un atajo para crear un objeto. Es lo mismo que escribir let obj = {}; pero es más largo y menos común.

function Usuario(){
    this.nombre = "Juan"; // this se refiere al objeto que se va a crear
}

let usuario = new Usuario(); // se crea un nuevo objeto a partir de la constructor function
console.log(usuario.constructor); // [Function: Usuario]