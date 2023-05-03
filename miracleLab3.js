/*
EJERCICIO 3

Crear una función que reciba:
velocidadCrecimiento,
velocidadDecrecimiento,
y alturaDeseada
como números enteros positivos y devuelvael número de días que tardará la planta en medir la alturaDeseada.

function calcularDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {}
*/
let altura = 0;
let dias = 0;

function calcularDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias ++;
        if (altura >= alturaDeseada)
        break;
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

console.log (calcularDiasCrecimiento ());