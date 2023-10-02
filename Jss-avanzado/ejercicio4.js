//4.A Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el
// Haz varios ejemplos y compruebalos.
// Sugerencia de función:
// Ej array:
const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
    ];

function findArrayIndex(array, text) {return index = array.indexOf(text)
}
    console.log(findArrayIndex(mainCharacters,"Rey" ))

// Ejercicio [4- b]
// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.
// Finalmente retorna el array.
// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

function removeItem(array, text){
    const index = findArrayIndex(array,text)
    return array.splice(index,1)
}
removeItem(mainCharacters,"Anakin")
console.log(mainCharacters)
