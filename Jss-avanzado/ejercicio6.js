// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:
const fantasticFour = [
"La antorcha humana",
"Mr. Fantástico",
"La mujer invisible",
"La cosa",
];

function swap(array ,a , b){
    return [array[a],array[b]] = [array[b],array[a]]
}

const test = swap(fantasticFour,0,2)

console.log(fantasticFour)