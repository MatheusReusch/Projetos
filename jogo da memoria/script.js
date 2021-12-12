function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    //var duration = 60 * 5; // Converter para segundos
        //display = document.querySelector('#timer'); // selecionando o timer
    //startTimer(duration, display); // iniciando o timer
};

const botao1 = document.getElementById('botao1')
function regressiva() {
    localStorage.setItem('count', 1)
    let header = document.getElementById('header')
    let nome = document.getElementById('seuNome')
    let input = document.getElementById('input1')
    if (input.value === '') {nome.innerHTML = 'Insira seu Nome'}
    else {
    header.style.display = 'none'    
    var duration = 60 * 5; // Converter para segundos
    display = document.querySelector('#timer');
    startTimer(duration, display);
    nome.innerHTML = input.value + ' - ';
    for (let i = 0; i < 25; i += 1) {
    let divspai = document.getElementById('jogo')
    let divs = document.createElement('img')
    divs.src = 'rosa.jpg'
    divs.classList = 'pecas'
    divspai.appendChild(divs)
    function img(event) {
      let alvo = event.target;
      for (let i = 0; i < 25; i += 1) {
      if (localStorage.getItem('count') >= 3) {document.getElementsByClassName('pecas')[i].src = 'rosa.jpg'}
    }
    if (localStorage.getItem('count') >= 3) {localStorage.setItem('count', 1)}
      let numero = randomIntFromInterval(1, 5)
      if (numero === 1) {alvo.src = 'girafa.jpg'; localStorage.setItem('count', localStorage.getItem('count') - (-1))}
      if (numero === 2) {alvo.src = 'zebra.jpg'; localStorage.setItem('count', localStorage.getItem('count') - (-1))}
      if (numero === 3) {alvo.src = 'hipopotamo.jpg'; localStorage.setItem('count', localStorage.getItem('count') - (-1))}
      if (numero === 4) {alvo.src = 'tigre.jpg'; localStorage.setItem('count', localStorage.getItem('count') - (-1))}
      if (numero === 5) {alvo.src = 'baleia.jpg'; localStorage.setItem('count', localStorage.getItem('count') - (-1))}   
    }
    divs.addEventListener('click', img)
  }
 }
}
botao1.addEventListener('click', regressiva)