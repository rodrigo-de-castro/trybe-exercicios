

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ("Bem-vinda, " + info.personagem)

  info.recorrente = 'Sim';

  console.log (info)

  for (let chaves in info){
    console.log (chaves)
}

  for (let keys in info){
      console.log (info[keys])
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
for (let infos in info) {
    if (info[infos] === info2[infos]){
        console.log ("Ambos " + infos + "s") 
    } else {
        console.log (info[infos] + " e " + info2[infos])
    }
}  

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log ("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)

leitor.livrosFavoritos.push (
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      } 
)

console.log (leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")