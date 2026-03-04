// break continue es una estructura de control de flujo que se utiliza para modificar el comportamiento de los bucles.

// break se utiliza para salir de un bucle antes de que se complete su ejecución. Cuando se encuentra una declaración break dentro de un bucle, el programa sale inmediatamente del bucle y continúa con la siguiente línea de código después del bucle.

let i = 0;
while (i < 10) {
    i++;
    if(i === 2) {
        continue;

    }

    if(i === 5) {
        break;
    }
    console.log(i);
}


// SE USA  FOR  , FOR IN , FOR OF  , WHILE , DO WHILE