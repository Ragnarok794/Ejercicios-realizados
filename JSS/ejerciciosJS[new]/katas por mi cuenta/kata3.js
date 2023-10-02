// function highAndLow(numbers){
//     let highest = Math.min(numbers)
//     let lowest = Math.max(numbers)
//     for (i= 0; i < numbers.length ;i++){
//         const n = numbers[i]
//         if (n > highest){
//             highest = n 
//         }
//         if (n < lowest){
//         lowest = n}

//     }
        
//         return [highest,lowest]
//   }
// const numbers = (1,3,5,7,-8,-9)
//   const result = highAndLow(numbers)

//   console.log(result)

function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number);
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    return `${highest} ${lowest}`;
}

// En la kata los numeros se introducian en un array con "" por lo que era un string, al crear la const numArray ,
//pedimos que separe el array number con split("")y con .map que extraiga esos datos al nuevo array en forma de numeros con (Number)