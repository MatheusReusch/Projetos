
import './App.css';

function App() {
  return (
    <>
      <header id='header'>
        <h1>Bomb Revenge</h1>
        <label htmlFor='input'>Tamanho do campo</label>
        <input id='input' placeholder='Ex: 25' type='number'></input>
        <button id='iniciar'>Iniciar</button>
        <button id='cima' className='mov'>Mover para Cima</button>
        <button id='baixo' className='mov'>Mover para Baixo</button>
        <button id='esquerda' className='mov'>Mover para Esquerda</button>
        <button id='direita' className='mov'>Mover para Direita</button>
      </header>
      <main>
        <section id='game'>

        </section>
      </main>
    </>
  )
}

export default App;
