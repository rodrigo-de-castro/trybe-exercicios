function menorIndice (lista) {
    let menorNumero = lista[0]
    let menorIndice = 0
    for (let i = 0; i <= lista.length; i+=1) {
    if (lista[i]<menorNumero) {
        menorNumero = lista[i];
        menorIndice = i;
    }
    }
    return menorIndice
    }
    console.log (menorIndice([2, 4, 6, 7, 10, 0, -3]))