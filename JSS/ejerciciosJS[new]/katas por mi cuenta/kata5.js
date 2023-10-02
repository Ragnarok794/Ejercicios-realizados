function filter_list(l) {
const newList = []
    for(n of l){
        if (typeof n === "number"){
            newList.push(n)
        }
    }

  return newList
}


const result= filter_list([1,2,'a','b,',3])
console.log(result)