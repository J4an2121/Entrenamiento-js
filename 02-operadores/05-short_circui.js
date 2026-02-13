// short circui es 
// una tecnica de evaluacion de expresiones logicas que permite optimizar el rendimiento al evitar evaluar operandos innecesarios.

//JavaScript deja de evaluar una expresión lógica tan pronto como ya conoce el resultado.

 let nombre = "Juan";

let nombreFinal = nombre || "Invitado";
console.log(nombreFinal); // "Juan"