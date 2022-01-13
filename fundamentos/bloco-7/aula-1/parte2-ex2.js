const longestWord = phrase => {
    const arrayWords = phrase.split (' ');
    let qtdLetras = 0;
    let position = 0;
    for (let i = 0; i<arrayWords.length; i+=1){
        if (arrayWords[i].length > qtdLetras) {
            qtdLetras = arrayWords[i].length
            position = i
        }
    } return arrayWords[position] 
}

console.log (longestWord ('o rato roeu a roupa do rei de roma'));