function verificaFimPalavra (word, ending) {
let tamanhoEnding = ending.length;
let final = "";      
    for (let i = word.length - tamanhoEnding; i<word.length; i+=1){
        final += word[i]
    }

if (final == ending) {
    return true
} else {
    return false
}
    
}

console.log (verificaFimPalavra('trybe','be'))
console.log (verificaFimPalavra('joaofernando','fernan'))