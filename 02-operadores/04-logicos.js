// AND , OR , NOT

// AND (&&) -> devuelve true si ambos operandos son verdaderos  

//¿Cómo pensarlo?
//Como una regla:

//Para conducir, necesitas ser mayor Y tener licencia.
//Si falta una, no puedes.

let mayorDeEdad = true; 
let tieneLicencia = true;

console.log(mayorDeEdad && tieneLicencia); // 


//¿Cómo pensarlo?
//Como una promo:

//“Puedes entrar con carnet de estudiante O trabajador”
//Con que tengas uno, pasas.

// OR (||) -> devuelve true si al menos uno de los operandos es verdadero

let esEstudiante = false;
let esTrabajador = true;    

console.log(esEstudiante || esTrabajador); // true


//¿Cómo pensarlo?
//Es como decir: “no mayorDeEdad”.

//Si mayorDeEdad es true, entonces “no mayor” es false.


// NOT (!) -> devuelve el valor contrario del operando

let esMayor = !mayorDeEdad;
console.log(esMayor); // false  