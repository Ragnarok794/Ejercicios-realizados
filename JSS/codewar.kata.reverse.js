const test = 'Hey fellow warriors'
function spinWords(string){
    const words = string.split(' ')
    const reversedWords = words.map(word =>{
    if (word.length >= 5){
      return word.split('').reverse().join('') }
    else{ return word}
  })
  const reversedString = reversedWords.join(' ')

  return reversedString
  }

const reversedString = spinWords(test)

  console.log(reversedString)