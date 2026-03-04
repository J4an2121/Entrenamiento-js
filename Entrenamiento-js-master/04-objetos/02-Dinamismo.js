// Dinamismo en objetos es la capacidad de agregar, modificar o eliminar propiedades de un objeto en tiempo de ejecución. Esto es posible 
// gracias a la naturaleza flexible de los objetos en JavaScript.
const user = { id: 1,};

user.name = "Juan Esteban"; // Agregar una nueva propiedad
user.guardar = function() {
    console.log('Guardando usuario.....');
}

user.guardar(); // Llamar al método guardado


// delete user.name; // Eliminar una propiedad 
// delete user.guardar; // Eliminar un método

// console.log(user); // Ver el objeto después de las modificaciones

Object.freeze(user); // Congelar el objeto para evitar modificaciones futuras