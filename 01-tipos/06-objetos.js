// son tipos de referencia, lo que significa que almacenan una referencia a un valor en lugar de almacenar el valor directamente. Los objetos pueden contener propiedades y métodos, lo que los hace muy versátiles para representar datos complejos y comportamientos./**


// Personaje de tv

let nombre ="Tanjiro Kamado";
let anime = "Demon Slayer";
let edad = 15;


// objeto literal estamos creando un objeto con estas sintaxis{}
let personaje = {          
    nombre: "Tanjiro Kamado", // llaver valor o propiedad valor
    anime: "Demon Slayer",
    edad: 15,

};

console.log(personaje);
console.log(personaje.nombre); // accediendo a la propiedad nombre del objeto personaje
console.log(personaje["anime"]); // accediendo a la propiedad anime del objeto personaje usando corchetes

// cambiar el valor de una propiedad

personaje.edad =  40;


//eliminar una propiedad
delete personaje.anime;

console.log(personaje);
