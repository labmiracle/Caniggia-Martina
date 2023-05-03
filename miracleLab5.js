/*
EJERCICIO 5

Crea una función que reciba una cadena y la devuelva en camelCase
function camelize (str) {}
console.assert (camelize('Hola a todos que tal') === 'holaATodosQueTal');
*/
function camelize (str) {
    let oraciones = str.split (" ");
    let letraMayuscula = " ";
    let resultado = " ";

    for (let oracion of oraciones) {
        letraMayuscula += oracion[0].toUpperCase() + oracion.substring(1);
    }
    return resultado += letraMayuscula[0].toLowerCase() + letraMayuscula.substring(1);
}

console.log (camelize("Hola a todos que tal"));