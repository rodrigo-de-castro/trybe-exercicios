let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var contadorImpares = 0; 

for (var index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0){
        contadorImpares += 1
    }
}

if (contadorImpares > 0) {
    console.log (contadorImpares)
} else {
    console.log ("nenhum valor ímpar encontrado")
}