/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.
*/
let limite = parseInt(prompt("Ingresa un valor límite positivo:"));
let suma = 0;
let numero;

while (suma <= limite) {
    numero = parseInt(prompt("Ingresa un número:"));

    // Validamos si el valor ingresado es un número
    if (isNaN(numero)) {
        alert("Debes ingresar un número válido.");
        continue; // volvemos a solicitar otro número
    }

    suma += numero;
}

alert(`La suma de los números introducidos (${suma}) superó el límite inicial de ${limite}.`);
