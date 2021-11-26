let xadrez = "dama" 

switch (xadrez.toLocaleLowerCase()){
case "peao":
    console.log ("horizontais e verticais");
    break;
case "bispo":
    console.log ("diagonais");
    break;
case "torre":
    console.log ("horizontais e verticais");
    break;
case "cavalo":
    console.log ("horizontais e verticais em L");
    break;
case "dama":
    console.log ("horizontais, verticais e diagonais");
    break;
case "rei":
    console.log ("horizontais, verticais");
    break;
default: console.log ("Peça inválida!");
break;};