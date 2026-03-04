// switch es una estructura de control de flujo que permite ejecutar diferentes bloques de código en función del valor de una expresión. Es similar a una serie de sentencias if-else, pero puede ser más legible y eficiente en algunos casos.

// sintaxis: 

 let accion = "listar";

 switch (accion) {
    case "listar":
        console.log("ACCIÓN: LISTAR");
        break; // el break es necesario para evitar que se ejecuten los siguientes casos    
    case "guardar":
        console.log("ACCIÓN: GUARDAR");

 }

