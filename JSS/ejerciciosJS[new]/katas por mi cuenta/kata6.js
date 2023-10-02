function duplicateCount(text){
     const counter  = {}
     
    const c = []
     const str = text.toUpperCase()
     
     for(l of str){
         if(counter[l]){
            counter[l]++
        }
        else {counter[l] = 1}}
        
        let count = 0

    for (const n in counter){
        if (counter[n] > 1 ) {
              count++}}

          console.log(counter)
       console.log(count)  
       
return count
  }

  const result = duplicateCount('Indivisibilities')
  console.log(result)