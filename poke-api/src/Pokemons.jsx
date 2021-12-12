import React from "react";
import Pokemon from "./Pokemon";

class Pokemons extends React.Component {
    render () {
        const pokes = this.props.pokemons
        
        return pokes.map((poke) => < Pokemon pokemon={poke} key={poke.name} />)
    }
}

export default Pokemons