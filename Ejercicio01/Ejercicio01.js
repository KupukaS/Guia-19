/*EJERCICIO 01
Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.
*/


let clima = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");

if (clima === "soleado") {
    console.log("El día de hoy está soleado.");
    alert("El día de hoy está soleado.");
} else if (clima === "nublado") {
    console.log("El día de hoy está nublado.");
    alert("El día de hoy está nublado.");
} else if (clima === "lloviendo") {
    console.log("El día de hoy está lloviendo.");
    alert("El día de hoy está lloviendo.");
} else {
    console.log("No ingresaste una respuesta válida.");
    alert("No ingresaste una respuesta válida.");
}
