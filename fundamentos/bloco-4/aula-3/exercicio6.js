let numeroTestado = 11;
let divisores = [];

for (let i = 1; i<=12; i+=1) {
    if (numeroTestado%i == 0){
divisores.push (i);
    }
}

if (divisores.length <= 2) {
    console.log ("O número " + numeroTestado + " é primo")
} else {
    console.log ("O número " + numeroTestado + " não é primo")
}

