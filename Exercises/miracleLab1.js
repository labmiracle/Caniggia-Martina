/*
EJERCICIO 1

Escribe una función que reciba los argumentos:
par y strokes
y devuelve la cadena correcta de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad;
de arriba (más alto) a abajo (más bajo):

Strokes  Return
1              "Hole-in-one!"
<= par - 2     "Eagle"
par - 1        "Birdie"
par            "Par"
par + 1        "Bogey"
par + 2        "Double Bogey"
>= par + 3     "Go Home!"

const names = [
    "Hole-in-one!",
    "Eagle","Birdie",
    "Par","Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore (par, strokes) {
    return "Implementar!";
}

golfScore(5, 4);
*/
const names = [
    "Hole-in-one",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore (par, storkes) {
    if (storkes == 1) {
        return names [0]
    } else if (storkes <= par -2) {
        return names [1]
    } else if (storkes == par -1) {
        return names [2]
    }else if (storkes == par) {
        return [3]
    }else if (storkes == par +1) {
        return [4]
    }else if (storkes == par +2) {
        return [5]
    }else if (storkes >= par + 3) {
        return [6]
    }
    
}

console.log (golfScore(5, 4));