const button = document.getElementById('btn')
const input = document.getElementById('input')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const ol = document.getElementById('ol')
const lis = document.getElementsByTagName('li')

window.onload = () => {
  pegar();
  vai();
}

function add () {
  let li = document.createElement('li')
  li.innerHTML = input.value;
  li.className = 'created'
  ol.appendChild(li)
  li.addEventListener('click', selected)
  li.addEventListener('dblclick', riscar)
  document.getElementById('btn4').addEventListener('click', removeAll)
  salvar(ol.innerHTML)
  input.value = '' 
}

function salvar (param) {
  localStorage.setItem('list', param)
}

function pegar () {
  if (localStorage.getItem('list') !== 'undefined') {
    ol.innerHTML = localStorage.getItem('list')
  }
}

button.addEventListener('click', add)

function selected (event) {
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].className = ''
  }
  const alvo = event.target;
  alvo.className = 'selected'
}

function riscar (event) {
  const alvo = event.target;
  alvo.style.textDecoration = 'line-through'
  alvo.id = 'riscado'
  console.log('riscou')
  salvar(ol.innerHTML);
}

function remove () {
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].className === 'selected') {
      lis[i].remove();
    }
  }
  salvar(ol.innerHTML);
}

function remove25 () {
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].id === 'riscado') {
      lis[i].remove()
      salvar(ol.innerHTML)
    }
  }
}

function remove2 () {
  remove25()
  remove25()
  remove25()
  remove25()
}

function movecima () {
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].className === 'selected') {
      lis[i].className = 'created'
      lis[i - 1].className = 'selected'
    }
  }
}

function movebaixo () {
  let array = [];
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[i].className === 'selected') {
      array.push(i)
    }
  }
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].className = ''
  }
  lis[array[0] + 1].className = 'selected'
}

function vai() {
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].addEventListener('click', selected)
    lis[i].addEventListener('dblclick', riscar)
  }
  button2.addEventListener('click', remove)
  button3.addEventListener('click', remove2)
  document.getElementById('btn4').addEventListener('click', removeAll)
  document.getElementById('btn5').addEventListener('click', movecima)
  document.getElementById('btn6').addEventListener('click',movebaixo)
}

function removeAll () {
  ol.innerHTML = ''
  salvar();
}


