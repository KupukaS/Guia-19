/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.
*/

let numeros = [];
let num;
do {
    num = parseInt(prompt("Ingrese un número:"));
    if (!isNaN(num)) {
        numeros.push(num);
    }
} while (num !== 0);

if (numeros.length > 0) {
    let suma = 0;
    let minimo = numeros[0]; // inicializamos con el primer valor ingresado
    let maximo = numeros[0]; // inicializamos con el primer valor ingresado
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        if (numeros[i] !== 0) { // nos saltamos el cero en la búsqueda del mínimo
            if (numeros[i] < minimo) {
                minimo = numeros[i];
            }
        }
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    let promedio = suma / numeros.length;
    alert(`La suma de los números es: ${suma}`);
    alert(`El promedio de los números es: ${promedio}`);
    alert(`El número mínimo ingresado es: ${minimo}`);
    alert(`El número máximo ingresado es: ${maximo}`);
} else {
    alert("No se ingresaron números");
}
