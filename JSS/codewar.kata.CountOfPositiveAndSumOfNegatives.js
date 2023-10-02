function countPositivesSumNegatives(input) {
    if(!input  || input.length === 0){
        return []
    }
    let count = 0
    let sum = 0
    for (x of input){
        if (x > 0){
         count++
        }
        else{sum += x}
    }
    if (count == 0 && sum == 0)
    return []
    else{
    return  [count, sum]}
  }

  console.log(countPositivesSumNegatives([45,-2,-4-7, 7]))