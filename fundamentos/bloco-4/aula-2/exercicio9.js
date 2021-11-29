let lista = [];

for (var i = 1; i <= 25; i+=1){
lista.push (i);
lista[i-1] = lista[i-1]/2
}

console.log (lista);