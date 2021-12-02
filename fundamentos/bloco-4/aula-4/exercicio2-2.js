function maiorIndice (lista) {
let maiorNumero = 0
let maiorIndice = 0
for (let i = 0; i <= lista.length; i+=1) {
if (lista[i]>maiorNumero) {
    maiorNumero = lista[i];
    maiorIndice = i;
}
}
return maiorIndice
}
console.log (maiorIndice([2, 3, 6, 7, 10, 1]))