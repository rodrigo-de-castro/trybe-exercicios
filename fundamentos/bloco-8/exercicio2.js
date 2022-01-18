const sorteio = (numeroApostado, callback) => {
    const numGerado = Math.floor(Math.random()*5) + 1
    if (callback(numeroApostado, numGerado)){
        return `Parabéns você ganhou`
    } return `Tente novamente`
}

const verificaNumero = (num1, num2) => {
    if (num1 === num2){
        return true
    } return false
}

console.log (sorteio(1, verificaNumero))
