const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  /*function flatten() {
    // escreva seu código aqui
    const junta = (acc, element) => {
        for (let index = 0; index < element.length; index +=1 ){
            acc.push(element[index])
        } return acc     
    };
 const juntoTudo = arrays.reduce(junta);
 return juntoTudo
}*/

function flatten() {
  // escreva seu código aqui
  const junta = arrays.reduce ((acc, number) => [...acc, ...number]);
return junta
  }

  console.log(flatten())