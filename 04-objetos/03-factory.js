// factory es una función que devuelve un objeto. 
// Es una forma de crear objetos de manera más flexible y reutilizable. En lugar de crear un objeto directamente, podemos usar una función para generar objetos con diferentes propiedades y métodos según sea necesario.


function createUser( correo, nombre) {   // La función createUser es una fábrica que crea objetos de usuario. Toma dos parámetros: correo y nombre, que se utilizan para establecer las propiedades del objeto de usuario que se va a crear.
    return {
       
        correo,
        nombre,
        activo: true,
        recuperarPassword: function() {
             console.log('Recupendado clave.....');
        },
    };

}

let user1 = createUser('juan ', 'juan@outlook.com'); // Aquí estamos utilizando la función createUser para crear un nuevo objeto de usuario llamado user1. Le pasamos los valores 'juan' y '
let user2 = createUser('maria', ' maria@gm,mial.com');

console.log(user1);
console.log(user2);