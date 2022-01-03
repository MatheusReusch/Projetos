import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
        const value = this.props.valor
        const handleChange = this.props.handleChange
        return (
        <section className='home'>
          <h1 data-testid='title' id='title'>Teste Nerd</h1>
          <label id='label'>
            Seu Nome:
          <input data-testid='inputName' id='name' onChange={handleChange} name='nome' value={value} type='text'></input>
          </label>
          <Link data-testid='link' id='btn' to='/teste'>Começar o teste</Link>
        </section>
        )
    }
}

export default Home
