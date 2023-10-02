// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
// caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor.', 'IronMan', 'Captain A.', 'Spiderman.', 'Captain M.'];
function findLongestWord(param) {
    let longestWordLength = 0;
    const longestWord = [];
    for(let i = 0; i < param.length; i++ ){
        let word = param[i]
    if (word.length > longestWordLength){
        longestWordLength = word.length
        longestWord.pop()    }
    if (word.length = longestWordLength){
        longestWord.push(word)  }
    }
    return longestWord
}

LongestWord = findLongestWord(avengers);

console.log('La palabra  o palabras mas largas son:', LongestWord);