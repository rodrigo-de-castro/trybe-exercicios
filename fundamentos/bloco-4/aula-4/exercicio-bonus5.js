let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

console.log ("Bloco 1:")  
for (let morador = 0; morador<moradores.blocoUm.length; morador+=1){
    console.log (moradores.blocoUm[morador].nome + " " + moradores.blocoUm[morador].sobrenome)
}

console.log ("Bloco 2:")  
for (let morador2 = 0; morador2<moradores.blocoDois.length; morador2+=1){
    console.log (moradores.blocoDois[morador2].nome + " " + moradores.blocoDois[morador2].sobrenome)
}
