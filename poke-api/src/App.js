import './App.css';
import pokemons from './data';
import Pokemons from './Pokemons';
  
function App() {
  return (  <>
    <section id='antesheader'>
      <h3>Sobre</h3>
      <h1>Matheus Reusch</h1>
      <h3>GitHub e Linkedin</h3>
    </section>
    <header id='header'>
    <h1 id='h1'>Search Pokemon</h1>
    <input id='input' placeholder='Ex: Charmander' type='text'></input>
    <button id='btn'>Pesquisar</button>
    <button id='btn2'>Todos</button>
    </header>
    <section id='pokemonss'>
      < Pokemons pokemons={pokemons} />
    </section>
    <section id='pokemom'>
    <h2>Procurar outro Pokemon</h2> <br></br>
    <input placeholder='Ex: Dragonite' id='input2'></input>
    <button id='btn3'>Procurar</button>
    </section>
    <p id='p'>.</p>  
    </>
  );
}

export default App;
