import React from 'react'

class Pokemon extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        return (
            <fieldset className='pokemon' id={pokemon.name}>
                <legend>Pokemon</legend>
                <li className='nome' key={pokemon.name}>Nome: {pokemon.name}</li>
                <li key={pokemon.type}>Tipo: {pokemon.type}</li>
                <li className='imagens' key={pokemon.image}><img src={pokemon.image} alt='imagem do pokemon' ></img></li>
            </fieldset>    
        )
    }
}

export default Pokemon