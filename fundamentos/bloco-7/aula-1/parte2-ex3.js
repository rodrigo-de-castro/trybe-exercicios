const botao = document.querySelector('#click-btn');
const contador = document.querySelector('#counter');
let clickCount = 0;

botao.addEventListener('click', () => {
    clickCount += 1;
    contador.innerText = clickCount
})
