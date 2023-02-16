/*
Escribir una función flecha que reciba una palabra y la devuelva al revés.
*/

let palabra = prompt("Ingrese una palabra: ");
let arr = palabra.split();

const revertir = (palabra) => palabra.split("").reverse().join("");

console.log(revertir(palabra));
alert(revertir(palabra));



