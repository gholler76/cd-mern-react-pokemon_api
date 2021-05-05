import React, { useState, useEffect } from 'react';

const PokemonApi = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return (
        <>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <div>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key={index}>{pokemon.name}</div>)
                })
                }
            </div>
        </>
    );
}
export default PokemonApi;

