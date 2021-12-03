function somatorio (n){
    let acumulador = 0;
    for (let i = 1; i<= n; i+=1){
        acumulador += i
    }
return acumulador
}

console.log (somatorio(5));