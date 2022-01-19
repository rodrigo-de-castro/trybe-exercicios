const testCorrection = (rightAnswers, studentAnswers, callback) => {
return callback (rightAnswers, studentAnswers)
}

const corretor = (gabarito, respostas) => {
    let soma = 0
    for (let index = 0; index < gabarito.length; index += 1){
        if (gabarito[index]===respostas[index]){
            soma += 1
        } else if (respostas[index] != 'N.A') {
            soma -= 0.5
        }
    } return soma
}

console.log (testCorrection(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], corretor))