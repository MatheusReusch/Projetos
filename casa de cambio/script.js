function fetchCurrency(moeda) {
    const ol = document.getElementById('ol');
    ol.innerHTML = '';
    const input = document.getElementById('input')
    moeda = input.value;
    const url = `https://v6.exchangerate-api.com/v6/872f8f4d0091e4e4107be83e/latest/${moeda}`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const p = document.getElementById('p')
        p.innerHTML = `Valores referentes a 1 ${data.base_code}`
        let entries = Object.entries(data.conversion_rates);
        entries.map((moedaValor) => {
            let li = document.createElement('li')
            li.innerHTML = `${moedaValor[0]}: ${moedaValor[1]}`
            ol.appendChild(li)
        })
    })
    .catch((error) => {
      p.innerHTML = 'Opa, ocorreu o seguinte erro: ' + error;
    })
}

const button = document.getElementById('btn')
button.addEventListener('click', fetchCurrency)