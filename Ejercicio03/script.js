/*EJERCICIO 03
Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.
*/

let edad = prompt("Por favor, ingrese su edad:");
let edadnum = parseInt(edad);
if (isNaN(edadnum)) {
    console.log("Entrada inválida: no es un número");
    alert("Entrada inválida: no es un número");
} else {
    console.log("Su edad es: " + edadnum);
    alert("Su edad es: " + edadnum);

    if (edadnum >= 18) {
        console.log("Usted es mayor de edad");
        alert("Usted es mayor de edad");
    } else {
        console.log("Usted es menor de edad");
        alert("Usted es menor de edad");
    }
}