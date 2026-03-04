// que es for in

// for in es una estructura de control de flujo que se utiliza para iterar sobre las propiedades enumerables de un objeto. A diferencia de for of, que se utiliza para iterar sobre elementos de un arreglo o colección, for in se enfoca en las claves o propiedades de un objeto. 
// sintaxis: for (variable in objeto) { // código a ejecutar }

let persona = { 
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}; console.log(persona);

for (let propiedad in persona) {
    console.log(propiedad); // imprime las claves del objeto
    console.log(persona[propiedad]); // imprime los valores de las claves del objeto
}   



// cuando usar for in y for of

// for in se utiliza para iterar sobre las propiedades de un objeto, mientras que for of se utiliza para iterar sobre los elementos de un arreglo o colección. 
// for in es útil cuando queremos acceder a las claves o propiedades de un objeto, mientras que for of es útil cuando queremos acceder a los valores de un arreglo o colección.