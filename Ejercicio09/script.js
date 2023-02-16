/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().
*/

/*METODO CON charAt()
let frase = prompt("Ingrese una frase: ");
let fraseConEspacios = "";

for (let i = 0; i < frase.length; i++) {
    fraseConEspacios += frase.charAt(i);
    if (i !== frase.length - 1) {
        fraseConEspacios += " ";
    }
}

console.log(fraseConEspacios);
alert(fraseConEspacios);
*/

//METODO CON substring()
let frase = prompt("Ingrese una frase:");
let resultado = "";

for (let i = 0; i < frase.length; i++) {
    resultado += frase.substring(i, i + 1) + " ";
}

console.log(resultado.trim());
alert(resultado);
