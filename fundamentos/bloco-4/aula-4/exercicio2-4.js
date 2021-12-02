function maiorQtdCaracteres (nomes) {
maior = nomes[0];
for (let i = 1; i < nomes.length; i+=1){
    if (nomes[i].length > maior.length){
        maior = nomes[i]
    }
}
return maior
}
console.log (maiorQtdCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))