import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class Game extends React.Component {
    constructor() {
        super()
        this.marcar = this.marcar.bind(this)
        this.state = {
            letra: 'X'
        }
    }

    componentDidMount() {
        const nome = this.props.name
        if (nome === '') {
            alert('Insira um nome')
        }
    }

    redirect() {
        for (let i = 0; i < document.getElementsByClassName('quadrado').length; i += 1) {
            document.getElementsByClassName('quadrado')[i].firstChild.innerText = ''
        }
    }

    marcar(event) {
      if (event.target.innerText === 'O' || event.target.innerText === 'X') {
        alert('Esta casa já foi escolhida')
      }
      else {
      event.target.firstChild.innerText = this.state.letra
      event.target.style.width = '100'
      if (this.state.letra === 'X') {
          this.setState({letra: 'O'})
      }
      else if (this.state.letra === 'O') {
        this.setState({letra: 'X'})
      }
      }
    this.checar('linha', '1')
    this.checar('linha', '2')
    this.checar('linha', '3')
    this.checar('coluna', '1')
    this.checar('coluna', '2')
    this.checar('coluna', '3')
    this.checar('transversal', '1')
    this.checar('transversal', '2')
    }

    checar(eixo, num) {
        if (document.getElementsByClassName(`quadrado ${eixo}${num}`)[0].innerText !== '' && document.getElementsByClassName(`quadrado ${eixo}${num}`)[1].innerText && document.getElementsByClassName(`quadrado ${eixo}${num}`)[2].innerText) {
            if (document.getElementsByClassName(`quadrado ${eixo}${num}`)[0].innerText === document.getElementsByClassName(`quadrado ${eixo}${num}`)[1].innerText && document.getElementsByClassName(`quadrado ${eixo}${num}`)[0].innerText === document.getElementsByClassName(`quadrado ${eixo}${num}`)[2].innerText) {
                setTimeout(() => alert('Voce ganhou o jogo'), 250)
                setTimeout(() => this.redirect(), 250)
          }
        }
    }
    
    render () {
        const nome = this.props.name
        const s = "'s "
        const game = 'Game'
        return (
          <>
          <section className='home'>
            <p data-testid='playerName'>{nome !== '' ? nome + s + game: <Redirect to='/' />}</p>
          </section> 
            <section className='game'>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha1 coluna1 transversal1'><p data-testid='firstLetter' className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha1 coluna2'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha1 coluna3 transversal2'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha2 coluna1'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha2 coluna2 transversal1 transversal2'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha2 coluna3'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha3 coluna1 transversal2'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha3 coluna2'><p className='letra'></p></div>
            <div onClick={this.marcar} data-testid='quadrado' className='quadrado linha3 coluna3 transversal1'><p className='letra'></p></div>
            </section>
            <button data-testid='reset' onClick={this.redirect}>Resetar</button>
            <Link data-testid='link2' to='/'>Página Inicial</Link> 
            </>
        )
    }
}

export default Game
