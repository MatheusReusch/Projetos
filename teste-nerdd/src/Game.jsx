import React from "react";
import { Redirect } from "react-router";
import items from "./data";

class Game extends React.Component {
    constructor() {
        super()
        this.conhece = this.conhece.bind(this)
        this.naoConhece = this.naoConhece.bind(this)
        this.resultado = this.resultado.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.state = {
            indice: 0,
            pontuacao: 0,
            segundos: 120,
            resultado: '',
            voltar: 0
        }
    }

    componentDidMount() {
        const nome = this.props.nome
        if (nome === '') {
            alert('Insira um nome')
        }
        setInterval(() => this.setState((prevState, _props) => ({segundos: prevState.segundos - 1})), 1000)
    }

    async handleResult() {
        await this.setState((prevState, _props) => ({pontuacao: prevState.pontuacao + 1}))
        this.setState({resultado: this.resultado()})
        document.getElementById('game').style.display = 'none'
        document.getElementById('game2').style.display = 'none'
    }

    conhece() {
        if(this.state.indice < 14) {
            this.setState((prevState, _props) => ({indice: prevState.indice + 1, pontuacao: prevState.pontuacao + 1}))
        }
        if (this.state.indice === 14) {
          this.handleResult()
        }
    }

    naoConhece() {
        if(this.state.indice < 14) {
        this.setState((prevState, _props) => ({indice: prevState.indice + 1}))
        }
        if (this.state.indice === 14) {
            this.setState({resultado: this.resultado()})
            document.getElementById('game').style.display = 'none'
            document.getElementById('game2').style.display = 'none'
          }
    }

    resultado() {
        if (this.state.pontuacao <= 5) {
            const pontuacao = this.state.pontuacao
            setTimeout(() => this.setState({voltar: 1}), 10000)
            return 'Vocẽ precisa melhorar!' + ' Voce conhece ' + pontuacao + '/15'
        }
        else if (this.state.pontuacao > 5 && this.state.pontuacao < 10) {
            const pontuacao = this.state.pontuacao
            setTimeout(() => this.setState({voltar: 1}), 10000)
            return 'Vocẽ está na média!' + ' Voce conhece ' + pontuacao + '/15'
        }
        else if (this.state.pontuacao >= 10) {
            const pontuacao = this.state.pontuacao
            setTimeout(() => this.setState({voltar: 1}), 10000)
            return 'Parabéns! Vocẽ está acima da média!' + ' Voce conhece ' + pontuacao + '/15'
        }
    }
    
    render() {
        const nome = this.props.nome
        
      return (
        <>
        <h1 data-testid='result' id='result'>{this.state.resultado}</h1>
        <section id='game'>
          {this.state.voltar === 1 ? <Redirect to='/'/> : ''}
          <h1 data-testid='title2' id='h1s'>Teste Nerd</h1>
          <p data-testid='sorteNome' id='p'>{this.state.segundos === 0 ? <Redirect to='/'/> : 'Boa sorte, ' + nome}</p>
          <h2>{this.state.indice === 14 ? 'Quem é este personagem?' : ''}</h2>
          <img className='img' src={items[this.state.indice].image}></img>
          <h2>{this.state.indice + 1}/{items.length}</h2>
        </section>
        <section id='game2'>
        <button onClick={this.conhece} className='botoes'>{this.state.indice === 14 ? 'Naruto' : 'Conheço'}</button>
        <button onClick={this.naoConhece} className='botoes2'>{this.state.indice === 14 ? 'Goku' : 'Não Conheço'}</button>
        <h2 data-testid='timer' id='timer'>{this.state.segundos} segundos restantes</h2>
        </section>
        </>
      )
    }
}

export default Game
