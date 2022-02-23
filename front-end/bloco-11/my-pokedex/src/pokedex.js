import React, { Component} from "react";
import pokemons from './data';
import Pokemon from "./pokemon";

class Pokedex extends Component {
constructor() {
    super()
    this.state = {
    pokemonIndex: 0,
    pokemonType: "Fire",
    pokemonIds: [4, 78]
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleType = this.handleType.bind(this)
}

handleNext = () => {
    if (this.state.pokemonIndex < this.state.pokemonIds.length - 1) {
    this.setState((estadoAnterior, _props) => ({
        pokemonIndex: estadoAnterior.pokemonIndex + 1,
      })) } else {
          this.setState({
              pokemonIndex: 0
          })
      }
      console.log (this.state.pokemonIndex)}

handleType = (element) => {
    let pokemonsList = pokemons.
    filter((pokes) => pokes.type === element.target.value).
    map ((elemento)=> elemento.id)
    this.setState({
        pokemonIds: pokemonsList
    })    
}
    


render () {
    let pokemonId = this.state.pokemonIds[this.state.pokemonIndex]
    console.log (pokemonId);
    return (
        <div>
            <h2>My Pokedex</h2>
            <div className="pokedex">
                {
                    pokemons
                    .filter((pokem) => pokem.id == pokemonId)
                    .map((poke) => 
                    <Pokemon 
                    name = {poke.name}
                    type = {poke.type}
                    weightValue = {poke.averageWeight.value}
                    weightUnit = {poke.averageWeight.measurementUnit}
                    image = {poke.image}
                    key = {poke.id}
                    />
                    )
                }
            </div>
            <div>
            <button value="Fire" onClick={this.handleType} className="fire-btn">Fire</button>
            <button value="Psychic" onClick={this.handleType} className="psychic-btn">Psychic</button>
            </div>
            <div><button onClick={this.handleNext} className="nxt-btn">Próximo</button>
            </div>
        </div>
    )
}
}

export default Pokedex

