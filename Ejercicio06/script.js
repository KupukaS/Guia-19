/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.
*/
let num = prompt("Ingrese un número entero:");

if (isNaN(num) || !Number.isInteger(Number(num))) {
    console.log("Debe ingresar un número entero válido");
    alert("Debe ingresar un número entero válido");
} else if (num == 0) {
    console.log("El número no es par ni impar");
    alert("El número no es par ni impar");
} else if (num % 2 == 0) {
    console.log(`El número ${num} es par`);
    alert(`El número ${num} es par`);
} else {
    console.log(`El número ${num} es impar`);
    alert(`El número ${num} es impar`);
}
