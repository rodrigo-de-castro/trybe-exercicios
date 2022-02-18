const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const verificaLetras = (acc, element) => {
        let cont = 0;
        for (let index = 0; index < element.length; index +=1) {
            if (element[index] === "a" || element[index] === "A") {
                cont += 1;
            }
        } return cont + acc
    }
    return names.reduce(verificaLetras, 0)
  }

  console.log (containsA());