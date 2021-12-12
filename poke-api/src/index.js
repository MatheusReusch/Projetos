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

const button = document.getElementById('btn')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
let array = []
for (let i = 0; i < document.getElementsByClassName('pokemon').length; i += 1) {
   array.push(document.getElementsByClassName('pokemon')[i])
}

function filtrar () {
  let final = array.find((field) => field.id === input.value)
  if (final === undefined) {alert('Insira um nome válido')}
  else {
  while (document.getElementById('pokemonss').children.length > 0) {
    document.getElementById('pokemonss').firstChild.remove()
  }
  document.getElementById('pokemonss').appendChild(final)
}
}

function tudo () {
  document.getElementById('pokemonss').innerHTML = localStorage.getItem('pokemons')
}

function newPokemon (object) {
  let li1 = document.createElement('li')
  li1.innerHTML = object.name.toUpperCase()
  li1.id = 'namedopoke'
  let li15 = document.createElement('li')
  li15.innerHTML = object.types[0].type.name.toUpperCase()
  let li2 = document.createElement('img')
  li2.src = object.sprites.front_default
  document.getElementById('pokemom').appendChild(li1)
  document.getElementById('pokemom').appendChild(li15)
  document.getElementById('pokemom').appendChild(li2)
}

function procurar () {
  if (document.getElementById('pokemom').children.length > 4) {
    while (document.getElementById('pokemom').children.length > 4) {
      document.getElementById('pokemom').lastChild.remove()
    }
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${input2.value}`

  return fetch(url)
  .then((response) => response.json())
  .then((data) => {
    newPokemon(data)
  })
  .catch((e) => {
    let h2 = document.createElement('h2')
    h2.innerText = 'O nome inserido não existe'
    h2.style.color = 'red'
    document.getElementById('pokemom').appendChild(h2)
  })
}

 window.onload = () => {
  localStorage.setItem('pokemons', document.getElementById('pokemonss').innerHTML) 
  button.addEventListener('click', filtrar)
  button2.addEventListener('click', tudo)
  button3.addEventListener('click', procurar)
  }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
