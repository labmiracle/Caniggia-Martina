/* 
EJERCICIO 4

Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga (str) {}
console.assert (palabraMasLarga('Erase una vez que se era') === 'Erase');

Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula
function primeraMayuscula (str) {}
console.assert (primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');
*/
function palabraMasLarga (str) {
    const palabras = srt.split (" ")
    let palabraMasLarga = " "
    for (let palabra of palabras) {
        if (palabra.length >= palabraMasLarga.length) {
            palabraMasLarga = palabra
        }
    }
    return palabraMasLarga
}

function primeraMayuscula(srt) {
    const palabras = srt.split (" ")
    for (let i = 0; i < palabras.length; i++) {
        const [primeraLetra, ...resto] = palabras[i]
        palabras[i] = primeraLetra.toUpperCase() + resto.join (" ")
    } return palabras.join (" ")
}