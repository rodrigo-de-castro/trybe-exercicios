const fatorial = (number) => {
    let multiplicando = 1;
    for (let i = number; i>=1; i-=1){
        multiplicando = multiplicando * i
    } return multiplicando
}

function fatorial2 (number) {
    if (number == 1){
        return 1;
    } else {
        return number * (fatorial2 (number - 1))
    }
}

const fatorial3 = number => (number == 1) ? `1` : `${number * fatorial3 (number - 1)}`

console.log (` array function: ${fatorial(4)}`)
console.log (` recursividade não simplificada: ${fatorial2(4)}`)
console.log (` recursividade simplificada: ${fatorial3(4)}`)