function positiveSum(arr){
      let result = 0
    for(number of arr){
       
        if(number >= 0){
            result += number
        }
    }
    return result
}
const numbers = [1,2,3,4,-5]
const result = positiveSum(numbers);
console.log(result)