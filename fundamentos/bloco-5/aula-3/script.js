function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  

  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
/*Exercício 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */
  
function createDaysOfTheMonth () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
    const monthDayList = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index+=1) {
        let days2 = dezDaysList[index];
        let dayListItem2 = document.createElement('li');
        dayListItem2.innerHTML = days2;
        monthDayList.appendChild(dayListItem2);
        dayListItem2.className = 'day'
        if (days2 == 24 || days2 == 31 ){
            dayListItem2.className = 'day holiday'
        }
        if (days2 == 4 || days2 == 11 || days2 == 18 || days2 == 25 ){
            dayListItem2.className = 'day friday'
        }
        if (days2 == 25 ){
            dayListItem2.className = 'day friday holiday'
        }
        
    }
  }
  createDaysOfTheMonth()

/*Exercício 2 
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/
    const buttonParent = document.querySelector('div.buttons-container');

function createButton (p1) {
    let botao = document.createElement('button');
    botao.innerHTML = p1;
    buttonParent.appendChild(botao);
    botao.id = 'btn-holiday'
}

createButton('Feriados');

    

/*Exercício 3 
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 .*/


/*function adicionaFeriados(){
    let botaoFeriado = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    botaoFeriado.addEventListener('click', clickFeriado);
    let bgColor = 'rgb(238,238,238)';
    let otherColor = 'green';
    
        
    function clickFeriado(){
        for (let index = 0; index < holidays.length; index+=1){
        if (holidays[index].style.backgroundColor === bgColor){     
        holidays[index].style.backgroundColor = 'green'
    } else {
        holidays[index].style.backgroundColor = bgColor
    }}} 
}

adicionaFeriados(); 
*/

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', myFunction) 
    
    function myFunction()
    {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    }
  };
  
  displayHolidays();


/*Exercício 4 
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 .*/
 
 function createButton2 (p2) {
    let botao2 = document.createElement('button');
    botao2.innerHTML = p2;
    buttonParent.appendChild(botao2);
    botao2.id = 'btn-friday'
}

createButton('Sexta-feira');    

/*Exercício 5 
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
 .*/

function sextouA() {
    let botaoSextas = document.getElementById('btn-friday');
    let sextas = document.querySelectorAll('.friday');
    
    let aux = [];
    //for (index4 = 0; index4 < sextas.length; index4 +=1){
       //let datasss = sextas[0].innerHTML
}
sextouA();

//botaoSextas.addEventListener('click', clickSextas);