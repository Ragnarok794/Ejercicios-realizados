function repeatStr(n,s){
    const repeatStr = []
    for(let i = 0; i < n; i++){
        repeatStr.push(s)
    }
    return repeatStr.join('')
}



const example = repeatStr(8,'pollas')
console.log(example)