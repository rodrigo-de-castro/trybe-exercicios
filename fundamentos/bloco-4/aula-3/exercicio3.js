
let asteriscos = "";
let espacos = "";
let n = 5;


for (let linha = (n-1); linha >= 0 ; linha -=1) {
    for (let i = linha; i>0; i-=1){
    espacos = espacos + " ";
    }
    asteriscos = asteriscos + "*";
    console.log(espacos + asteriscos);
    espacos = "";
    } 