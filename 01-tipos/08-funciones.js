//son bloques fundamenatales dentro de lac construccion de aplicaciones son procedimientos o pasos se usa funciont  

function saludar(){  // se define la funcion con la palabra reservada function y el nombre de la funcion seguido de parentesis y llaves
    console.log("Hola, bienvenido a mi programa! js");
}

saludar(); // se llama a la funcion para que ejecute su codigo


function suma(){

    return 2 + 3; // la palabra reservada return se utiliza para devolver un valor desde la funcion

}

let resultado = suma();
console.log("El resultado de la suma es:", resultado);



function  farcturas(){

    let facrura1 = 100;
    let facrura2 = 200;

    return facrura1 + facrura2; // la palabra reservada return se utiliza para devolver un valor desde la funcion

}

let resultado_facturas = farcturas();
console.log("El resultado de la suma de las facturas es:", resultado_facturas);