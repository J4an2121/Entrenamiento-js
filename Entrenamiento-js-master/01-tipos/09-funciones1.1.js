function suma(a){  // a es un parametro de la funcion
    return a + 2;
}

let resultado = suma(3); // arguemntos (3) ) y el valor de retorno es 5

console.log(resultado);

//-------------------------------------------

function nombre(a){
    return a + " Esteban";
}
    
let nombreCompleto = nombre("luciano"); 
console.log(nombreCompleto); 

//------------------------------------------

function archivo(a){
    return  a + " formato";

}

let formatoArchivo = archivo("pdf");
console.log(formatoArchivo);  



//-------------------------

function suma(a,b){ 
    console.log(arguments);
    return a + b;
}

let resultado1 = suma(3,7,10,15,7,9,); // arguemntos (3,7,10,15) ) y el valor de retorno es 10
console.log(resultado1);
console.log(typeof resultado1);
