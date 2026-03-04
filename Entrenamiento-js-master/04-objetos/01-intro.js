
// esto es programacion orientada a objetos (POO) en JavaScript. Un objeto es una colección de propiedades y métodos que representan una entidad o concepto del mundo real. En este caso, estamos creando un objeto llamado "user" que tiene varias propiedades como "correo", "nombre", "direccion" y "activo". Además, el objeto tiene un método llamado "recuperarPassword" que es una función vacía, pero podría contener código para recuperar la contraseña del usuario.

let user ={
    correo: "juanesteban@outlook.com",
    nombre: "Juan Esteban",
    direccion: {
        calle: "Calle 123",
        ciudad: "Bogotá",
        pais: "Colombia"
    },
    activo: true,
    recuperarPassword: function() {
         console.log('Recupendado clave.....');
    
    },  // es una función vacía, pero podría contener código para recuperar la contraseña del usuario
       
    
};

        
     