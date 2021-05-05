import axios from 'axios';
import React, { useState, useEffect } from 'react';

const PokemonAxios = props => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(res => (setPokemon(res.data.results)))
    }

    return (
        <>
            <button onClick={getPokemon} >"Fetch 'em all!"</button>
            <ul>
                {pokemon.map(poke =>
                    <li>{poke.name} </li>)}
            </ul>
        </>
    )



}
export default PokemonAxios;