function solution(str, ending){
    let  str2 = str.split("").reverse().join("");
    const str3 = str2.slice(0,ending.length)
    const toComparate = str3.split("").reverse().join("") 
    if (ending === toComparate){
        return true
    }
    else{return false}
    
  }

// separo las letras le doy la vuelta y las vuelvo a unir, asi con el comando slice puedo borrar y dejar tantas letras como el ending tenga, lo vuelvo a separar y dar la vuelta para que quede en el mismo orden que al principio solo que sin las letras que me sobran a la hora de comparar

  const result = solution('abcde','cde')
  console.log(result)