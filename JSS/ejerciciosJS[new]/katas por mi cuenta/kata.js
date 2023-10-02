function arrayDiff( a , b){
const newArray = []
for ( x of a){
   
        if (!b.includes(x) ){
        newArray.push(x)
    }
}
return newArray
}


const result = arrayDiff([1,2,3,4,5,6,7,8],[2,3,8,6])

console.log(result )