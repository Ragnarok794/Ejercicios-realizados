// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo
// conforma. Puedes usar este array para probar tu función:
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
    ];
    function repeatCounter(param) {
        const count = {}
      
     for( let i = 0; i= param.length; i++){
        const word = param[i];
        if (count[word]){
            count[word]++;
        }else{
            count[word] = 1
        }
        }
        return count;
    }

    const result = repeatCounter(counterWords)
    console.log(result);