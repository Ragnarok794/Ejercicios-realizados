function generateHashtag (str) {
    const words = str.split(' ')
    const Words =[]
    for( w of words){
      Words.push(w.charAt(0).toUpperCase() + w.slice(1))
    }
    const sentence = Words.join('')
    if (sentence.length > 140 || sentence.length === 0){return false}
    else{
    return '#'+sentence}
}


console.log(generateHashtag('Victimas de novias abusadoras'))