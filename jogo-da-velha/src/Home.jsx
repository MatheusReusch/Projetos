import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        const handleChange = this.props.handleChange
        const value = this.props.value
        return (
            <section className='home'>
            <h1>Jogo da velha</h1>
            <label>
            Insira seu nome    
            <input data-testid='input' name='name' value={value} onChange={handleChange} placeholder='Seu nome' type='text'></input>
            </label>
            <Link to='/game' data-testid='link'>Jogar</Link>
            </section>
        )
    }
}

export default Home
