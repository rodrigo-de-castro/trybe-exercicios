/*function palindromo (palavra){

let invertida = "";

for (let i = 0; i < palavra.length; i+=1){
    invertida = palavra[i] + invertida;
}

if (invertida == palavra) {
    return true
} else {
    return false
}

}

console.log(palindromo('desenvolvimento'));
console.log(palindromo('arara'));*/

function palindromo (palavra){

    let invertida = palavra.split('').reverse().join('');

    if (invertida == palavra) {
        return true
    } else {
        return false
    }
    
    }
    
    console.log(palindromo('desenvolvimento'));
    console.log(palindromo('arara'));