// la constructor function es una función que se utiliza para crear objetos. 
// Es una función que se llama con la palabra clave new y que devuelve un objeto.
//  La constructor function se utiliza para crear objetos que tienen las mismas propiedades y métodos.




function Usuario(){
    this.nombre = "Juan"; // this se refiere al objeto que se va a crear
    this.recuperarPassword = function(){
        console.log("Recuperando contraseña...");
    }

    let usuario = new Usuario(); // se crea un nuevo objeto a partir de la constructor function
    console.log(usuario.nombre); // Juan  
    usuario.recuperarPassword(); // Recuperando contraseña... 


}