class SmallestIntegerFinder {
    findSmallestInt(x) {
      let number = x[0]
          for( n of x){
              if ( n < number){
                  number = n }
  
          }
        return number
      }
  }
const prueba = new SmallestIntegerFinder()

console.log(prueba.findSmallestInt([8, 10 , -30  ,2 ]))