const adicionaNome = nome => `Dev ${nome} na área!`;
const skills = ['Raciocínio Lógico', 'Adaptabilidade', 'Comunicação', 'Comprometimento', 'Empatia'];
const concatenaTudo = frase => `${frase} Minhas cinco principais habilidades são: ${skills.sort()}`;

console.log (concatenaTudo((adicionaNome('Dingo'))));