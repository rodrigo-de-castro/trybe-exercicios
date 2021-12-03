function maisRepete (array) {

let arrayAux = []
  
for (let k=0; k<array.length; k++){
    arrayAux[k] = 0;
}

for (let i=0; i<array.length; i+=1){
    for (let j=0; j<array.length; j+=1){
        if (array[i]==array[j]){
            arrayAux[i] += 1
        }
    }
}

let maiorIndice = 0;
let maiorNumero = 0;  

for (let z = 0; z< arrayAux.length; z+=1){
    if (arrayAux[z]>maiorNumero){
        maiorNumero = arrayAux[z]
        maiorIndice = z
    }
}
return array[maiorIndice]

}

console.log (maisRepete([2, 3, 2, 5, 8, 2, 3]))