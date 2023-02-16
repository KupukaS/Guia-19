/*EJERCICIO 02
Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio
*/


let radio = prompt("Ingrese el valor del radio de la circunferencia:");
let area = Math.PI * radio ** 2;
let perimetro = 2 * Math.PI * radio;

console.log("El área de la circunferencia es: " + area);
alert("El área de la circunferencia es: " + area);
console.log("El perímetro de la circunferencia es: " + perimetro);
alert("El perímetro de la circunferencia es: " + perimetro);
