const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva', 'Melancia', 'Goiaba', 'Goiaba', 'Pessego', 'Pessego', 'Pessego', 'Pessego' 
  ];

let newBasket = []; 
newBasket[0] = basket[0];
let contador = 0;

  for (let index = 0; index < basket.length; index++){
      for (let j = 0; j<=newBasket.length; j++){
          if (basket[index]==newBasket[j]){
                contador+=1
          }
      } if (contador == 0){
          newBasket.push(basket[index])
      } contador = 0;
  }

let frutas = {};

for (let indices of newBasket){
    frutas[indices] = 0; 
}

for (let indices of newBasket){
    for (let indicios of basket){
        if (indicios == indices){
     frutas[indices] += 1;}
}
}

let mensagem = ""
for (fruits in frutas){
    mensagem = mensagem + frutas[fruits] + " " + fruits + "s" + ", ";
}

mensagem = mensagem.slice(0, -2);
console.log (frutas)
console.log ("Sua cesta possui: " + mensagem + ".")
 