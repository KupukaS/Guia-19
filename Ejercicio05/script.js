/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
*/

/* //METODO IF

// Pedir al usuario los dos números y la operación deseada
let num1 = parseInt(prompt('Introduce el primer número:'));
let num2 = parseInt(prompt('Introduce el segundo número:'));
let operacion = prompt('Introduce la operación deseada (S, R, M o D):');

// Realizar la operación correspondiente según el valor de la variable operacion
let resultado;
if (operacion === 'S' || operacion === 's') {
    resultado = num1 + num2;
} else if (operacion === 'R' || operacion === 'r') {
    resultado = num1 - num2;
} else if (operacion === 'M' || operacion === 'm') {
    resultado = num1 * num2;
} else if (operacion === 'D' || operacion === 'd') {
    resultado = num1 / num2;
} else {
    // Si la operación introducida es incorrecta, mostrar un mensaje de error
    console.error('Operación no válida');
    resultado = 'ERROR';
}

// Mostrar el resultado por consola
console.log('El resultado de la operación es: ' + resultado);
alert('El resultado de la operación es: ' + resultado);

*/

//METODO SWITCH

let num3 = parseInt(prompt("Ingrese el primer número: "));
let num4 = parseInt(prompt("Ingrese el segundo número: "));
let operacion2 = prompt("Ingrese la operación que desea realizar (S, R, M, D): ");

switch (operacion2.toUpperCase()) {
    case 'S':
        alert(`El resultado de la suma es: ${num3 + num4}`);
        break;
    case 'R':
        alert(`El resultado de la resta es: ${num3 - num4}`);
        break;
    case 'M':
        alert(`El resultado de la multiplicación es: ${num3 * num4}`);
        break;
    case 'D':
        alert(`El resultado de la división es: ${num3 / num4}`);
        break;
    default:
        alert("Operación inválida. Por favor ingrese S, R, M o D.");
        break;
}
