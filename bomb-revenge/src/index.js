import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const input = document.getElementById('input')
const button = document.getElementById('iniciar')
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function gerarCampo () {
  while (document.getElementById('game').children.length > 0) {
    document.getElementById('game').firstChild.remove()
  }
  for (let i = 0; i < input.value; i += 1) {
    let p = document.createElement('li')
    p.className = 'quadrado'
    document.getElementById('game').appendChild(p)
  }
  let img = document.createElement('img')
  img.src = 'https://www.kindpng.com/picc/m/126-1262410_mario-png-super-mario-bros-transparent-png.png'
  img.id = 'imagem'
  document.getElementById('game').lastChild.appendChild(img)
  gerarBombas()
  gerarBombas()
  gerarBombas()
  gerarEstrela()
}

function gerarEstrela () {
  const indBomba1 = randomIntFromInterval(0, document.getElementById('game').children.length - 1)
  let bomba = document.createElement('img')
  bomba.src = 'https://cdn.pixabay.com/photo/2013/07/12/13/52/super-mario-brothers-147465_1280.png'
  bomba.id = 'imagem'
  let adc = document.createElement('p')
  adc.innerText = ''
  document.getElementsByClassName('quadrado')[indBomba1].appendChild(bomba)
  document.getElementsByClassName('quadrado')[indBomba1].appendChild(adc)
}

function gerarBombas() {
  const indBomba1 = randomIntFromInterval(0, document.getElementById('game').children.length - 1)
  let bomba = document.createElement('img')
  bomba.src = 'https://www.kindpng.com/picc/m/117-1176021_alarm-bonb-vetoregratis-super-mario-world-bomba-do.png'
  bomba.id = 'imagem'
  let adc = document.createElement('p')
  adc.innerText = ''
  document.getElementsByClassName('quadrado')[indBomba1].appendChild(bomba)
  document.getElementsByClassName('quadrado')[indBomba1].appendChild(adc)
}

button.addEventListener('click', gerarCampo)
function moveCima () {
  let array = 0
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length === 1) {
      array = i
    }
  }
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length > 0 && document.getElementsByClassName('quadrado')[i].children.length < 2) {
      document.getElementsByClassName('quadrado')[i].firstChild.remove()
    }
  }
  let img = document.createElement('img')
  img.src = 'https://www.kindpng.com/picc/m/126-1262410_mario-png-super-mario-bros-transparent-png.png'
  img.id = 'imagem'
  document.getElementsByClassName('quadrado')[array - 5].appendChild(img)
}

function moveBaixo () {
  let array = 0
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length === 1) {
      array = i
    }
  }
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length > 0 && document.getElementsByClassName('quadrado')[i].children.length < 2) {
      document.getElementsByClassName('quadrado')[i].firstChild.remove()
    }
  }
  let img = document.createElement('img')
  img.src = 'https://www.kindpng.com/picc/m/126-1262410_mario-png-super-mario-bros-transparent-png.png'
  img.id = 'imagem'
  document.getElementsByClassName('quadrado')[array + 5].appendChild(img)
}

function moveEsquerda () {
  let array = 0
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length === 1) {
      array = i
    }
  }
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length > 0 && document.getElementsByClassName('quadrado')[i].children.length < 2) {
      document.getElementsByClassName('quadrado')[i].firstChild.remove()
    }
  }
  let img = document.createElement('img')
  img.src = 'https://www.kindpng.com/picc/m/126-1262410_mario-png-super-mario-bros-transparent-png.png'
  img.id = 'imagem'
  document.getElementsByClassName('quadrado')[array - 1].appendChild(img)
}

function moveDireita () {
  let array = 0
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length === 1) {
      array = i
    }
  }
  for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
    if (document.getElementsByClassName('quadrado')[i].children.length > 0 && document.getElementsByClassName('quadrado')[i].children.length < 2) {
      document.getElementsByClassName('quadrado')[i].firstChild.remove()
    }
  }
  let img = document.createElement('img')
  img.src = 'https://www.kindpng.com/picc/m/126-1262410_mario-png-super-mario-bros-transparent-png.png'
  img.id = 'imagem'
  document.getElementsByClassName('quadrado')[array + 1].appendChild(img)
}

document.getElementById('cima').addEventListener('click', moveCima)
document.getElementById('baixo').addEventListener('click', moveBaixo)
document.getElementById('esquerda').addEventListener('click', moveEsquerda)
document.getElementById('direita').addEventListener('click', moveDireita)

reportWebVitals();
