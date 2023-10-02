function squareDigits(num){
    const digitsString = num.toString()
    const digits = digitsString.split("")
    const squareResults = []
    for (x of digits){
        squareResults.push(x * x)
        
    }

    
  return parseInt(squareResults.join(""));
}

const result = squareDigits(765)
console.log(result)