/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.
*/


let respuesta = prompt("Ingrese S para Sí o N para No");



if (respuesta === respuesta.toLowerCase()) {
    console.log("Ingreso incorrecto(minúsculas)");
    console.log("Ingreso incorrecto(minúsculas)");
} else {

    if (respuesta === "S" || respuesta === "N") {
        console.log("CORRECTO");
        alert("CORRECTO");
    } else {
        console.log("INCORRECTO");
        alert("INCORRECTO");
    }
}
