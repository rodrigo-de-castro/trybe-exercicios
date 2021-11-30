let asteriscos = "";
let espacos = "";
let n = 9;


for (let linha = (n-1); linha >= 0 ; linha -=2) {
    for (let i = linha; i>0; i-=2){
    espacos = espacos + " ";
    }
    asteriscos = asteriscos + "*";
    console.log (espacos + asteriscos + espacos);
    asteriscos = asteriscos + "*";
    espacos = "";
    } 