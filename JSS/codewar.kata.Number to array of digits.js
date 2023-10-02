function digitize(n) {
        const number = n.toString().split('').reverse()
        let numbers = []
        for (x of number){
            numbers.push(parseInt(x))
        }
        return numbers
       
      
    
}    
const prueba = digitize(54321)
console.log(prueba)